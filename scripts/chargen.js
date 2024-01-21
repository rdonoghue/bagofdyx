document
  .querySelector("#generate-button")
  .addEventListener("click", function () {
    generateGoblin();
    document.querySelector(".lcol").style.visibility = "visible";
    document.querySelector(".midcol").style.visibility = "visible";
    document.querySelector(".rcol").style.visibility = "visible";
  });

function calculateBonus(stat = 10) {
  bonusVal = stat - 10;
  if (bonusVal > 0) {
    return "+" + bonusVal;
  } else {
    return bonusVal;
  }
}
function rollxdx(dicenum = 1, dicesize = 6) {
  var diceResult = 0;
  var latestRoll = 0;
  var diceAverage = 0;

  for (let i = 0; i < dicenum; i++) {
    latestRoll = Math.ceil(Math.random() * dicesize);

    diceResult = diceResult + latestRoll;
    // console.log(latestRoll);
  }
  diceAverage = Math.round((diceResult / dicenum) * 100) / 100;
  //   console.log(diceResult);
  //   console.log("AVG: " + diceAverage);
  return diceResult;
}
