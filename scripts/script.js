var burger = document.querySelector(".hamburger-box");

burger.addEventListener("click", function () {
  navOverLay();
});

var overlayVisible = 0;

var messagesOn = 1;
function pageReset() {
  location.reload();
}

function capitalize(words) {
  return words.charAt(0).toUpperCase() + str.slice(1);
}

function myLog(msg, reference = "Missing", rank = 0) {
  if (messagesOn < rank) {
    console.log("Source: " + reference);
    console.log(msg);
  }
}
function navOverLay() {
  if (overlayVisible === 0) {
    document.querySelector("nav").style.visibility = "visible";
    document.querySelector("body").style.overflow = "hidden";
    overlayVisible = 1;
  } else {
    document.querySelector("nav").style.visibility = "hidden";
    document.querySelector("body").style.overflow = "scroll";

    overlayVisible = 0;
  }
}
