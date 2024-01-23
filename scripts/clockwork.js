var clockworkLanguageStack = [
  "Common",
  "Dark Speech",
  "High Archaic",
  "Elvish",
  "Trollish",
];

var clockworkAbilityString =
  "<b>Immune:</b> Disease & Poison Damage, Asleep, Diseased, Fatigued, Poisoned<br><b>Key:</b> Your key stops turning if you are incapacitated or roll a 0 or less on an attack roll. When your key isn't turning, you are an object  As an object, you have a health of 15, a defense of 5, and cannot act until someone takes an action to wind you.  If you are incapacitated, you use the object's stabilization roll<br><b>Mechanical Body:</b> You do not eat, drink, or breathe. You do not age and you cannot be transformed into an undead creature. Your mechanical body makes it impossible for you to swim, so you sink to the bottom when you are submerged in liquid.";

var clockworkAge = [
  "",
  "",
  "",
  "You are " + rollYears(6) + " old, a new clockwork.",
  "You are " + rollYears(6) + " old, a new clockwork.",
  "You are " + rollYears(6) + " old, a new clockwork.",
  "You are " + rollYears(6) + " old, a new clockwork.",
  "You are " + rollYears(6) + " old, a new clockwork.",
  "You are " + rollYears(6) + " old, a new clockwork.",

  "You are " +
    (6 + Math.ceil(Math.random() * 4)) +
    " years old, an experienced clockwork.",
  "You are " +
    (6 + Math.ceil(Math.random() * 4)) +
    " years old, an experienced clockwork.",
  "You are " +
    (6 + Math.ceil(Math.random() * 4)) +
    " years old, an experienced clockwork.",
  "You are " +
    (6 + Math.ceil(Math.random() * 4)) +
    " years old, an experienced clockwork.",
  "You are " +
    (10 + Math.ceil(Math.random() * 40)) +
    " years old, which is old for a clockwork.",
  "You are " +
    (10 + Math.ceil(Math.random() * 40)) +
    " years old, which is old for a clockwork.",
  "You are " +
    (10 + Math.ceil(Math.random() * 40)) +
    " years old, which is old for a clockwork.",
  "You are " +
    (50 + Math.ceil(Math.random() * 100)) +
    " years old, very old for a clockwork.",
  "You are " +
    (50 + Math.ceil(Math.random() * 100)) +
    " years old, very old for a clockwork.",
  "You are " +
    (150 + Math.ceil(Math.random() * 100)) +
    " years old, ancient for a clockwork.",
];

var clockworkPurpose = [];
var clockworkForm = [];

var clockworkApp = [
  "",
  "",
  "",

  "You have a strange and unsettling appearance.",
  "You appear crude and ill-formed.",
  "You appear battered, broken, and in poor repair.",
  "You appear battered, broken, and in poor repair.",
  "You have no facial features or distinguishing markings.",
  "You have no facial features or distinguishing markings.",
  "You have a mere suggestion of facial features.",
  "You have a mere suggestion of facial features.",
  "You have a mere suggestion of facial features.",
  "You have a mere suggestion of facial features.",
  "You appear well made and in good working condition.",
  "You appear well made and in good working condition.",
  "You have a stylized and ornate body.",
  "You have a stylized and ornate body.",
  "You have an ornate body festooned with etchings and ornamental jewels.",
  "You have an exquisite body festooned with elaborate etchings and ornamental jewels, and trimmed in precious metals. If you are dismantled, your body parts are worth " +
    Math.ceil(Math.random() * 6) +
    "gc.",
];

var clockworkBackground = [
  "Your soul came from Hell. Start the game with 1d3 Corruption.",
  "Your soul was plucked from the Underworld before it could forget its former life. Start the game with 1d6 Insanity and add an extra profession.",
  "You spent " + rollYears(6) + " in a dormant state.",
  "Your maker treated you poorly. You escaped and now fear your maker will find you.",
  "Fire, plague, or monsters destroyed your home and you are the sole survivor.",
  "You were stolen from the workshop where you were made and lived as a slave for " +
    rollYears(6) +
    ".",
  "Goblins captured you and almost took you apart for scrap materials. You have replaced your missing components with bits of wood, old weapons, and other rubbish.",
  "You were left to find your own way in the world when your maker died.",
  "You fell off a boat and spent 2 years walking to shore.",
  "You worked to fulfill your purpose for " + rollYears(6) + ".",
  "Choose a member of the group. That character found you and turned your key. You owe that character a debt.",
  "You were one of " +
    (Math.ceil(Math.random() * 6) + 1) +
    " clockworks made at the same time. You hope to find the others one day.",
  "You were made to be a translator. You can speak one additional language.",
  "You were made to be a scribe. You know how to read and write the Common Tongue.",
  "Your maker set you free to find your destiny.",
  "You can't remember your past. You don't know where you came from or how you came to be where you are.",
  "You built a lasting monument in your community.",
  "You found a cryptic message inside your body. You have not yet deciphered its meaning.",
  "You have a sword grafted to one of your arms.",
  "You came into money and start the game with 2d6 cp.",
];

