var goblinStats;

var goblinLanguageStack = [
  "Common",
  "Elvish",
  "Trollish",
  "Dark Speech",
  "High Archaic",
];

var goblinSkills =
  "<b>Immune:</b> Diseased, Charm, Disease<br><b>Iron Vulnerability:</b> You are Impaired by contact with Iron.<br><b>Shadowsight:</b> You can see into areas obscured by shadow as if those areas are lit.<br><b>Sneaky:</b> Roll to hide or move silently with a boon.";

var goblinAge = [
  { val: 1 },
  { val: 2 },
  { val: 3, verbiage: "You are a child", short: "child" },
  { val: 4, verbiage: "You are an adolescent", short: "kid" },
  { val: 5, verbiage: "You are an adolescent", short: "kid" },
  { val: 6, verbiage: "You are an adolescent", short: "kid" },
  { val: 7, verbiage: "You are an adolescent", short: "kid" },
  { val: 8, verbiage: "You are a young adult", short: "ya" },
  { val: 9, verbiage: "You are a young adult", short: "ya" },
  { val: 10, verbiage: "You are a young adult", short: "ya" },
  { val: 11, verbiage: "You are a young adult", short: "ya" },
  { val: 12, verbiage: "You are a young adult", short: "ya" },
  { val: 13, verbiage: "You are an adult", short: "ad" },
  { val: 14, verbiage: "You are an adult", short: "ad" },
  { val: 15, verbiage: "You are an adult", short: "ad" },
  { val: 16, verbiage: "You are an older adult", short: "oa" },
  { val: 17, verbiage: "You are an older adult", short: "oa" },
  { val: 18, verbiage: "You are a venerable adult", short: "va" },
];

var goblinBuild = [
  "",
  "",
  "",
  "You are short and spindly.",
  "You are short and round.",
  "You are short.",
  "You are short.",
  "You are wiry.",
  "You are wiry.",
  "You are of average build (for a goblin).",
  "You are of average build (for a goblin).",
  "You are of average build (for a goblin).",
  "You are of average build (for a goblin).",
  "You are thicc.",
  "You are thicc.",
  "You are tall.",
  "You are tall.",
  "You are tall and lanky.",
  "You are very tall and lanky.",
];

var goblinApp = [
  "You have a long, pointed nose.",
  "You have bright green or orange skin.",
  "You have the head of a dog.",
  "You have a reptilian appearance with small horns sprouting from the top of your head.",
  "You have a wide, leering grin.",
  "You have a pig's snout in place of a nose.",
  "You have long, slender fingers.",
  "You have a tooth growing out from your forehead.",
  "You have a tail.",
  "Fur grows thickly on your arms and legs.",
  "You are completely hairless.",
  "You have all the warts.",
  "A large cyst grows on your back.",
  "You have an abnormally long and pointed chin.",
  "A single horn grows out from the side of your head.",
  "You have one eye.",
  "You have " +
    Math.ceil(Math.random() * 6) +
    " extra fingers, placed on your body wherever you wish.",
  "You have enormous ears.",
];

var goblinHabit = [
  "You save all your secretions in small bottles and give them as gifts to people you like.",
  "You never bathe.",
  "You punctuate your sentences by spitting.",
  "You have tremendous flatulence, yet you seem never to notice when you break wind.",
  "You eat only candy.",
  "You collect the genitals from creatures you kill and wear them as jewelry.",
  "You lick things to claim them as your own.",
  "You dress in fancy clothes.",
  "You refuse to wear shoes.",
  "You keep cockroaches as pets.",
  "You always inspect your bowel movements, spreading the mess around with your fingers.",
  "You keep a bit of iron on your person at all times.",
  "You speak in a singsong voice.",
  "You eat a bit of flesh from any living thing you kill.",
  "You cry a lot.",
  "You tell filthy jokes at inappropriate times.",
  "You wear a child's costume and refuse to take it off.",
  "You keep a large collection of spoons.",
  "You like to hide.",
];

