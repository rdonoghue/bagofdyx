var changelingGenderLock = "";
var changelingAbilityString =
  "<b>Immune:</b> damage from disease; charmed, diseased<br><b>Iron Vulnerability:</b> You are impaired while in contact with iron.<br><b>Shadowsight</b> You see into areas obscured by shadows as if those areas were lit.<br><b>Steal Identity:</b> You can use an action to alter your appearance to match that of a target living creature you can see within short range. The target must be Size 1 or 1/2 and have a humanoid shape of flesh and blood. Your body changes so you look like the target, though your clothing and possessions remain unchanged. The effect lasts until you use this talent again. If you become incapacitated or touch an object made from iron, you immediately revert to your normal appearance.";

var changelingLanguageStack = [
  "Common",
  "Elvish",
  "High Archaic",
  "Trollish",
  "Dark Speech",
];

var changelingNames = [
  "Masque",
  "Blaize",
  "Rune",
  "Zorn",
  "Nix",
  "Thorne",
  "Skye",
  "Flint",
  "Vale",
  "Lark",
  "Glyn",
  "Quinn",
  "Bane",
  "Shade",
  "Jove",
  "Dirk",
  "Faye",
  "Wren",
  "Reeve",
  "Zane",
  "Mace",
  "Sloane",
  "Brock",
  "Kade",
  "Blithe",
  "Joss",
  "Fane",
  "Gage",
  "Blight",
  "Ash",
  "Stryke",
  "Blaise",
  "Kyte",
  "Lorne",
  "Shale",
  "Nell",
  "Haze",
  "Voss",
  "Ryke",
  "Zeth",
  "Drake",
  "Nelle",
  "Glynne",
  "Nairn",
  "Nyx",
  "Reece",
  "Jex",
  "Sloth",
  "Fjord",
  "Cade",
  "Jett",
  "Kite",
  "Rae",
  "Vale",
  "Glint",
  "Blain",
  "Thorn",
  "Rain",
  "Plume",
  "Jinx",
  "Pike",
  "Morn",
  "Broc",
  "Tryst",
  "Jade",
  "Gwenn",
  "Greysk",
  "Quinn",
  "Wraith",
  "Luxe",
  "Hex",
  "Frost",
  "Fawn",
  "Jape",
  "Locke",
  "Sage",
  "Nance",
  "Lyre",
  "Jayde",
  "Thrall",
  "Sable",
  "Blanche",
  "Shade",
  "Quill",
  "Loom",
  "Wyrm",
  "Tryste",
  "Nell",
  "Spark",
  "Sway",
  "Glade",
  "Spire",
  "Stane",
  "Glyde",
  "Wolf",
  "Jade",
  "Pryde",
  "Blaze",
  "Zane",
  "Rive",
  "Kline",
];

var changelingAge = [
  "",
  "",
  "",
  "You are a child, " +
    (Math.ceil(Math.random() * 4) + Math.ceil(Math.random() * 4)) +
    " years old or younger.",
  "You are an adolescent, " +
    (8 + Math.ceil(Math.random() * 6)) +
    " years old.",
  "You are an adolescent, " +
    (8 + Math.ceil(Math.random() * 6)) +
    " years old.",
  "You are an adolescent, " +
    (8 + Math.ceil(Math.random() * 6)) +
    " years old.",
  "You are an adolescent, " +
    (8 + Math.ceil(Math.random() * 6)) +
    " years old.",
  "You are a young adult, " +
    (14 + Math.ceil(Math.random() * 11)) +
    " years old.",
  "You are a young adult, " +
    (14 + Math.ceil(Math.random() * 11)) +
    " years old.",
  "You are a young adult, " +
    (14 + Math.ceil(Math.random() * 11)) +
    " years old.",
  "You are a young adult, " +
    (14 + Math.ceil(Math.random() * 11)) +
    " years old.",
  "You are a young adult, " +
    (14 + Math.ceil(Math.random() * 11)) +
    " years old.",
  "You are a middle-aged adult, " +
    (25 + Math.ceil(Math.random() * 15)) +
    " years old.",
  "You are a middle-aged adult, " +
    (25 + Math.ceil(Math.random() * 15)) +
    " years old.",
  "You are a middle-aged adult, " +
    (25 + Math.ceil(Math.random() * 15)) +
    " years old.",
  "You are an older adult, " +
    (40 + Math.ceil(Math.random() * 20)) +
    " years old.",
  "You are an older adult, " +
    (40 + Math.ceil(Math.random() * 20)) +
    " years old.",
  "You are an older adult, " +
    (40 + Math.ceil(Math.random() * 20)) +
    " years old.",
  "You are a venerable adult, " +
    (60 + Math.ceil(Math.random() * 40)) +
    " years old.",
];

