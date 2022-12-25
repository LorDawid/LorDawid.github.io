const blobImage = document.getElementById("blob");
blobImage.ondragstart = function () { return false; }

const arrowImage = document.getElementById("arrow");
arrowImage.ondragstart = function () { return false; }

const snapper = document.getElementById("snapper");
const project = document.getElementById("project");

function placeSnapper() {
  var top = project.getBoundingClientRect().y;  
  var pageTop = document.documentElement.getBoundingClientRect().y;
  var globalPosition = top - pageTop;

  snapper.style.top = globalPosition - visualViewport.height + "px";
}

addEventListener("resize", placeSnapper)
placeSnapper()