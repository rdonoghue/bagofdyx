var orcAbilityString =
  "<b>Shadowsight:</b> You see in areas obscured by shadows as if those areas were lit.";
var orcLanguageStack = [
  "Common",
  "Dark Speech",
  "High Archaic",
  "Elvish",
  "Trollish",
];

var orcNames = [
  "Gromm",
  "Durgak",
  "Groth",
  "Thokk",
  "Urga",
  "Grulm",
  "Drak",
  "Snaga",
  "Grak",
  "Borg",
  "Krull",
  "Nazg",
  "Thruk",
  "Gruk",
  "Urok",
  "Kragg",
  "Thrag",
  "Grish",
  "Brurg",
  "Skarn",
  "Zog",
  "Rukar",
  "Vrak",
  "Throk",
  "Draz",
  "Grax",
  "Kruul",
  "Lugr",
  "Morok",
  "Blork",
  "Grog",
  "Thruk",
  "Uruk",
  "Narok",
  "Thrash",
  "Gnar",
  "Snarl",
  "Drub",
  "Gruum",
  "Druk",
  "Skar",
  "Zarn",
  "Snik",
  "Ruk",
  "Grelk",
  "Grizz",
  "Drokk",
  "Zug",
  "Thrak",
  "Gruk",
  "Durn",
  "Brak",
  "Thulg",
  "Muzg",
  "Druug",
  "Grok",
  "Skulk",
  "Trak",
  "Grunt",
  "Mok",
  "Zorg",
  "Hruk",
  "Narg",
  "Brug",
  "Trulk",
  "Krug",
  "Thruk",
  "Vorg",
  "Snag",
  "Gruk",
  "Urg",
  "Kraz",
  "Drog",
  "Thrum",
  "Snor",
  "Ugrak",
  "Grim",
  "Grug",
  "Krul",
  "Brunk",
  "Vruk",
  "Gorn",
  "Zrok",
  "Rulk",
  "Snork",
  "Grak",
  "Drukk",
  "Krag",
  "Thruk",
  "Nurg",
  "Grox",
  "Gruk",
  "Skrug",
  "Uruk",
  "Brak",
  "Zruk",
  "Dork",
  "Korg",
  "Gnash",
  "Ragnor",
  "Ethel",
];

var orcAge = [
  "",
  "",
  "",
  "You are " +
    (Math.ceil(Math.random() * 4) +
      Math.ceil(Math.random() * 2) +
      Math.ceil(Math.random() * 2)) +
    " years old, a child.",
  "You are " +
    (7 + Math.ceil(Math.random() * 5)) +
    " years old, an adolescent.",
  "You are " +
    (7 + Math.ceil(Math.random() * 5)) +
    " years old, an adolescent.",
  "You are " +
    (7 + Math.ceil(Math.random() * 5)) +
    " years old, an adolescent.",
  "You are " +
    (7 + Math.ceil(Math.random() * 5)) +
    " years old, an adolescent.",

  "You are " +
    (12 + Math.ceil(Math.random() * 6)) +
    " years old, a young adult.",
  "You are " +
    "You are " +
    (12 + Math.ceil(Math.random() * 6)) +
    " years old, a young adult.",
  "You are " +
    (12 + Math.ceil(Math.random() * 6)) +
    " years old, a young adult.",
  "You are " +
    (12 + Math.ceil(Math.random() * 6)) +
    " years old, a young adult.",
  "You are " +
    (12 + Math.ceil(Math.random() * 6)) +
    " years old, a young adult.",
  "You are " + (18 + Math.ceil(Math.random() * 7)) + " years old, an adult.",
  "You are " + (18 + Math.ceil(Math.random() * 7)) + " years old, an adult.",
  "You are " + (18 + Math.ceil(Math.random() * 7)) + " years old, an adult.",

  "You are " +
    (26 + Math.ceil(Math.random() * 6)) +
    " years old, an older adult.",
  "You are " +
    (26 + Math.ceil(Math.random() * 6)) +
    " years old, an older adult.",

  "You are " +
    (33 + Math.ceil(Math.random() * 10)) +
    " years old, a venerable adult.",
];

var orcBuild = [
  "",
  "",
  "",
  "You are short and wiry.",
  "You are short and muscular.",
  "You are short.",
  "You are short.",
  "You are thin.",
  "You are thin.",
  "You are of average build.",
  "You are of average build.",
  "You are of average build.",
  "You are of average build.",
  "You are corpulent.",
  "You are corpulent.",
  "You are tall.",
  "You are tall.",
  "You are tall and gaunt.",
  "You are a giant among orcs.",
];

var lovelyOrcThings = [
  "lovely eyes",
  "lucious lips",
  "a dynamite figure",
  "an ineffable presence",
  "a pretty face",
  "gorgeous hair",
];
var uglyOrcThings = [
  "oddly colored skin.",
  "extra fur",
  "thick features",
  "long fangs",
  "more spines than one might expect",
];

