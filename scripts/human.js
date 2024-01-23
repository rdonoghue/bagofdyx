var humanAbilityString = "";
var humanLanguageStack = [
  "Common",
  "High Archaic",
  "Elvish",
  "Trollish",
  "Dark Speech",
];

var humanNames = [
  "Aerith",
  "Eldric",
  "Lysandra",
  "Thalion",
  "Elysia",
  "Zephyr",
  "Kieran",
  "Seraphina",
  "Finley",
  "Elowen",
  "Cedric",
  "Isolde",
  "Galadriel",
  "Ragnar",
  "Lyra",
  "Darian",
  "Aria",
  "Thorne",
  "Calista",
  "Voss",
  "Alaric",
  "Morrigan",
  "Seraphiel",
  "Valerius",
  "Amara",
  "Draven",
  "Elara",
  "Nyx",
  "Varian",
  "Sylas",
  "Selene",
  "Thaddeus",
  "Vesper",
  "Lysander",
  "Belladonna",
  "Dante",
  "Morwen",
  "Magnus",
  "Isabeau",
  "Malachai",
  "Ravenna",
  "Silas",
  "Azrael",
  "Viktor",
  "Nysandria",
  "Darius",
  "Varkan",
  "Falken",
  "Cain",
  "Morgana",
  "Jareth",
  "Ignatius",
  "Bellatrix",
  "Damien",
  "Valeria",
  "Morrigan",
  "Azariah",
  "Selena",
  "Kael",
  "Thalia",
  "Eirik",
  "Isolde",
  "Cassian",
  "Elarion",
  "Kiara",
  "Tavian",
  "Evelina",
  "Finnian",
  "Elara",
  "Thadric",
  "Mira",
  "Rylan",
  "Iliad",
  "Zara",
  "Theron",
  "Amalia",
  "Dorian",
  "Lenora",
  "Eamon",
  "Nia",
  "Aric",
  "Elaria",
  "Kaelith",
  "Selene",
  "Eirwyn",
  "Naida",
  "Thalassa",
  "Oberon",
  "Sylas",
  "Isolda",
  "Valeria",
  "Kaldor",
  "Rowan",
  "Elysande",
  "Cyric",
  "Nyssa",
  "Fiora",
  "Lorian",
  "Aelin",
  "Thora",
];

var humanAge = [
  "",
  "",
  "",
  "You are " +
    (Math.ceil(Math.random() * 5) +
      Math.ceil(Math.random() * 3) +
      Math.ceil(Math.random() * 2)) +
    " years old, a child.",
  "You are " +
    (11 + Math.ceil(Math.random() * 6)) +
    " years old, an adolescent.",
  "You are " +
    (11 + Math.ceil(Math.random() * 6)) +
    " years old, an adolescent.",
  "You are " +
    (11 + Math.ceil(Math.random() * 6)) +
    " years old, an adolescent.",
  "You are " +
    (11 + Math.ceil(Math.random() * 6)) +
    " years old, an adolescent.",

  "You are " +
    (17 + Math.ceil(Math.random() * 10)) +
    " years old, a young adult.",
  "You are " +
    (17 + Math.ceil(Math.random() * 10)) +
    " years old, a young adult.",
  "You are " +
    (17 + Math.ceil(Math.random() * 10)) +
    " years old, a young adult.",
  "You are " + (27 + Math.ceil(Math.random() * 8)) + " years old, an adult.",
  "You are " + (27 + Math.ceil(Math.random() * 8)) + " years old, an adult.",

  "You are " +
    (35 + Math.ceil(Math.random() * 20)) +
    " years old, a middle-aged adult.",
  "You are " +
    (35 + Math.ceil(Math.random() * 20)) +
    " years old, an  middle-aged adult.",
  "You are " +
    (35 + Math.ceil(Math.random() * 20)) +
    " years old, an  middle-aged adult.",

  "You are " +
    (55 + Math.ceil(Math.random() * 20)) +
    " years old, an older adult.",
  "You are " +
    (55 + Math.ceil(Math.random() * 20)) +
    " years old, an older adult.",

  "You are " +
    (75 + Math.ceil(Math.random() * 25)) +
    " years old, a venerable adult.",
];

