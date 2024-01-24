var dwarfAbilityString = "";

var dwarfLanguageStack = [
  "Dwarf",
  "Common",
  "Trollish",
  "Dark Speech",
  "High Archaic",
  "Elvish",
];

var dwarfNames = [
  "Grumli",
  "Baldrun",
  "Durnak",
  "Thrainor",
  "Kyrin",
  "Faldor",
  "Duroc",
  "Norgrim",
  "Orgrim",
  "Brolin",
  "Bovar",
  "Bomli",
  "Grizzlebeard",
  "Orik",
  "Durnar",
  "Throk",
  "Thrainin",
  "Durgrim",
  "Gormak",
  "Kurgan",
  "Hildegar",
  "Mordan",
  "Einrik",
  "Brokkar",
  "Skaldur",
  "Eirik",
  "Hrokkar",
  "Rurik",
  "Angnar",
  "Thrainin",
  "Hilda",
  "Hulda",
  "Brunvor",
  "Asgrim",
  "Thrainar",
  "Frigg",
  "Eilifur",
  "Einar",
  "Erling",
  "Oddrek",
  "Vili",
  "Vithar",
  "Hreidarr",
  "Hafnar",
  "Gylfi",
  "Thrainar",
  "Valdis",
  "Ragnarr",
  "Gunharr",
  "Olvor",
  "Eilif",
  "Hrolf",
  "Ulfar",
  "Thrandar",
  "Ulfgar",
  "Vitharr",
  "Hreidarr",
  "Rurik",
  "Geirvor",
  "Hognar",
  "Hrafnar",
  "Sigvor",
  "Hvalar",
  "Haraldur",
  "Hjortar",
  "Thorgrim",
  "Kjartur",
  "Leiknir",
  "Magnus",
  "Njall",
  "Orvar",
  "Rurik",
  "Snorri",
  "Steinar",
  "Thrainar",
  "Vali",
  "Vidar",
  "Yngvar",
  "Gormar",
  "Vorin",
  "Keldan",
  "Brogur",
  "Fandral",
  "Thrainar",
  "Arin",
  "Dalvor",
  "Drogar",
  "Gragnar",
  "Valthar",
  "Thrainar",
  "Arin",
  "Durnak",
  "Gromar",
  "Hargrim",
  "Kargan",
  "Modar",
  "Rogan",
  "Thrainar",
  "Urgar",
  "Zorak",
];

var dwarfAge = [
  "",
  "",
  "",
  "You are " + (6 + Math.ceil(Math.random() * 14)) + " years old, a child.",
  "You are " +
    (20 + Math.ceil(Math.random() * 10)) +
    " years old, an adolescent.",
  "You are " +
    (20 + Math.ceil(Math.random() * 10)) +
    " years old, an adolescent.",
  "You are " +
    (20 + Math.ceil(Math.random() * 10)) +
    " years old, an adolescent.",
  "You are " +
    (20 + Math.ceil(Math.random() * 10)) +
    " years old, an adolescent.",

  "You are " +
    (30 + Math.ceil(Math.random() * 20)) +
    " years old, a young adult.",
  "You are " +
    (30 + Math.ceil(Math.random() * 20)) +
    " years old, a young adult.",
  "You are " +
    (30 + Math.ceil(Math.random() * 20)) +
    " years old, a young adult.",
  "You are " +
    (30 + Math.ceil(Math.random() * 20)) +
    " years old, a young adult.",
  "You are " +
    (30 + Math.ceil(Math.random() * 20)) +
    " years old, a young adult.",

  "You are " + (50 + Math.ceil(Math.random() * 50)) + " years old, an adult.",
  "You are " + (50 + Math.ceil(Math.random() * 50)) + " years old, an adult.",
  "You are " + (50 + Math.ceil(Math.random() * 50)) + " years old, an adult.",

  "You are " +
    (100 + Math.ceil(Math.random() * 50)) +
    " years old, an older adult.",
  "You are " +
    (100 + Math.ceil(Math.random() * 50)) +
    " years old, an older adult.",

  "You are " +
    (150 + Math.ceil(Math.random() * 50)) +
    " years old, a venerable adult.",
];

var dwarfBuild = [
  "",
  "",
  "",
  "You are short and scrawny.",
  "You are short and stout.",
  "You are short and stout.",
  "You are short and stout.",
  "You are a bit shorter than other dwaves.",
  "You are a bit shorter than other dwaves.",
  "You are of average build, for a dwarf.",
  "You are of average build, for a dwarf.",
  "You are of average build, for a dwarf.",
  "You are of average build, for a dwarf.",
  "You have a magnificent belly.",
  "You have a magnificent belly.",
  "You are surprisingly tall.",
  "You are surprisingly tall.",
  "You are surprisingly tall and heavy.",
];
var dwarfHabit = [
  "You pound nails into your skull.",
  "You grease your body with troll fat.",
  "You collect the ears of the fallen.",
  "You will master axe-swallowing someday",
  "When particularly excited for battle, you light your beard on fire.",
];

