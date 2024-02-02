myLog("miroInteresting.js loaded", "initializing", 0);

var intThingButton = document.getElementById("intThing");
var intResult = document.getElementById("intResult");

intThingButton.addEventListener("click", function () {
  justInterestingThing();
});

function justInterestingThing() {
  intResult.innerHTML = interestingThing();
}
