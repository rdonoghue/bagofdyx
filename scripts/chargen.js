var Ancestry = "";
var ancestryList = ["Goblin", "Human", "Clockwork"];

document
  .querySelector("#generate-button")
  .addEventListener("click", function () {
    document.querySelector(".lcol").style.visibility = "visible";
    document.querySelector(".midcol").style.visibility = "visible";
    document.querySelector(".rcol").style.visibility = "visible";
    Ancestry = "Goblin";
    generateCharacter();
  });

document.querySelector("#new-button").addEventListener("click", function () {
  document.querySelector(".lcol").style.visibility = "visible";
  document.querySelector(".midcol").style.visibility = "visible";
  document.querySelector(".rcol").style.visibility = "visible";
  Ancestry = "Human";
  generateCharacter();
});

document
  .querySelector("#clockwork-button")
  .addEventListener("click", function () {
    document.querySelector(".lcol").style.visibility = "visible";
    document.querySelector(".midcol").style.visibility = "visible";
    document.querySelector(".rcol").style.visibility = "visible";
    Ancestry = "Clockwork";
    generateCharacter();
  });

document.querySelector("#random-button").addEventListener("click", function () {
  document.querySelector(".lcol").style.visibility = "visible";
  document.querySelector(".midcol").style.visibility = "visible";
  document.querySelector(".rcol").style.visibility = "visible";
  var dieRoll = rollxdx(1, 3) - 1;

  Ancestry = ancestryList[dieRoll];
  generateCharacter();
});

var nameString;
var charStats;
var languageList;
var specialGear = "";
var noteString = "";
var detailString = "";
var professionString = "";
var abilityString = "";
var gearString = "";

function generateCharacter() {
  charStats = "";
  nameString = "";
  console.log(charStats);
  specialGear = "";
  noteString = "";
  professionString = "";
  detailString = "";
  abilityString = "";
  gearString = "";
  specialGear = "";

  if (Ancestry == "Human") {
    languageList = humanLanguageStack;
    abilityString = humanAbilityString;
    setHumanStats();
    detailString += setHumanDetails();
    nameString = getHumanName();
  } else if (Ancestry == "Goblin") {
    languageList = goblinLanguageStack;
    abilityString = goblinAbilityString;
    setGoblinStats();
    detailString += setGoblinDetails();
    nameString = getGoblinName();
  } else if (Ancestry == "Clockwork") {
    languageList = clockworkLanguageStack;
    abilityString = clockworkAbilityString;
    setClockworkStats();
    detailString += setClockworkDetails();
    nameString = getClockworkName();
  }

  professionString = setProfessions();
  abilityString = setAbilities();
  gearString = startingKit();

  specialGear += interestingThing();
  gearString += "<div>" + specialGear + "</div>";
  getSecondaryStats();
  writeStats();
  writeDetails(detailString);
  writeProfession(professionString);
  writeAbilities(abilityString);
  writeGear(gearString);
  writeMoney();
  writeName(nameString);

  console.log(charStats);
}

function getSecondaryStats() {
  charStats.perception = charStats.intellect + charStats.perbonus;
  charStats.health = charStats.strength + charStats.healthbonus;
  charStats.recovery = Math.floor(charStats.health / 4);
  charStats.defence = charStats.agility + charStats.defbonus;
  charStats.strmod = calculateBonus(charStats.strength);
  charStats.agimod = calculateBonus(charStats.agility);
  charStats.intmod = calculateBonus(charStats.intellect);
  charStats.wilmod = calculateBonus(charStats.will);
  charStats.permod = calculateBonus(charStats.perception);

  if (Ancestry == "Clockwork") {
    charStats.defence = 13 + charStats.defbonus;
  }
}

function writeStats() {
  document.querySelector("#str").innerHTML = charStats.strength;
  document.querySelector("#strmod").innerHTML = charStats.strmod;
  document.querySelector("#agi").innerHTML = charStats.agility;
  document.querySelector("#agimod").innerHTML = charStats.agimod;
  document.querySelector("#int").innerHTML = charStats.intellect;
  document.querySelector("#intmod").innerHTML = charStats.intmod;
  document.querySelector("#wil").innerHTML = charStats.will;
  document.querySelector("#wilmod").innerHTML = charStats.wilmod;
  document.querySelector("#per").innerHTML = charStats.perception;
  document.querySelector("#permod").innerHTML = charStats.permod;
  document.querySelector("#health").innerHTML = charStats.health;
  document.querySelector("#speed").innerHTML = charStats.speed;
  document.querySelector("#size").innerHTML = charStats.charsize;

  document.querySelector("#recovery").innerHTML = charStats.recovery;
  document.querySelector("#bdef").innerHTML = charStats.defence;
  document.querySelector("#damage").innerHTML = 0;
  document.querySelector("#insanity").innerHTML = charStats.insanity;
  document.querySelector("#corruption").innerHTML = charStats.corruption;
  document.querySelector(".ancestry").innerHTML = Ancestry;
}

function writeMoney() {
  document.querySelector(".bits").innerHTML = charStats.bits;
  document.querySelector(".cp").innerHTML = charStats.cp;
  document.querySelector(".ss").innerHTML = charStats.ss;
  document.querySelector(".gc").innerHTML = charStats.gc;
}

