<h1>AutoFlag - v1.0</h1> 
<p>AutoFlag1.0 is an After Effects script that automatically generates video montages of flag animations.
</br>The script takes a folder of flag images and composes them into videos of the waving flag animations.</p>

<h2>Installation</h2>
<p>You can simply run the script from File &gt; Scripts &gt; Run Script File or to install it for later uses.</p>
<p>To install the script, simply copy the "autoflag-v1.0.jsx" file into the
"Scripts" folder of your After Effects installation. The default installation path for the "Scripts"
folder is:</p>

<pre><div class="bg-black rounded-md mb-4">
	<div class="flex items-center relative
text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between
rounded-t-md"><span>autoflag-v1.0.jsx</span></div>
<div class="p-4 overflow-y-auto"><code
class="!whitespace-pre hljs language-mathematica"><span class="hljs-built_in">C</span><span
class="hljs-operator">:</span>\<span class="hljs-variable">Program</span> <span
class="hljs-variable">Files</span>\<span class="hljs-variable">Adobe</span>\<span
class="hljs-variable">Adobe</span> <span class="hljs-built_in">After</span> <span
class="hljs-variable">Effects</span> <span class="hljs-punctuation">[</span><span
class="hljs-variable">version</span><span class="hljs-punctuation">]</span>\<span
class="hljs-variable">Support</span> <span class="hljs-variable">Files</span>\<span
class="hljs-variable">Scripts</span> </code></div>
</div></pre>

<p>Once the script is in the "Scripts" folder, it can be accessed from the "File &gt; Scripts" menu in After Effects.</p>

<h2>Usage</h2>
<p> First prepare a folder with flag images, named "Flag1.jpg, Flag2.jpg, Flag3.jpg" etc. Also download the video of a waving fabric from this repository, in case you don't have one.</p>
<p> Open After Effects and run the "autoflag-v1.0" script from the "File &gt; Scripts" menu. The script will import the
flag images into the composition, create a flag animation for each image, and prepare a render queue of the final video montages.</p>

<h2>Options</h2>
<p>The following options are available in the AutoFlag-v1.0script:</p>
<ul>
	<li><code>numVideos</code> - The number of flag videos to include in the montage.
This is automatically set based on the number of flag images in the selected
folder.</li>
	<li><code>flagInterval</code> - The duration of each flag animation in
frames.</li>
	<li><code>transitionInterval</code> - The duration of the transition between flag
animations in frames.</li>
	<li><code>outputPath</code> - The file path where the final video montage
will be saved. By default, the video is saved in the same folder as the flag images with the name
"autoflag_output.mp4".</li>
	<li><code>files = folder.getFiles("*.jpg");</code> - Specifying the format of flag files in the selected
folder.</li>
	<li><code>comp = app.project.items.addComp("Flag " + i, compWidth, compHeight, 1, 5, 30);</code> -  Final compositions settings (5 seconds long and 30fps).</li>


</ul>

<h2>Example</h2>
<p>Here's an example workflow for using
AutoFlag-v1.0:</p>
<ol>
<li>Create a folder with the flag images that you want to use in the video
montage.</li>
<li>Name the flag images as: Flag1.jpg, Flag2.jpg, Flag3.jpg ...</li>
<li>Open After Effects and run the "AutoFlag-v1.0" script from the "File &gt; Scripts" menu in After Effects.</li>
<li>Select the flag image folder in the file browser.</li>
<li>Select the video file of waving fabrique in the file browser.</li>
<li>Select all the ready compositions and press "Queue in AME".</li>
<li>Press the Render button in AME</li>
<li>Open the rendered videos to review the final
output.</li></ol>

<h2>Credits</h2>
<p>AutoFlag-v1.0 was created by 0AM1 using ChatGPT-3 without almost ANY knowledge of JavaScript, or what Github repository is,</br>but with much love for Open Source and a passion to help your life get easier. If you have any questions or suggestions for the script, please feel free to tweet me at @OlegAlonM .</p>
<h2>License</h2>
<p>License:
This project is licensed under the Creative Commons CC0 1.0 Universal (CC0 1.0) license - see the <a href="LICENSE" target="_new">LICENSE</a> file for details.</br> This means you can use, modify, and distribute the code, even for commercial purposes, without asking for permission or providing attribution.</p>