var clockworkPersonality = [
  "",
  "",
  "",
  "You hate living things and take pleasure in pulling them apart.",
  "You are terrified of becoming dormant.",
  "Your body gives you power and strength. You use it to enforce your will on others.",
  "Your body gives you power and strength. You use it to enforce your will on others.",
  "Your body gives you power and strength. You use it to enforce your will on others.",
  "You didn't ask for this existence, but you make the most of it while you have it.",
  "You search for meaning in a world in which you have no place.",
  "You search for meaning in a world in which you have no place.",
  "You search for meaning in a world in which you have no place.",
  "You search for meaning in a world in which you have no place.",
  "You search for meaning in a world in which you have no place.",
  "You were made to serve. You commit your existence to aiding others.",
  "You don't know how you fit into this world, but you will spend your life trying to find out.",
  "You obey the instructions of anyone you deem to be an authority.",
  "You obey the instructions of anyone you deem to be an authority.",
  "Your maker gave you three commandments and you must obey them.",
];

var clockworkNames = [
  "Gearspring",
  "Cogsworth",
  "Mechanara",
  "Chronoforge",
  "Boltan",
  "Gyrona",
  "Ticker",
  "Gearlock",
  "Quartz",
  "Steamwhisper",
  "Ratchet",
  "Brassica",
  "Automaton",
  "Cogsworth",
  "Sprocket",
  "Clockworka",
  "Titanis",
  "Gilded Gear",
  "Ticktock",
  "Gearsprocket",
  "Mechana",
  "Chronoblade",
  "Ironheart",
  "Pistonella",
  "Tickertock",
  "Steambeard",
  "Gearnova",
  "Automagia",
  "Clinker",
  "Valvora",
  "Brasslock",
  "Gearsmith",
  "Chrononaut",
  "Tickertock",
  "Gyratron",
  "Cogita",
  "Automaris",
  "Gearwing",
  "Clockstrider",
  "Steamfin",
  "Gogglebot",
  "Coglin",
  "Mechonautilus",
  "Sprocketa",
  "Gearspindle",
  "Brasslink",
  "Tickertron",
  "Gyradora",
  "Chronoheart",
  "Boltstrike",
  "Steamcog",
  "Tickertop",
  "Gearchaser",
  "Automagician",
  "Chronoblade",
  "Gearsurge",
  "Steamweaver",
  "Cogsworth",
  "Brasslock",
  "Gilded Gear",
  "Ticktock",
  "Gearforge",
  "Mechanoir",
  "Gyradon",
  "Coginator",
  "Automagia",
  "Brasslink",
  "Chronostrider",
  "Geargrind",
  "Steamspark",
  "Tickertron",
  "Quartz",
  "Clockstrider",
  "Cogsworth",
  "Mechonautilus",
  "Gyradora",
  "Gearspindle",
  "Tickertock",
  "Steamfin",
  "Gogglebot",
  "Coglin",
  "Automaris",
  "Clinker",
  "Valvora",
  "Steambeard",
  "Ticktock",
  "Gearlock",
  "Ticker",
  "Steamwhisper",
  "Chronoforge",
  "Boltan",
  "Gyrona",
  "Cogsworth",
  "Mechanara",
  "Cogsprocket",
  "Steamheart",
  "Ticktock",
  "Gyrator",
  "Cogsworth",
  "Mechanoid",
];

function setClockworkStats() {
  charStats = {
    ancestry: "Clockwork",
    strength: 9,
    agility: 8,
    intellect: 9,
    will: 9,
    perbonus: 0,
    healthbonus: 0,
    defbonus: 0,
    speedbonus: 0,
    speed: 8,
    corruption: 0,
    insanity: 0,
    charsize: 1,
    cp: 0,
    ss: 0,
    gc: 0,
    bits: 0,
    professions: 2,

    prac: 0,
    prcr: 0,
    prma: 0,
    prwi: 0,
    prco: 0,
    prre: 0,
    speak: 1,
    read: 0,
  };

  bumpStats();
  getSecondaryStats();
}

function getClockworkName() {
  return clockworkNames[Math.floor(Math.random() * clockworkNames.length)];
}

function setClockworkDetails() {
  var clockworkDetails = "<div>" + getClockworkAge() + "</div>";
  clockworkDetails += "<div>" + getClockworkPurpose() + "</div>";
  clockworkDetails += "<div>" + getClockworkForm() + "</div>";
  clockworkDetails += "<div>" + getClockworkApp() + "</div>";
  clockworkDetails += "<div>" + getClockworkBackground() + "</div>";
  clockworkDetails += "<div>" + getClockworkPersonality() + "</div>";

  return clockworkDetails;
}

function getClockworkAge() {
  var ageRoll = rollxdx(3, 6);
  return clockworkAge[ageRoll];
}

