console.log("smallgen.js loaded");

var intThingButton = document.getElementById("intThing");
var intResult = document.getElementById("intResult");
var wealthThingButton = document.getElementById("wealthThing");
var wealthResult = document.getElementById("wealthResult");

intThingButton.addEventListener("click", function () {
  justInterestingThing();
});

wealthThingButton.addEventListener("click", function () {
  generateWealth();
});

function justInterestingThing() {
  intResult.innerHTML = interestingThing();
}

function generateWealth() {
  wealthResult.innerHTML = justWealth();
}

function justWealth() {
  var startingWealth = "";
  var dieRoll = rollxdx(3, 6);

  myLog("Wealth Roll: " + dieRoll, "startingKit()", 1);
  if (dieRoll == 4 || dieRoll == 3) {
    startingWealth += destituteWealth();
  } else if (dieRoll >= 5 && dieRoll <= 8) {
    startingWealth += poorWealth();
  } else if (dieRoll >= 9 && dieRoll <= 13) {
    startingWealth += getByWealth();
  } else if (dieRoll >= 14 && dieRoll <= 16) {
    startingWealth += comfortableWealth();
  } else if (dieRoll == 17) {
    startingWealth += wealthyWealth();
  } else if (dieRoll == 18) {
    startingWealth += richWealth();
  }

  startingWealth += "</div>";

  myLog(startingWealth, "ENd of StartingKit()", 1);
  return startingWealth;
}

function destituteWealth() {
  var coinflip = Math.floor(Math.random() * 2);
  var money = rollxdx(1, 6) + " bits.";

  var gearList = [
    "You are destitute.  You have a sling and 20 stones, rags and a pouch containing " +
      money,
    "You are destitute.  You have a club, rags and pouch containing " + money,
  ];
  return gearList[coinflip];
}

function poorWealth() {
  var randomizer = Math.floor(Math.random() * 3);
  var money = rollxdx(2, 6) + " bits.";

  var weaponlist = ["staff", "club", "sling with 20 stones"];
  return (
    "You are poor. You have a " +
    weaponlist[randomizer] +
    ", patched basic clothing, a sack, bread, a waterskin, a tinderbox, a candle, and a pouch containing " +
    money
  );
}

function getByWealth() {
  var money = rollxdx(1, 6) + " cp.";

  var randomizer = Math.floor(Math.random() * 3);
  var weaponlist = ["staff", "club", "sling with 20 stones"];
  return (
    "You are getting by.  You have a " +
    weaponlist[randomizer] +
    ", basic clothing,a backpack, a week of rations, a waterskin, a tinderbox, 2 torches, and a pouch containing " +
    money
  );
}

function comfortableWealth() {
  var money = rollxdx(2, 6) + " cp.";

  var randomizer = Math.floor(Math.random() * 3);
  var randomizer2 = Math.floor(Math.random() * 5);
  var weaponlist = ["staff", "club", "sling with 20 stones"];

  var secondlist = [
    "small shield",
    "healer's kit",
    "tool kit",
    "writing kit",
    "scroll with an incantation of " +
      listOfZeroSpells[Math.floor(Math.random() * listOfZeroSpells.length)],
  ];
  return (
    "You are comfortable.  You have a " +
    weaponlist[randomizer] +
    ", fine clothing, a backpack, a cloak, a week of rations, a waterskin, a coil of rope, a tinderbox, 2 torches, a healing potion, and a pouch containing " +
    money +
    " You also have a " +
    secondlist[randomizer2] +
    "."
  );
}

function wealthyWealth() {
  var money = rollxdx(1, 6) + " ss.";

  var randomizer2 = Math.floor(Math.random() * 4);

  var secondlist = [
    "healer's kit",
    "tool kit",
    "writing kit",
    "scroll with an incantation of " +
      listOfZeroSpells[Math.floor(Math.random() * listOfZeroSpells.length)],
  ];
  return (
    "You are wealthy.  You have a dagger, courtier's clothing, a cloak, a backpack, a week of rations, a waterskin, a coil of rope, a tinderbox, a lantern, 2 flasks of oil, a healing potion, and a pouch containing " +
    money +
    " You also have a small shield and " +
    secondlist[randomizer2] +
    "."
  );
}

function richWealth() {
  var money = rollxdx(1, 6) + " ss.";

  return (
    "You are rich as hell.  You have a dagger, noble's clothing, a cloak, a week of rations, a waterskin, a healing potion, and a pouch containing " +
    money +
    " You also have a personal servant, a guard, and three horses with saddles."
  );
}