var humanBuild = [
  "",
  "",
  "",
  "You are short and thin.",
  "You are short and heavy.",
  "You are short.",
  "You are short.",
  "You are slender.",
  "You are slender.",
  "You are of average build.",
  "You are of average build.",
  "You are of average build.",
  "You are of average build.",
  "You are thicc.",
  "You are thicc.",
  "You are tall.",
  "You are tall.",
  "You are tall and thin.",
  "You are very tall and heavy.",
];

var lovelyHumanThings = [
  "lovely eyes",
  "lucious lips",
  "a dynamite figure",
  "an ineffable presence",
  "a pretty face",
  "gorgeous hair",
];
var uglyHumanThings = [
  "a vicious scar",
  "your mismatched features",
  "a beetle brow",
  "your unpleasantboils",
  "a weeping eye",
  "a mismatched eye",
];

var humanAppearance = [
  "",
  "",
  "",
  "You are hideous. You look like a monster. Children cry when they encounter you, the weak of heart faint when they see you, and one person vomited after getting a good look at your face.",
  "You are ugly, and people find your visage unpleasant thanks to " +
    uglyHumanThings[Math.floor(Math.random() * uglyHumanThings.length)] +
    ".",
  "Most consider you homely: not quite ugly, but a bit worse than plain.",
  "Most consider you homely: not quite ugly, but a bit worse than plain.",

  "You are plain and uninteresting to look upon. People notice you, but your appearance fails to make an impression.",
  "You are plain and uninteresting to look upon. People notice you, but your appearance fails to make an impression.",
  "You are perfectly average in appearance. You look like everyone else.",
  "You are perfectly average in appearance. You look like everyone else.",
  "You are perfectly average in appearance. You look like everyone else.",
  "You are perfectly average in appearance. You look like everyone else.",

  "You have a physical quality that makes you attractive to others. You have +" +
    lovelyHumanThings[Math.floor(Math.random() * lovelyHumanThings.length)] +
    ". ",
  "You have a physical quality that makes you attractive to others. You have +" +
    lovelyHumanThings[Math.floor(Math.random() * lovelyHumanThings.length)] +
    ". ",
  "You have several attractive physical qualities that make you quite comely.",
  "You have several attractive physical qualities that make you quite comely.",

  "You are one of the great beauties in the land, an individual of almost unsurpassed form and appearance. People notice you. ",
  "You put beautiful people to shame. You are so striking, heads turn to follow you wherever you go. People become infatuated with you, stumbling over their words and feeling flustered when you show them attention. There's a fine line between love and hate. Should you spurn the attentions of people you enamor, their affection might sour to resentment and even hatred.",
];

var humanBackground = [
  "You died and returned to life. You start the game with 1d6 Insanity.",
  "You were briefly possessed by a demon. You start the game with 1 Corruption.",
  "You spent " + rollYears(6) + " as a prisoner in a dungeon.",
  "You murdered someone in cold blood. You start the game with 1 Corruption.",
  "You caught and recovered from a terrible disease.",
  "You belonged to a strange cult and saw many strange things. You start the game with 1 Insanity.",
  "The faerie held you prisoner for " + rollYears(20) + ".",
  "You lost a loved one and their loss haunts you still.",
  "You lost a finger, a few teeth, or an ear, or you gained a scar.",
  "You earned a living working in your profession.",
  "You fell in love and the relationship ended well or is ongoing.",
  "You have a spouse and " + Math.ceil(Math.random() * 4) + " children.",
  "You traveled extensively. You speak one additional language.",
  "You received an education. You know how to read the Common Tongue.",
  "You saved your town from terrible monsters.",
  "You foiled a plot to kill someone important or you brought a killer to justice.",
  "You performed a great deed and are a hero to the people in your hometown.",
  "You found an old treasure map.",
  "Someone important and powerful owes you a favor.",
  "You came into money and start the game with 2d6 ср.",
];

