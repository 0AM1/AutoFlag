// Set up variables
var compWidth = 1920; // Change this to the desired width of your composition
var compHeight = 1080; // Change this to the desired height of your composition

// Prompt the user to select the folder containing the flag images
var folder = Folder.selectDialog("Select the folder containing the flag images.");

if (folder != null) {
  // Get a list of all the image files in the folder
  var files = folder.getFiles("*.jpg");
  var numVideos = files.length;

  // Create a new render queue
  var renderQueue = app.project.renderQueue;

  // Prompt the user to select a video file
  var videoFile = File.openDialog("Select a video file");

  // Make sure the user selected a file
  if (videoFile != null) {

    // Import the video file into After Effects
    var importedFootage = app.project.importFile(new ImportOptions(videoFile));

    // Create a new composition with the same duration as the video
    var compName = "dsp";
    var compWidth = importedFootage.width;
    var compHeight = importedFootage.height;
    var compDuration = importedFootage.duration;
    var compFrameRate = importedFootage.frameRate;
    var newComp = app.project.items.addComp(compName, compWidth, compHeight, 1.0, compDuration, compFrameRate);

    // Add the video to the composition
    var videoLayer = newComp.layers.add(importedFootage);

    // Center the video layer in the composition
    videoLayer.transform.anchorPoint.setValue([compWidth/2, compHeight/2]);
    videoLayer.transform.position.setValue([compWidth/2, compHeight/2]);

    // Set the in point and out point of the composition to match the video
    newComp.workAreaStart = 0;
    newComp.workAreaDuration = compDuration; 

    // Loop through each flag image and add it to the render queue
    for (var i = 1; i <= numVideos; i++) {
      var flagIndex = (i - 1) % files.length; // This will cycle through the images repeatedly

      // Create a new composition
        var compName = files[flagIndex].name.replace(/\.[^\.]+$/, ""); // Get the filename without extension
		var comp = app.project.items.addComp(compName, compWidth, compHeight, 1, 5, 30);

      
        // Add the flag image to the composition
        var flagLayer = comp.layers.add(app.project.importFile(new ImportOptions(files[flagIndex])));
      
        // Resize the flag layer to fit the composition
        var scaleWidth = compWidth / flagLayer.width;
        var scaleHeight = compHeight / flagLayer.height;
        flagLayer.scale.setValue([scaleWidth * 100, scaleHeight * 100]);

      
        // Center the flag layer in the composition
        flagLayer.position.setValue([compWidth/2, compHeight/2]);
        
        // Add the first dsp composition to the composition (above the flag layer)
        var dspLayer1 = comp.layers.add(newComp);
        dspLayer1.moveBefore(flagLayer);
        dspLayer1.blendingMode = BlendingMode.MULTIPLY;
        
        // Add the second dsp composition to the composition with Normal blending mode
        var dspLayer2 = comp.layers.add(newComp);
        dspLayer2.blendingMode = BlendingMode.NORMAL;
        dspLayer2.moveAfter(flagLayer);

        // Add Motion Tile effect to the flag layer
        var motionTileEffect = flagLayer.Effects.addProperty("Motion Tile");
        motionTileEffect.property(4).setValue(110); // Output Width
        motionTileEffect.property(5).setValue(110); // Output Height
        motionTileEffect.property(6).setValue(1); // Mirror Edges = On

        // Add Displacement Map effect to the flag layer
        var displacementMapEffect = flagLayer.Effects.addProperty("Displacement Map");
        displacementMapEffect.property(2).setValue(5); // Horizontal Displacement
        displacementMapEffect.property(3).setValue(10); // Horizontal Displacement Amount
        displacementMapEffect.property(4).setValue(5); // Vertical Displacement
        displacementMapEffect.property(5).setValue(10); // Vertical Displacement Amount
        displacementMapEffect.property(1).setValue(3); // Set Displacement Map Layer to "3.dsp"
        displacementMapEffect.property(6).setValue(2); // Set Displacement Map Behavior to "Stretch Map to Fit"
        
        // Add the composition to the render queue
        var render = renderQueue.items.add(comp);
      }
    
      // Save the project
      app.project.save();

      // Add the composition to the Adobe Media Encoder queue
      var ame = new BridgeTalk();
      ame.target = "ame";
      ame.body = "var proj = app.project; var item = proj.renderQueue.items.add(proj.items[" + (renderQueue.numItems) + "]); var outputModule = item.outputModule(1); outputModule.applyTemplate('H.264'); app.activate();";
      ame.send();


    }
}