var goblinBackground = [
  "You spent the last " +
    Math.ceil(Math.random() * 6) +
    " years in a drunken stupor. You're not proud.",
  "The Goblin King turned you into a toad. You escaped that fate after you convinced an elf maiden to kiss you. When she did and screamed, you killed her. You start the game with 1 Corruption.",
  "You accidentally got your entire tribe killed.",
  "You were orphaned and raised by giant rats.",
  "You accidentally released a demon into the world.",
  "You spent two days believing you were a fearsome dog. You start the game with 1 Insanity.",
  "A hag made you her love slave for " +
    Math.ceil(Math.random() * 6) +
    " years. ",
  "Dwarfs almost wiped out your tribe. You are one of " +
    Math.ceil(Math.random() * 6) +
    " survivors.",
  "You nearly drowned when the sewers flooded.",
  "You earned a living working in your profession.",
  "Another character saved your life and you now owe that character a debt.",
  "You are an unrepentant criminal and have an additional criminal profession.",
  "You traveled extensively. You speak one additional language.",
  "You stole a knife from a dashing knight.",
  "You snuck into Alfheim and stole a lock of hair from the Faerie Queen.",
  "You killed and ate 100 diseased rats.",
  "You were a henchman to a powerful wizard.",
  "You found a signet ring in a sewer.",
  "You are the seventeenth son or daughter of the Goblin King",
  "You came into money and start the game with 2d6 cp",
];

var goblinPersonality = [
  "",
  "",
  "",
  "You are a bully and enjoy tormenting things that are weaker than you.",
  "You like violence, especially when it's random and senseless.",
  "You try to rise above the filth and squalor of your people to do good in the world.",
  "You try to rise above the filth and squalor of your people to do good in the world.",

  "You love playing tricks on other people and find their pain hilarious!",
  "You love playing tricks on other people and find their pain hilarious!",

  "You look out for yourself. To hell with everyone else!",
  "You look out for yourself. To hell with everyone else!",
  "You look out for yourself. To hell with everyone else!",
  "You look out for yourself. To hell with everyone else!",

  "You're just trying to stay alive!",
  "You're just trying to stay alive!",

  "Your people didn't deserve exile, but exile you got. You believe you will make places for yourselves and prove to those stinking elves they were wrong.",
  "Your people didn't deserve exile, but exile you got. You believe you will make places for yourselves and prove to those stinking elves they were wrong.",
  "You live to serve the strong and mighty.",
  "You hope to redeem your people in the eyes of the Faerie Queen.",
];

var goblinNames = [
  "Snikkletoe",
  "Grizzlegrin",
  "Nogglewart",
  "Snagglefang",
  "Gloomsnarl",
  "Wobbleknee",
  "Sludgegob",
  "Muckmuzzle",
  "Rumblebelly",
  "Quibblesnout",
  "Fangsnapper",
  "Grittlepox",
  "Blightspike",
  "Snatchfist",
  "Toilnibble",
  "Snarlgrip",
  "Jibberjaw",
  "Slurgtongue",
  "Snickerclaw",
  "Grounchgrim",
  "Quibblenose",
  "Noodleknot",
  "Grumblethorn",
  "Squabblesnarl",
  "Razzlefist",
  "Grogglewort",
  "Snivelsnap",
  "Muddlegrunt",
  "Blazefang",
  "Nudgegrunt",
  "Twitchtooth",
  "Ruckusmaw",
  "Snickerwhisk",
  "Slabbershank",
  "Gloomgurgle",
  "Wobblewhisk",
  "Quiverlurk",
  "Snortsnout",
  "Tanglefang",
  "Gobblegloom",
  "Jibberwhisk",
  "Mizzleblight",
  "Rumblefist",
  "Slimespindle",
  "Sniggerfang",
  "Grizzlewarp",
  "Nudgeknee",
  "Slumberclaw",
  "Blunkerbash",
  "Grounchfizzle",
  "Quibblequill",
  "Snickerbash",
  "Glimmerfang",
  "Muzzlewhirl",
  "Snatchgurgle",
  "Razzlewarp",
  "Gloomwhisk",
  "Squigglemaw",
  "Snarltooth",
  "Nibbleknee",
  "Blightgrip",
  "Grumblefist",
  "Wobblejaw",
  "Noodlewhirl",
  "Snigglewhisk",
  "Jibberjaw",
  "Mumblethorn",
  "Grouchgrim",
  "Snickerclaw",
  "Quibblenose",
  "Noodleknot",
  "Grumblethorn",
  "Squabblesnarl",
  "Razzlefist",
  "Grogglewort",
  "Snivelsnap",
  "Muddlegrunt",
  "Blazefang",
  "Nudgegrunt",
  "Twitchtooth",
  "Ruckusmaw",
  "Snickerwhisk",
  "Slabbershank",
  "Gloomgurgle",
  "Wobblewhisk",
  "Quiverlurk",
  "Snortsnout",
  "Tanglefang",
  "Gobblegloom",
  "Jibberwhisk",
  "Mizzleblight",
  "Rumblefist",
  "Slimespindle",
  "Sniggerfang",
  "Grizzlewarp",
  "Nudgeknee",
  "Slumberclaw",
  "Blunkerbash",
  "Grounchfizzle",
  "Quibblequill",
];

