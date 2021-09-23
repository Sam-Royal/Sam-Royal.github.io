const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach(dropdown => {
	dropdown.addEventListener("click", event => {
		dropdown.classList.toggle("active");
		const posDropdown = dropdown.nextElementSibling;
		if(dropdown.classList.contains("active")) {
			posDropdown.style.maxHeight = posDropdown.scrollHeight + "px";
		}
		else {
			posDropdown.style.maxHeight = 0;
		}
	});
});