var orcAppearance = [
  "",
  "",
  "",

  "You are grotesque. Your face is a mass of scar tissue. Thick scars crisscross your body, held together with crude, leather stitching. Swaths of open sores weep streams of pus, and you reek of excrement, blood, and rot.",
  "You are grotesque. Your face is a mass of scar tissue. Thick scars crisscross your body, held together with crude, leather stitching. Swaths of open sores weep streams of pus, and you reek of excrement, blood, and rot.",
  "You are grotesque. Your face is a mass of scar tissue. Thick scars crisscross your body, held together with crude, leather stitching. Swaths of open sores weep streams of pus, and you reek of excrement, blood, and rot.",
  "You are monstrous, with thick, brutish features, weird growths sprouting from your skin, and nasty scars that cut jagged lines across your thick hide.",
  "You are monstrous, with thick, brutish features, weird growths sprouting from your skin, and nasty scars that cut jagged lines across your thick hide.",
  "You are monstrous, with thick, brutish features, weird growths sprouting from your skin, and nasty scars that cut jagged lines across your thick hide.",
  "You are ugly. You have thick tusks jutting from your broad jaw, a sloping forehead, and tiny eyes set deep in your skull.",
  "You are ugly. You have thick tusks jutting from your broad jaw, a sloping forehead, and tiny eyes set deep in your skull.",
  "You are ugly. You have thick tusks jutting from your broad jaw, a sloping forehead, and tiny eyes set deep in your skull.",
  "You are ugly. You have thick tusks jutting from your broad jaw, a sloping forehead, and tiny eyes set deep in your skull.",
  "You are an orc of typical appearance, dirty and unkempt.",
  "You are an orc of typical appearance, dirty and unkempt.",
  "You are an orc of typical appearance, dirty and unkempt.",
  "Your features are somewhat less brutish, though you have " +
    uglyOrcThings[Math.floor(Math.random() * uglyOrcThings.length)] +
    ".",
  "Your features are somewhat less brutish, though you have " +
    uglyOrcThings[Math.floor(Math.random() * uglyOrcThings.length)] +
    ".",

  "You stand out from other orcs. Your body is remarkably free from the scars and injuries that maim your fellows, and you are in pretty good health.",
];

var orcChildren = rollxdx(3, 6);

var orcBackground = [
  "You butchered helpless people. Gain 2 Corruption.",
  "You were briefly possessed by a demon. Gain 1 Corruption.",
  "You spent " +
    rollYears(6) +
    " in the fighting pit, testing your skills against other orcs for the amusement of the crowds.",
  "You stayed loyal to the Empire and fought against other orcs. You were branded as a traitor and cast out.",
  "You caught the rot and lost your nose and ears.",
  "You were chained to the oars in a slave ship for " + rollYears(6) + " .",
  "You were made a eunuch and stood guard over the emperor's concubines.",
  "You have scar tissue over half your body from when you were caught in the blast of a spell.",
  "You escaped your slavery and have lived in the wilderness ever since.",
  "You earned a living working in your profession.",
  "You fell in love with a human and were spurned for your affections.",
  "You sired or gave birth to " +
    orcChildren +
    " children. " +
    Math.ceil(Math.random() * orcChildren - 3) +
    " are still alive.",
  "You traveled extensively. You speak one additional language.",
  "You received an education. You know how to read and write the Common Tongue.",
  "You fought bravely for the Emperor and were awarded a medal for your courage.",
  "You saved an important noble from an assassination attempt.",
  "A human broke your chains and freed you to find your fortunes in the world.",
  "You took a sword from the corpse of a warrior you killed.",
  "The Gods of Blood and Iron visit you in your dreams. You start the game with 1 Insanity.",
  "You came into money and start the game with 2d6 cp.",
];

orcPersonality = [
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

var orcReligion = [
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

function setOrcStats() {
  charStats = {
    ancestry: "Orc",
    strength: 11,
    agility: 10,
    intellect: 9,
    will: 9,
    perbonus: 1,
    healthbonus: 0,
    defbonus: 0,
    speedbonus: 0,
    speed: 12,
    charsize: 1,
    corruption: 1,
    insanity: 0,
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
    speak: 2,
    read: 0,
  };
  languageList = orcLanguageStack;
  detailString += setOrcDetails();
  nameString = getOrcName();
  abilityString = orcAbilityString;

  bumpStats();
  getSecondaryStats();
}

function getOrcName() {
  return orcNames[Math.floor(Math.random() * orcNames.length)];
}

function setOrcDetails() {
  var orcDetails = "<div>" + setOrcAge();
  +"</div>";
  orcDetails += "<div>" + setOrcBuild();
  +"</div>";
  orcDetails += "<div>" + setOrcAppearance();
  +"</div>";
  orcDetails += "<div>" + setOrcBackground();
  +"</div>";
  // orcDetails += "<div>" + setOrcReligion();
  // +"</div>";
  // orcDetails += "<div>" + setOrcPersonality();
  // +"</div>";

  return orcDetails;
}
function setOrcAge() {
  return orcAge[rollxdx(3, 6)];
}

function setOrcBuild() {
  var buildroll = rollxdx(3, 6);

  return orcBuild[buildroll];
}
function setOrcAppearance() {
  return orcAppearance[rollxdx(3, 6)];
}
function setOrcBackground() {
  var backgroundValue =
    orcBackground[Math.floor(Math.random() * orcBackground.length)];
  if (backgroundValue.match("You start the game with 1 Insanity.")) {
    charStats.insanity += 1;
  } else if (backgroundValue.match("You start the game with 1 Corruption.")) {
    charStats.corruption += 1;
  } else if (backgroundValue.match("Gain 1 Corruption.")) {
    charStats.corruption += 1;
  } else if (backgroundValue.match("Gain 2 Corruption.")) {
    charStats.corruption += 2;
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
  } else if (
    backgroundValue ==
    "You fought bravely for the Emperor and were awarded a medal for your courage."
  ) {
    specialGear += "A medal for your courage.<br>";
  } else if (
    backgroundValue ==
    "You took a sword from the corpse of a warrior you killed."
  ) {
    specialGear += "A dead warrior's sword.<br>";
  }

  return backgroundValue;
}
function setOrcPersonality() {
  return orcPersonality[rollxdx(3, 6)];
}
function setOrcReligion() {
  return orcReligion[rollxdx(3, 6)];
}