function generateGoblin() {
  resetGoblinStats();
  generateSecondaryGoblinStats();

  var detailString = "";
  var gearString = "";
  var goblinAgeValue = getGoblinAge();
  detailString += "<div>" + goblinAgeValue + "</div>";
  detailString += "<div>" + getGoblinBuild() + "</div>";
  detailString += "<div>" + getGoblinApp() + "</div>";
  detailString += "<div>" + getGoblinHabit() + "</div>";
  detailString += "<div>" + getGoblinBackground() + "</div>";
  detailString += "<div>" + getGoblinPersonality() + "</div>";
  goblinGear = goblinStartingCash();
  detailString += "<div>You are " + goblinGear[0] + ".</div>";
  detailString += "<div class='proftitle'>Professions</div>";

  getGoblinProfTypes();
  if (goblinStats.prac > 0) {
    detailString += "<div class='profcat'>Academic:</div>";
    goblinLearnLanguage(goblinStats.prac);
    for (i = 0; i < goblinStats.prac; i++) {
      detailString += "<div class='prof'>" + goblinAddAcademic() + "</div>";
    }
  }
  if (goblinStats.prco > 0) {
    detailString += "<div class='profcat'>Common:</div>";
    for (i = 0; i < goblinStats.prco; i++) {
      detailString += "<div class='prof'>" + goblinAddCommon() + "</div>";
    }
  }
  if (goblinStats.prcr > 0) {
    detailString += "<div class='profcat'>Criminal:</div>";
    for (i = 0; i < goblinStats.prcr; i++) {
      detailString += "<div class='prof'>" + goblinAddCriminal() + "</div>";
    }
  }
  if (goblinStats.prma > 0) {
    detailString += "<div class='profcat'>Martial:</div>";
    for (i = 0; i < goblinStats.prma; i++) {
      detailString += "<div class='prof'>" + goblinAddMartial() + "</div>";
    }
  }
  if (goblinStats.prre > 0) {
    detailString += "<div class='profcat'>Religious:</div>";
    for (i = 0; i < goblinStats.prre; i++) {
      detailString += "<div class='prof'>" + goblinAddReligious() + "</div>";
    }
  }
  if (goblinStats.prwi > 0) {
    detailString += "<div class='profcat'>Wilderness:</div>";
    for (i = 0; i < goblinStats.prwi; i++) {
      detailString += "<div class='prof'>" + goblinAddWilderness() + "</div>";
    }
  }

  detailString += "<div class='proftitle'>Abilities</div>";
  detailString += "<div>" + goblinSkills + "</div>";
  detailString += "<div><b>Speak: </b>" + goblinSpeakList() + "</div>";
  detailString += "<div><b>Read/Write: </b>" + goblinReadList() + "</div>";

  gearString += "<div class='proftitle'>Gear</div>";
  gearString += "<div>" + goblinGear[1] + "</div>";
  gearString += "<div><br></div>";

  gearString += "<div>" + goblinInterestingThing() + "</div>";

  goblinNudgeStats();

  //   if (goblinStats.prac > 0
  //     )
  //   then { detailString +="<div>Academic</div>";}

  //   console.log(detailString);
  //   console.log(document.querySelector(".charDetails").innerHTML);
  document.querySelector(".chardetails").innerHTML = detailString;
  document.querySelector(".gear").innerHTML = gearString;

  document.querySelector("#str").innerHTML = goblinStats.strength;
  document.querySelector("#strmod").innerHTML = goblinStats.strmod;
  document.querySelector("#agi").innerHTML = goblinStats.agility;
  document.querySelector("#agimod").innerHTML = goblinStats.agimod;
  document.querySelector("#int").innerHTML = goblinStats.intellect;
  document.querySelector("#intmod").innerHTML = goblinStats.intmod;
  document.querySelector("#wil").innerHTML = goblinStats.will;
  document.querySelector("#wilmod").innerHTML = goblinStats.wilmod;
  document.querySelector("#per").innerHTML = goblinStats.perception;
  document.querySelector("#permod").innerHTML = goblinStats.permod;
  document.querySelector("#health").innerHTML = goblinStats.health;
  document.querySelector("#speed").innerHTML = goblinStats.speed;
  document.querySelector("#recovery").innerHTML = goblinStats.recovery;
  document.querySelector("#bdef").innerHTML = goblinStats.defence;
  document.querySelector("#damage").innerHTML = 0;
  document.querySelector("#insanity").innerHTML = goblinStats.insanity;
  document.querySelector("#corruption").innerHTML = goblinStats.corruption;
  document.querySelector(".bits").innerHTML = goblinStats.bits;
  document.querySelector(".cp").innerHTML = goblinStats.cp;
  document.querySelector(".ss").innerHTML = goblinStats.ss;
  document.querySelector(".gc").innerHTML = goblinStats.gc;

  document.querySelector(".charname").innerHTML = goblinNameGet();
  document.querySelector(".ancestry").innerHTML = "Goblin";
}

