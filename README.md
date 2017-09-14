# intellisense
JavaScript Intellisense for input Boxes

<h2>Link</h2>

<p> Link in the required CSS and JS files. </p>

<h2>Usage</h2>

<ul>
	<li>Add a class of 'intellisense' to the text field you want intellisense to work on within your HTML</li>
	<li>Add a hidden field with the ID of 'intel-hiddenSelected' - This will hold the hovered value temporarily and use that to update the text box with the selected value</li>
	<li>Add a div with an id of 'intel-list' for the list of items to select from</li>
</ul>

<p>
	<code>
		<textarea cols='100' rows='5' class='intellisense'></textarea>

		<input type="hidden" id="intel-hiddenSelected" />

		<div id="intel-list">
		</div>
	</code>


</p>


