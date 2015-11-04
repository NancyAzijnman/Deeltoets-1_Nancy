
var fieldsetProject = document.getElementById("project");
var fieldsetStage = document.getElementById("stage");

	// hide deze fieldset
	fieldsetStage.classList.add('is-invisible');
	fieldsetProject.classList.add('is-invisible');

//selecteer eerste radio button... 
document.querySelector('input[type="radio"]:first-of-type').onclick = function() {
	fieldsetProject.classList.remove('is-invisible');
	fieldsetStage.classList.add('is-invisible');
 	}

	function showStage() 
	{
		fieldsetStage.classList.remove('is-invisible');
		fieldsetProject.classList.add('is-invisible');
	}