function resetGoblinStats() {
  goblinStats = {
    strength: 8,
    agility: 12,
    intellect: 10,
    will: 9,
    speed: 10,
    corruption: 0,
    insanity: 0,
    size: "1/2",
    cp: 0,
    ss: 0,
    gc: 0,
    bits: 0,
    prac: 0,
    prcr: 0,
    prma: 0,
    prwi: 0,
    prco: 0,
    prre: 0,
    speak: 2,
    read: 0,
  };
}

function generateSecondaryGoblinStats() {
  goblinStats.perception = goblinStats.intellect + 1;
  goblinStats.health = goblinStats.strength;
  goblinStats.recovery = Math.floor(goblinStats.health / 4);
  goblinStats.defence = goblinStats.agility;
  goblinStats.strmod = calculateBonus(goblinStats.strength);
  goblinStats.agimod = calculateBonus(goblinStats.agility);
  goblinStats.intmod = calculateBonus(goblinStats.intellect);
  goblinStats.wilmod = calculateBonus(goblinStats.will);
  goblinStats.permod = calculateBonus(goblinStats.perception);
}

function getGoblinAge() {
  var ageRoll = 0;
  var thisGoblin;
  ageRoll = rollxdx(3, 6);
  thisGoblin = goblinAge[ageRoll];
  if (thisGoblin.short == "child") {
    thisGoblin.agenum = 6;
  } else if (thisGoblin.short == "kid") {
    thisGoblin.agenum = 6 + Math.ceil(Math.random() * 4);
  } else if (thisGoblin.short == "ya") {
    thisGoblin.agenum = 10 + Math.ceil(Math.random() * 15);
  } else if (thisGoblin.short == "ad") {
    thisGoblin.agenum = 25 + Math.ceil(Math.random() * 25);
  } else if (thisGoblin.short == "oa") {
    thisGoblin.agenum = 50 + Math.ceil(Math.random() * 25);
  } else if (thisGoblin.short == "va") {
    thisGoblin.agenum = 75 + Math.floor(Math.random() * 25);
  }

  var goblinAgeString =
    thisGoblin.verbiage + "; " + thisGoblin.agenum + " years old.";
  console.log(goblinAgeString);

  return goblinAgeString;
}

