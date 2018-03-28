var noemi = document.getElementById("noemi");
var kakashi = document.getElementById("kakashi");
var photography = document.getElementById("photography");


noemi.addEventListener("click", picLink);
kakashi.addEventListener("click", picLink);
photography.addEventListener("click", picLink);

function picLink() {
	var allImages = document.querySelectorAll("img");
	for (var i = 0; i <
allImages.length; i++) {
		allImages[i].className = "hide";
	}
	
	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className === "hide") {
		pic.className = "";
	} else {
		pic.className = "hide";
	}
}