var changelingAppAge = ["Normal"];
var changelingAppGender = ["Male", "Female"];
var changelingAppAncestry = ["Goblin", "Human", "Dwarf", "Orc"];

var changelingBackground = [
  "You only recently discovered your true nature, and you are having a difficult time adjusting to your new reality. You start the game with 1 Insanity.",
  "You have no idea that you're a changeling. You think you are a member of the ancestry whose form you adopted. Add an extra random profession. Until you become incapacitated or touch iron for the first time, you cannot use Steal Identity.",
  "You were enslaved by a hag and forced to perform unspeakable acts as she commanded you. You start the game with 1 Corruption.",
  "You murdered the person whose identity you stole so you could take over that person's life. You start the game with 1 Corruption.",
  "When your 'parents' learned what you were, they cast you out from vour home and vou were forced to make your own way in the world.",
  "You ran away from home when you learned what you were and lived among the faeries for many years.",
  "You have earned the enmity of a witch hunter. This foe hunts you and will try to kill you if your paths ever cross.",
  "Fearful townsfolk drove you out of your hometown. You have grown to hate them and plot revenge.",
  "The first time you stole someone's identity, you also stole a few of that person's memories.",
  "You earned a living working in your profession.",
  "You fell in love, and your lover is not aware of your true identity. ",
  "After you were exiled from your hometown, a " +
    ["druid", "witch"][Math.floor(Math.random() * 2)] +
    "took you in and cared for you. You always have a home with this character.",
  "You worked as an informant for the Inquisition.",
  "You received an education. You know how to read and write the Common Tongue.",
  "You learned a terrible secret while masquerading as someone else. Work out the nature of that secret with your Game Master.",
  "Your parents raised you even though they knew what you were. Their love and encouragement gave you the stability you needed to grow into a mature personality.",
  "The elf who made you recently found you and befriended you. You can call in one favor from that elf by speaking into a shell they gave you. The extent of the favor's power is subject to the GM's discretion.",
  "You adopted the form of someone famous, powerful, and important.",
  "You have ties to a criminal organization after being recruited into it for your magical gifts.",
  "You came into a quantity of money and start the game with 2d6 cp.",
];

var changelingQuirk = [
  "You always speak in the third person.",
  "Your eyes glow green in the dark.",
  "Animals become nervous around you.",
  "You can adopt only male forms or only female forms.",
  "You are wild and impulsive.",
  "You always revert to the first form you adopted.",
  "The scent of iron sickens you.",
  "You have terrible nightmares.",
  "You sometimes hear voices.",
  "You tend to lose small, inconsequential things.",
  "One night each year, you lose your Steal Identity talent.",
  "You can only assume the appearance of dead people.",
  "You speak in whispers.",
  "You give off an odd, earthy smell.",
  "You can never keep your clothes clean.",
  "You cannot get drunk.",
  "You must always speak the truth as you know it.",
  "You find meat repulsive.",
  "You laugh at inappropriate times.",
  "Forms you adopt have no hair or fingernails.",
];