function getGoblinBuild() {
  var buildRoll = 0;
  buildRoll = rollxdx(3, 6);

  return goblinBuild[buildRoll];
}

function getGoblinApp() {
  return goblinApp[Math.floor(Math.random() * goblinApp.length)];
}

function getGoblinHabit() {
  return goblinHabit[Math.floor(Math.random() * goblinHabit.length)];
}

function getGoblinBackground() {
  var backgroundValue =
    goblinBackground[Math.floor(Math.random() * goblinBackground.length)];
  if (backgroundValue.match("You start the game with 1 Insanity.")) {
    goblinStats.insanity += 1;
  } else if (backgroundValue.match("You start the game with 1 Corruption.")) {
    goblinStats.corruption += 1;
  } else if (
    backgroundValue == "You came into money and start the game with 2d6 cp"
  ) {
    var easyMoney = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
    goblinStats.cp += easyMoney;
    backgroundValue =
      "You came into money and start the game with " + easyMoney + "cp.";
  } else if (
    backgroundValue ==
    "You are an unrepentant criminal and have an additional criminal profession."
  ) {
    goblinStats.prcr += 1;
  } else if (backgroundValue.match("You speak one additional language.")) {
    goblinLearnLanguage();
  }

  return backgroundValue;
}

function getGoblinPersonality() {
  var buildRoll = 0;
  buildRoll = rollxdx(3, 6);

  return goblinPersonality[buildRoll];
}

function getGoblinProfTypes() {
  var dieroll = 0;
  for (i = 0; i < 2; i++) {
    dieroll = Math.ceil(Math.random() * 6);
    if (dieroll == 1) {
      goblinStats.prac += 1;
    } else if (dieroll == 2) {
      goblinStats.prcr += 1;
    } else if (dieroll == 3) {
      goblinStats.prco += 1;
    } else if (dieroll == 4) {
      goblinStats.prma += 1;
    } else if (dieroll == 5) {
      goblinStats.prre += 1;
    } else if (dieroll == 6) {
      goblinStats.prwi += 1;
    }
  }
}

function goblinLearnLanguage(langs) {
  goblinStats.speak += 1;
}

function goblinLearntoRead() {
  goblinStats.read += 1;
}

function goblinAddAcademic() {
  var profValue =
    academicProfessions[Math.floor(Math.random() * academicProfessions.length)];
  goblinLearntoRead();

  return profValue;
}

function goblinAddCommon() {
  var profValue =
    commonProfessions[Math.floor(Math.random() * commonProfessions.length)];
  if (profValue.match("Poet")) {
    goblinLearntoRead();
  } else if (profValue.match("Writer")) {
    goblinLearntoRead();
  }

  return profValue;
}

function goblinAddCriminal() {
  var profValue =
    criminalProfessions[Math.floor(Math.random() * criminalProfessions.length)];

  return profValue;
}

function goblinAddMartial() {
  var profValue =
    martialProfessions[Math.floor(Math.random() * martialProfessions.length)];

  return profValue;
}

function goblinAddWilderness() {
  var profValue =
    wildernessProfessions[
      Math.floor(Math.random() * wildernessProfessions.length)
    ];

  return profValue;
}

function goblinAddReligious() {
  var profValue =
    religiousProfessions[
      Math.floor(Math.random() * religiousProfessions.length)
    ];
  if (
    profValue === "Devotee" ||
    profValue === "Evangelist" ||
    profValue === "Evangelist" ||
    profValue === "Acolyte of the New God"
  ) {
    goblinLearntoRead();
  }
  return profValue;
}

