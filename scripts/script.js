myLog("scripts.js loaded", "initializing", 0);
var messagesOn = 0;

var burger = document.querySelector(".hamburger-box");
var overlayVisible = 0;

burger.addEventListener("click", function () {
  navOverLay();
});

function pageReset() {
  location.reload();
}

function capitalize(words) {
  return words.charAt(0).toUpperCase() + str.slice(1);
}

function myLog(msg, reference = "Missing", rank = 0) {
  if (messagesOn <= rank) {
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

function rollxdx(dicenum = 1, dicesize = 6) {
  var diceResult = 0;
  var latestRoll = 0;
  var diceAverage = 0;

  for (let i = 0; i < dicenum; i++) {
    latestRoll = Math.ceil(Math.random() * dicesize);

    diceResult = diceResult + latestRoll;
  }
  diceAverage = Math.round((diceResult / dicenum) * 100) / 100;

  return diceResult;
}

function rollYears(years = 6) {
  var dieRoll = Math.ceil(Math.random() * years);
  if (dieRoll === 1) {
    return "1 year";
  } else {
    return dieRoll + " years";
  }
}

function listPick(myList) {
  return myList[Math.floor(Math.random() * myList.length)];
}