var dwarfAppearance = [
  "",
  "",
  "",
  "You have a monstrous appearance, likely due to hard living and several near misses. Your face is a mass of scar tissue, probably missing an ear, an eye, or your nose. " +
    dwarfHabit[Math.floor(Math.random() * dwarfHabit.length)],
  "You have a monstrous appearance, likely due to hard living and several near misses. Your face is a mass of scar tissue, probably missing an ear, an eye, or your nose. " +
    dwarfHabit[Math.floor(Math.random() * dwarfHabit.length)],
  "You have several interesting features that work together to make you one ugly brute. Filth from digging in the dirt, mites infesting your hair, skin lashed with healing scars, and a rich aroma of vomit-all these contribute to your distinctive style.",
  "You have several interesting features that work together to make you one ugly brute. Filth from digging in the dirt, mites infesting your hair, skin lashed with healing scars, and a rich aroma of vomit-all these contribute to your distinctive style.",
  "You are hairy, portly, and grubby.",
  "You are hairy, portly, and grubby.",
  "You are a typical dwarf, hairy and portly, but well groomed.",
  "You are a typical dwarf, hairy and portly, but well groomed.",
  "You are a typical dwarf, hairy and portly, but well groomed.",
  "You take pride in your appearance. You stay clean, oil your facial hair, and perhaps braid it or tie it with metal rings.",
  "You take pride in your appearance. You stay clean, oil your facial hair, and perhaps braid it or tie it with metal rings.",
  "You take pride in your appearance. You stay clean, oil your facial hair, and perhaps braid it or tie it with metal rings.",
  "You take pride in your appearance. You stay clean, oil your facial hair, and perhaps braid it or tie it with metal rings.",
  "You are quite fetching for a dwarf. You have regal features, good bearing, and a deep voice. You take pride in your appearance.",
  "You are quite fetching for a dwarf. You have regal features, good bearing, and a deep voice. You take pride in your appearance.",
  "You are quite fetching for a dwarf. You have regal features, good bearing, and a deep voice. You take pride in your appearance.",
];

var dwarfBackground = [
  "You sold your soul to a devil to gain wealth. The devil betrayed you and left you penniless. You start the game with 1 Corruption.",
  "Your ancestors appeared to you in a vision and sent you to recover a fabled relic.",
  "You accidentally killed someone close to you. ",
  "You stole gold from a rival clan and the theft shames you.",
  "You fought against the creatures you hate and lost.",
  "You brought shame to yourself and your clan. You live as an exile, searching for redemption, even if that redemption comes with a glorious death.",
  "You were taken prisoner by the creatures you hate. You lived as a slave for " +
    (Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6)) +
    " years.",
  "The creatures you hate overran your home and wiped out your clan.",
  "You survived a cave-in and get a bit nervous when underground.",
  "You earned a living working in your profession.",
  "You are a sworn servant of the Dwarf King.",
  "You are a gifted artisan.",
  "You traveled extensively. You speak one additional language.",
  "You inherited a battleaxe or a warhammer from an ancestor.",
  "You discovered a vein of gold under your mountain home.",
  "You hunted down and helped kill a creature you hate.",
  "You performed a great deed, and you are a hero to your clan.",
  "You have a key to an ancient treasure vault lost to the dwarfs long ago.",
  "You are the rightful heir to a stronghold overrun by the enemies of your people.",
  "You came into money and start the game with 2d6 cp.",
];

var dwarfHatred = [
  "ogres",
  "troglodytes",
  "beastmen",
  "orcs",
  "goblins",
  "elves",
  "trolls",
  "giants",
  "dragons",
  "demons",
];

