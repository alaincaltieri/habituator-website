var selectedScreenshots = undefined;

document.addEventListener('DOMContentLoaded', function() {
   selectScreenshots(0);
}, false);


function selectScreenshots(index) {
	if (selectedScreenshots !== undefined) {
		document.getElementById("screenshots-" + selectedScreenshots).classList.remove("active");	
		document.getElementById("screenshot-menu-" + selectedScreenshots).classList.remove("selected");	
	}
	
	document.getElementById("screenshots-" + index).classList.add("active");
	document.getElementById("screenshot-menu-" + index).classList.add("selected");	

	selectedScreenshots = index;
}