function goblinStartingCash() {
  var dieRoll = rollxdx(3, 6);
  console.log("Wealth Roll: " + dieRoll);
  if (dieRoll == 4 || dieRoll == 3) {
    goblinStats.bits += Math.ceil(Math.random() * 6);
    return ["destitute", destituteGear()];
  } else if (dieRoll >= 5 && dieRoll <= 8) {
    goblinStats.bits +=
      Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
    return ["poor", poorGear()];
  } else if (dieRoll >= 9 && dieRoll <= 13) {
    goblinStats.cp = Math.ceil(Math.random() * 6);
    return ["getting by", getByGear()];
  } else if (dieRoll >= 14 && dieRoll <= 16) {
    goblinStats.cp =
      Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
    return ["comfortable", comfortableGear()];
  } else if (dieRoll == 17) {
    goblinStats.ss = Math.ceil(Math.random() * 6);

    return ["wealthy", wealthyGear()];
  } else if (dieRoll == 18) {
    goblinStats.ss =
      Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
    return ["rich", richGear()];
  }
}

function goblinInterestingThing() {
  return interestingThings[
    Math.floor(Math.random() * interestingThings.length)
  ];
}

function goblinNudgeStats() {
  var check1 = rollxdx(1, 4);
  if (check1 == 1) {
    var dieroll = rollxdx(1, 4);
    if (dieroll == 1) {
      lowerGoblinStrength();
    } else if (dieroll == 2) {
      lowerGoblinAgility();
    } else if (dieroll == 3) {
      lowerGoblinIntellect();
    } else if (dieroll == 4) {
      lowerGoblinWill();
    }
  }
}

function lowerGoblinStrength() {
  goblinStats.strength += -1;
  var dieroll = rollxdx(1, 3);
  if (dieroll == 1) {
    raiseGoblinAgility();
  } else if (dieroll == 2) {
    raiseGoblinIntellect();
  } else if (dieroll == 3) {
    raiseGoblinWill();
  }
  console.log("Lowered Strength");
}
function lowerGoblinAgility() {
  goblinStats.agility += -1;
  var dieroll = rollxdx(1, 3);
  if (dieroll == 1) {
    raiseGoblinStrength();
  } else if (dieroll == 2) {
    raiseGoblinIntellect();
  } else if (dieroll == 3) {
    raiseGoblinWill();
  }
  console.log("Lowered Agulity");
}

function lowerGoblinIntellect() {
  goblinStats.intellect += -1;
  var dieroll = rollxdx(1, 3);
  if (dieroll == 1) {
    raiseGoblinStrength();
  } else if (dieroll == 2) {
    raiseGoblinAgility();
  } else if (dieroll == 3) {
    raiseGoblinWill();
  }
  console.log("Lowered Int");
}

function lowerGoblinWill() {
  goblinStats.will += -1;
  var dieroll = rollxdx(1, 3);
  if (dieroll == 1) {
    raiseGoblinStrength();
  } else if (dieroll == 2) {
    raiseGoblinIntellect();
  } else if (dieroll == 3) {
    raiseGoblinAgility();
  }
  console.log("Lowered Will");
}

function raiseGoblinStrength() {
  goblinStats.strength += 1;
  generateSecondaryGoblinStats();

  console.log("Raised STR");
}

function raiseGoblinAgility() {
  goblinStats.agility += 1;
  generateSecondaryGoblinStats();

  console.log("Raised agi");
}

function raiseGoblinIntellect() {
  goblinStats.intellect += 1;
  generateSecondaryGoblinStats();

  console.log("Raised INT");
}

function raiseGoblinWill() {
  goblinStats.will += 1;
  generateSecondaryGoblinStats();

  console.log("Raised Will");
}

function goblinSpeakList() {
  var speakList = "";
  for (i = 0; i < goblinStats.speak; i++) {
    speakList += goblinLanguageStack[i];
    if (i < goblinStats.speak - 1) {
      speakList += ", ";
    }
  }
  return speakList;
}
function goblinReadList() {
  var readList = "";
  for (i = 0; i < goblinStats.read; i++) {
    readList += goblinLanguageStack[i];
    if (i < goblinStats.read - 1) {
      readList += ", ";
    }
  }
  if (goblinStats.read == 0) {
    readList = "None";
  }
  return readList;
}

function goblinNameGet() {
  return goblinNames[Math.floor(Math.random() * goblinNames.length)];
}