var dwarfPersonality = [
  "",
  "",
  "",
  "Your hatred is a living thing. It drives you, gives you strength, and helps you triumph over your enemies.",
  "You seek a glorious death killing your enemies.",
  "You love gold more than anything. You love the way it feels, the sound it makes, and the taste of it.",
  "You love gold more than anything. You love the way it feels, the sound it makes, and the taste of it.",
  "You believe other people covet your wealth. It is your duty to protect what is yours-at any cost.",
  "You believe other people covet your wealth. It is your duty to protect what is yours-at any cost.",
  "Your honor is your life. You would never do anything to bring shame to your people.",
  "Your honor is your life. You would never do anything to bring shame to your people.",
  "Your honor is your life. You would never do anything to bring shame to your people.",
  "Your honor is your life. You would never do anything to bring shame to your people.",
  "You surrender to the will of your ancestors, the customs of your people, and the good of all.",
  "You surrender to the will of your ancestors, the customs of your people, and the good of all.",
  "You believe your people must rise above their greed and suspicion. In these dark times, you must band together to overcome the doom that awaits you all.",
  "You believe your people must rise above their greed and suspicion. In these dark times, you must band together to overcome the doom that awaits you all.",
  "You don't trust or like non-dwarfs, but they have their uses.",
  "You have little use for the customs of your people. It's time to move past the dusty caves and seek out fortunes elsewhere.",
];

function setDwarfStats() {
  charStats = {
    ancestry: "Dwarf",
    strength: 10,
    agility: 9,
    intellect: 10,
    will: 10,
    perbonus: 1,
    healthbonus: 4,
    defbonus: 0,
    speedbonus: 0,
    speed: 8,
    charsize: "1/2",
    corruption: 0,
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
    read: 1,
  };
  languageList = dwarfLanguageStack;
  detailString += setDwarfDetails();
  nameString = getDwarfName();
  abilityString = dwarfAbilityString;

  bumpStats();
  getSecondaryStats();
}

function getDwarfName() {
  return dwarfNames[Math.floor(Math.random() * dwarfNames.length)];
}

function setDwarfDetails() {
  var dwarfDetails = "<div>" + setDwarfAge();
  +"</div>";
  dwarfDetails += "<div>" + setDwarfBuild();
  +"</div>";
  dwarfDetails += "<div>" + setDwarfAppearance();
  +"</div>";
  dwarfDetails += "<div>" + setDwarfBackground();
  +"</div>";
  dwarfDetails += "<div>" + setDwarfHatred() + "</div>";

  dwarfDetails += "<div>" + setDwarfPersonality();
  +"</div>";

  return dwarfDetails;
}
function setDwarfAge() {
  return dwarfAge[rollxdx(3, 6)];
}

function setDwarfBuild() {
  var buildroll = rollxdx(3, 6);
  if (buildroll < 6) {
    charStats.charsize = "1/2";
  }

  return dwarfBuild[buildroll];
}
function setDwarfAppearance() {
  return dwarfAppearance[rollxdx(3, 6)];
}
function setDwarfBackground() {
  var backgroundValue =
    dwarfBackground[Math.floor(Math.random() * dwarfBackground.length)];
  if (backgroundValue.match("You start the game with 1 Insanity.")) {
    charStats.insanity += 1;
  } else if (backgroundValue.match("You start the game with 1 Corruption.")) {
    charStats.corruption += 1;
  } else if (backgroundValue.match("You start the game with 1d3 Corruption.")) {
    var corrVal = rollxdx(1, 3);
    charStats.corruption += corrVal;
    backgroundValue = "You start the game with " + corrVal + " Corruption.";
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
  } else if (backgroundValue.match("You are a gifted artisan")) {
    charStats.prco += 1;
  } else if (
    backgroundValue ==
    "You have a key to an ancient treasure vault lost to the dwarfs long ago."
  ) {
    specialGear +=
      "A key to an ancient treasure vault lost to the dwarfs long ago.<br>";
  } else if (
    backgroundValue ==
    "You inherited a battleaxe or a warhammer from an ancestor."
  ) {
    let myRoll = rollxdx(1, 2);
    if (myRoll == 1) {
      backgroundValue = "You inherited a battleaxe from an ancestor.";
      specialGear += "An inherited battleaxe.<br>";
    } else {
      backgroundValue = "You inherited a warhammer from an ancestor.";
      specialGear += "An inherited warhammer.<br>";
    }
  }

  return backgroundValue;
}
function setDwarfPersonality() {
  return dwarfPersonality[rollxdx(3, 6)];
}
function setDwarfReligion() {
  return dwarfReligion[rollxdx(3, 6)];
}

function setDwarfHatred() {
  let hatedFolk = dwarfHatred[Math.floor(Math.random() * dwarfHatred.length)];
  dwarfAbilityString =
    "<b>Darksight:</b> You can see in areas obscured by shadows or darkness within medium range as if those areas were lit. Beyond this distance, you treat darkness as shadows and shadows as lit.<br><b>Hated Creature:</b> Your hatred of " +
    hatedFolk +
    " grants 1 boon on attack rolls made against them.<br><b>Robust Constitution:</b> You take half damage from poison. You make challenge rolls with 1 boon to avoid or remove the poisoned affliction.";
  return "You profoundly hate " + hatedFolk + ".";
}