function writeDetails(detailString = "No Details Yet") {
  var writeString = "<div class='proftitle'>Details</div>";
  writeString += detailString;

  document.querySelector(".chardetails").innerHTML = writeString;
}

function writeProfession(pString = "No Profession yet") {
  document.querySelector(".charprofessions").innerHTML = pString;
}

function writeName(nameString) {
  document.querySelector(".charname").innerHTML = nameString;
}
function bumpStats() {
  var check1 = rollxdx(1, 4);
  if (check1 == 1) {
    var dieroll = rollxdx(1, 4);
    if (dieroll == 1) {
      lowerStrength();
    } else if (dieroll == 2) {
      lowerAgility();
    } else if (dieroll == 3) {
      lowerIntellect();
    } else if (dieroll == 4) {
      lowerWill();
    }
  }
}

function lowerStrength() {
  charStats.strength += -1;
  var dieroll = rollxdx(1, 3);
  if (dieroll == 1) {
    raiseAgility();
  } else if (dieroll == 2) {
    raiseIntellect();
  } else if (dieroll == 3) {
    raiseWill();
  }
  noteString += "Lowered Strength, ";
  console.log("Lowered Strength");
}
function lowerAgility() {
  charStats.agility += -1;
  var dieroll = rollxdx(1, 3);
  if (dieroll == 1) {
    raiseStrength();
  } else if (dieroll == 2) {
    raiseIntellect();
  } else if (dieroll == 3) {
    raiseWill();
  }
  noteString += "Lowered Agility, ";

  console.log("Lowered Agulity");
}

function lowerIntellect() {
  charStats.intellect += -1;
  var dieroll = rollxdx(1, 3);
  if (dieroll == 1) {
    raiseStrength();
  } else if (dieroll == 2) {
    raiseAgility();
  } else if (dieroll == 3) {
    raiseWill();
  }
  noteString += "Lowered Intellect, ";

  console.log("Lowered Int");
}

function lowerWill() {
  charStats.will += -1;
  var dieroll = rollxdx(1, 3);
  if (dieroll == 1) {
    raiseStrength();
  } else if (dieroll == 2) {
    raiseIntellect();
  } else if (dieroll == 3) {
    raiseAgility();
  }
  noteString += "Lowered Will, ";

  console.log("Lowered Will");
}

function raiseStrength() {
  charStats.strength += 1;

  noteString += "raised Strength.<br> ";

  console.log("Raised STR");
}

function raiseAgility() {
  charStats.agility += 1;

  console.log("Raised agi");
  noteString += "raised Agility.<br> ";
}

function raiseIntellect() {
  charStats.intellect += 1;

  noteString += "raised Intellect.<br> ";

  console.log("Raised INT");
}

function raiseWill() {
  charStats.will += 1;

  noteString += "raised Will.<br> ";

  console.log("Raised Will");
}

function speakList() {
  var speakList = "";
  for (i = 0; i < charStats.speak; i++) {
    speakList += languageList[i];
    if (i < charStats.speak - 1) {
      speakList += ", ";
    }
  }
  return speakList;
}
function readList() {
  var readList = "";
  for (i = 0; i < charStats.read; i++) {
    readList += languageList[i];
    if (i < charStats.read - 1) {
      readList += ", ";
    }
  }
  if (charStats.read == 0) {
    readList = "None";
  }
  return readList;
}

function setAbilities() {
  var abString = "<div class='proftitle'>Abilities</div>";

  if (abilityString) {
    abString += "<div>" + abilityString + "</div>";
  }
  abString += "<div><b>Speak: </b>" + speakList() + "</div>";
  abString += "<div><b>Read/Write: </b>" + readList() + "</div>";
  return abString;
}

function writeAbilities(Abl = "No Abilities") {
  document.querySelector(".charabilities").innerHTML = Abl;
}

function startingKit() {
  var kitString = "<div class='proftitle'>Gear</div><div>";
  var dieRoll = rollxdx(3, 6);

  console.log("Wealth Roll: " + dieRoll);
  if (dieRoll == 4 || dieRoll == 3) {
    charStats.bits += Math.ceil(Math.random() * 6);
    kitString += destituteGear();
  } else if (dieRoll >= 5 && dieRoll <= 8) {
    charStats.bits +=
      Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
    kitString += poorGear();
  } else if (dieRoll >= 9 && dieRoll <= 13) {
    charStats.cp = Math.ceil(Math.random() * 6);
    kitString += getByGear();
  } else if (dieRoll >= 14 && dieRoll <= 16) {
    charStats.cp = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
    kitString += comfortableGear();
  } else if (dieRoll == 17) {
    charStats.ss = Math.ceil(Math.random() * 6);

    kitString += wealthyGear();
  } else if (dieRoll == 18) {
    charStats.ss = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
    kitString += richGear();
  }

  kitString += "</div>";

  console.log(kitString);
  return kitString;
}

function writeGear(kit) {
  document.querySelector(".gear").innerHTML = kit;
}

function interestingThing() {
  return interestingThings[
    Math.floor(Math.random() * interestingThings.length)
  ];
}
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