humanPersonality = [
  "",
  "",
  "",
  "You are cruel, wicked, and self-serving. You enjoy making others suffer.",
  "You are erratic and unpredictable. You have a hard time keeping your word and tend toward capricious behavior.",
  "Might makes right. Obedience to authority is the highest ideal.",
  "Might makes right. Obedience to authority is the highest ideal.",
  "You look after yourself first and foremost. You're not above double-crossing friends.",
  "You look after yourself first and foremost. You're not above double-crossing friends.",
  "You put your interests and those of your friends above all else.",
  "You put your interests and those of your friends above all else.",
  "You put your interests and those of your friends above all else.",
  "You put your interests and those of your friends above all else.",
  "You help others because it's the right thing to do.",
  "You help others because it's the right thing to do.",
  "You try to do what you think is right, even if it breaks laws and social conventions.",
  "You try to do what you think is right, even if it breaks laws and social conventions.",
  "Your honor and duty guide everything you do.",
  "You are committed to good and noble causes, and you never stray from your beliefs even if your insistence would cost you your life.",
];

var humanReligion = [
  "",
  "",
  "",
  "You belong to a cult dedicated to a dark power.",
  "You belong to a heretical sect.",
  "You were raised in the teachings of witchcraft.",
  "You were raised in the teachings of witchcraft.",
  "You follow the tenets of the Old Faith.",
  "You follow the tenets of the Old Faith.",
  "You follow the tenets of the Old Faith.",
  "You follow the tenets of the Old Faith.",
  "You belong to the Cult of the New God.",
  "You belong to the Cult of the New God.",
  "You belong to the Cult of the New God.",
  "You belong to the Cult of the New God.",
  "You belong to the Cult of the New God.",
  "You have no religion.",
  "You have no religion.",
  "You have no religion.",
];

function setHumanStats() {
  charStats = {
    ancestry: "Human",
    strength: 10,
    agility: 10,
    intellect: 10,
    will: 10,
    perbonus: 0,
    healthbonus: 0,
    defbonus: 0,
    speedbonus: 0,
    speed: 10,
    charsize: 1,
    corruption: 0,
    insanity: 0,
    cp: 0,
    ss: 0,
    gc: 0,
    bits: 0,
    professions: 3,
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

function getHumanName() {
  return humanNames[Math.floor(Math.random() * humanNames.length)];
}

function setHumanDetails() {
  var humanDetails = "<div>" + setHumanAge();
  +"</div>";
  humanDetails += "<div>" + setHumanBuild();
  +"</div>";
  humanDetails += "<div>" + setHumanAppearance();
  +"</div>";
  humanDetails += "<div>" + setHumanBackground();
  +"</div>";
  humanDetails += "<div>" + setHumanReligion();
  +"</div>";
  humanDetails += "<div>" + setHumanPersonality();
  +"</div>";

  return humanDetails;
}
function setHumanAge() {
  return humanAge[rollxdx(3, 6)];
}

function setHumanBuild() {
  var buildroll = rollxdx(3, 6);
  if (buildroll < 6) {
    charStats.charsize = "1/2";
  }

  return humanBuild[buildroll];
}
function setHumanAppearance() {
  return humanAppearance[rollxdx(3, 6)];
}
function setHumanBackground() {
  var backgroundValue =
    humanBackground[Math.floor(Math.random() * humanBackground.length)];
  if (backgroundValue.match("You start the game with 1 Insanity.")) {
    charStats.insanity += 1;
  } else if (backgroundValue.match("You start the game with 1 Corruption.")) {
    charStats.corruption += 1;
  } else if (backgroundValue.match("You start the game with 1d3 Corruption.")) {
    var corrVal = rollxdx(1, 3);
    charStats.corruption += corrVal;
    backgroundValue = "You start the game with " + corrVal + " Corruption.";
  } else if (
    backgroundValue == "You came into money and start the game with 2d6 ср."
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
  }

  return backgroundValue;
}
function setHumanPersonality() {
  return humanPersonality[rollxdx(3, 6)];
}
function setHumanReligion() {
  return humanReligion[rollxdx(3, 6)];
}