function getClockworkPurpose() {
  var d5 = rollxdx(1, 5);
  if (d5 == 1) {
    var d2 = rollxdx(1, 2);
    if (d2 == 1) {
      charStats.strength += 2;
    } else {
      charStats.agility += 2;
    }

    return "You were built for war.";
  } else if (d5 == 2) {
    charStats.strength += 2;
    return "You were built for work.";
  } else if (d5 === 3) {
    var d2 = rollxdx(1, 2);
    if (d2 == 1) {
      charStats.intellect += 2;
    } else {
      charStats.will += 2;
    }
    return "You were built to use magic.";
  } else if (d5 === 4) {
    var d2 = rollxdx(1, 2);
    if (d2 == 1) {
      charStats.intellect += 2;
    } else {
      charStats.agility += 2;
    }
    return "You were built to for intelligence operations.";
  } else if (d5 === 5) {
    var d4 = rollxdx(1, 4);
    if (d4 == 1) {
      charStats.intellect += 2;
    } else if (d4 == 2) {
      charStats.strength += 2;
    } else if (d4 == 3) {
      charStats.agility += 2;
    } else {
      charStats.will += 2;
    }
    return "You were built for mysterious, unknown purposes.";
  }
}

function getClockworkForm() {
  var buildRoll = 0;
  buildRoll = rollxdx(3, 6);

  if (buildRoll == 3) {
    charStats.charsize = "1/2";
    charStats.healthbonus += -5;
    return "You are a small winged clockwork. You can fly, but you must land at the end of your movement or fall.<br>You are 3 feet tall and weigh 50 pounds.";
  } else if (buildRoll == 4 || buildRoll == 5) {
    charStats.charsize = "1/2";
    return "You are a small spider-like clockwork with functional hands. You ignore the effects of difficult terrain when you climb.<br>You are 3 feet tall and weigh 50 pounds.";
  } else if (buildRoll > 5 && buildRoll < 10) {
    charStats.charsize = "1/2";

    return "You are a small humanoid clockwork.<br>You are 4 feet tall and weigh 75 pounds.";
  } else if (buildRoll >= 10 && buildRoll <= 15) {
    return "You are a humanoid clockwork.<br>You are 6 feet tall and weigh 300 pounds.";
  } else if (buildRoll == 16 || buildRoll == 17) {
    charStats.charsize = 2;
    charStats.speed += -2;
    charStats.defbonus += -2;
    return "You are a large humanoid clockwork. Increase your Size to 2, but reduce your Speed and your Defense by 2.<br>You are 10 feet tall and weigh 750 pounds.";
  } else if (buildRoll == 18) {
    charStats.charsize = 2;
    charStats.speed += 2;
    charStats.defbonus += -3;

    return "You are a large clockwork with the lower body of a horse. Increase your Size to 2 and your Speed by 2. Reduce your Defense by 3.<br>You are 6 feet long, 6 feet tall, and weigh 750 pounds.";
  }
}

function getClockworkApp() {
  return clockworkApp[rollxdx(3, 6)];
}

function getClockworkBackground() {
  var backgroundValue =
    clockworkBackground[Math.floor(Math.random() * clockworkBackground.length)];

  if (backgroundValue.match("You start the game with 1 Insanity.")) {
    charStats.insanity += 1;
  } else if (
    backgroundValue ==
    "Your soul came from Hell. Start the game with 1d3 Corruption."
  ) {
    var corrVal = rollxdx(1, 3);
    charStats.corruption += corrVal;
    backgroundValue =
      "Your soul came from Hell. Start the game with " +
      corrVal +
      " Corruption.";
  } else if (
    backgroundValue == "You came into money and start the game with 2d6 cp."
  ) {
    var easyMoney = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
    charStats.cp += easyMoney;
    backgroundValue =
      "You came into money and start the game with " + easyMoney + "cp.";
  } else if (backgroundValue.match("You speak one additional language.")) {
    charStats.speak += 1;
  } else if (backgroundValue.match("You know how to read")) {
    charStats.read += 1;
  } else if (
    backgroundValue ==
    "You died and returned to life. You start the game with 1d6 Insanity."
  ) {
    var startingInsanity = Math.ceil(Math.random() * 6);
    charStats.insanity += startingInsanity;
    backgroundValue =
      "You died and returned to life. You start the game with " +
      startingInsanity +
      " Insanity'";
  } else if (backgroundValue == "You found an old treasure map.") {
    specialGear += "An old treasure map.<br>";
  } else if (
    backgroundValue == "You have a sword grafted to one of your arms."
  ) {
    specialGear += "A sword grafted to your arm.<br>";
  } else if (
    backgroundValue ==
    "Your soul was plucked from the Underworld before it could forget its former life. Start the game with 1d6 Insanity and add an extra profession."
  ) {
    var startingInsanity = Math.ceil(Math.random() * 6);
    charStats.insanity += startingInsanity;
    backgroundValue =
      "Your soul was plucked from the Underworld before it could forget its former life. Start the game with " +
      startingInsanity +
      " Insanity and an extra profession,";
    charStats.professions += 1;
  }

  return backgroundValue;
}

function getClockworkPersonality() {
  var buildRoll = 0;
  buildRoll = rollxdx(3, 6);

  return clockworkPersonality[buildRoll];
}