changelingPersonality = [
  "",
  "",
  "",
  "You steal the forms of others so you can do what you want without facing repercussions. You don't care about how this affects other people.",
  "You enjoy taking on forms that let you work mischief.",
  "You enjoy taking on forms that let you work mischief.",
  "You adopt forms that give you power over others. Power ensures your safety.",
  "You take on other forms for profit, usually to gain access to places normally forbidden to you.",
  "You take on other forms for profit, usually to gain access to places normally forbidden to you.",
  "You take on other forms for profit, usually to gain access to places normally forbidden to you.",
  "You take on other forms for profit, usually to gain access to places normally forbidden to you.",
  "You take on other forms for profit, usually to gain access to places normally forbidden to you.",
  "You are careful about the forms you take. You try to stay out of trouble and keep your secrets safe.",
  "You are careful about the forms you take. You try to stay out of trouble and keep your secrets safe.",
  "You are careful about the forms you take. You try to stay out of trouble and keep your secrets safe.",
  "You strive to do the right thing and use your disguises to help other people, as well as to protect yourself from your enemies.",
  "Your nature is a gift, and you use it to do what you think is right, even if it means upsetting others along",
  "Your nature is a gift, and you use it to do what you think is right, even if it means upsetting others along the way.",
  "You tend to stick to one form as long as possible; you crave stability and would do anything to be 'normal'.",
  "You use your talents to help others, to make the world a better place, and to right wrongs.",
];

function setChangelingStats() {
  charStats = {
    ancestry: "Changeling",
    strength: 9,
    agility: 10,
    intellect: 10,
    will: 10,
    perbonus: 1,
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

function getChangelingName() {
  return changelingNames[Math.floor(Math.random() * changelingNames.length)];
}

function setChangelingDetails() {
  var changelingDetails = "<div>" + setChangelingAge();
  +"</div>";
  changelingDetails += "<div>" + setChangelingQuirk();
  +"</div>";
  changelingDetails += "<div>" + setChangelingBackground();
  +"</div>";
  changelingDetails += "<div>" + setChangelingPersonality();
  +"</div>";
  changelingDetails += "<div><b>Your False Face</b></div>";

  changelingDetails += "<div>" + setFalseFace();
  +"</div>";

  return changelingDetails;
}
function setChangelingAge() {
  return changelingAge[rollxdx(3, 6)];
}

function setChangelingBackground() {
  var backgroundValue =
    changelingBackground[
      Math.floor(Math.random() * changelingBackground.length)
    ];
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
  } else if (backgroundValue.match("Add an extra random profession")) {
    charStats.professions += 1;
  }

  return backgroundValue;
}
function setChangelingPersonality() {
  return changelingPersonality[rollxdx(3, 6)];
}

function setChangelingQuirk() {
  let quirk =
    changelingQuirk[Math.floor(Math.random() * changelingQuirk.length)];
  if (quirk == "You can adopt only male forms or only female forms.") {
    changelingGenderLock = ["male", "female"][Math.floor(Math.random() * 2)];
    quirk = "You can adopt only " + changelingGenderLock + " forms.";
  }

  return quirk;
}
function setFalseFace() {
  let gender = "";
  let ancestry = "";
  let age = "";
  let ageRoll = rollxdx(1, 4);
  let buildArray = [];
  let ancRoll = rollxdx(1, 5);
  // Slight human bias

  if (changelingGenderLock == "male") {
    gender = "man";
  } else if (changelingGenderLock == "female") {
    gender = "woman";
  } else {
    gender = ["man", "woman"][Math.floor(Math.random() * 2)];
    myLog(gender, "changeling", 3);
  }
  //  build +  age + gender + ancestry + gender.

  buildArray = [
    "a short, heavyset, ",
    "a short, lean, ",
    "a short, ",
    "a short, ",
    "a heavyset, ",
    "a tall",
    "a tall",
    "a tall, lean, ",
    "a tall, heavyset",
    "a rugged",
    "a refined",
    "an attractive",
    "a plain-looking",
    "a shifty looking",
    "an average",
    "a world-weary",
  ];

  let build = buildArray[Math.floor(Math.random() * buildArray.length)];

  if (ageRoll == 3) {
    let age = "young, ";
  } else if (ageRoll == 4) {
    let age = "older, ";
  } else {
    let age = "adult, ";
  }

  if (ancRoll == 1) {
    ancestry = " goblin ";
  } else if (ancRoll == 2) {
    ancestry = " dwarf ";
  } else if (ancRoll == 3) {
    ancestry = " orc ";
  } else {
    ancestry = " human ";
  }

  return (
    "You have taken the appearance of " + build + age + ancestry + gender + "."
  );
}
