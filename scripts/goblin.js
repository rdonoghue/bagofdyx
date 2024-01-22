var goblinLanguageStack = [
  "Common",
  "Elvish",
  "Trollish",
  "Dark Speech",
  "High Archaic",
];

var goblinAbilityString =
  "<b>Immune:</b> Diseased, Charm, Disease<br><b>Iron Vulnerability:</b> You are Impaired by contact with Iron.<br><b>Shadowsight:</b> You can see into areas obscured by shadow as if those areas are lit.<br><b>Sneaky:</b> Roll to hide or move silently with a boon.";

var goblinAge = [
  "",
  "",
  "You are " + Math.ceil(Math.random() * 5) + " years old, a child.",
  "You are " +
    (6 + Math.ceil(Math.random() * 4)) +
    " years old, an adolescent.",
  "You are " +
    (6 + Math.ceil(Math.random() * 4)) +
    " years old, an adolescent.",
  "You are " +
    (6 + Math.ceil(Math.random() * 4)) +
    " years old, an adolescent.",
  "You are " +
    (6 + Math.ceil(Math.random() * 4)) +
    " years old, an adolescent.",
  "You are " +
    (10 + Math.ceil(Math.random() * 15)) +
    " years old, a young adult.",
  "You are " +
    (10 + Math.ceil(Math.random() * 15)) +
    " years old, a young adult.",
  "You are " +
    (10 + Math.ceil(Math.random() * 15)) +
    " years old, a young adult.",
  "You are " +
    (10 + Math.ceil(Math.random() * 15)) +
    " years old, a young adult.",
  "You are " +
    (10 + Math.ceil(Math.random() * 15)) +
    " years old, a young adult.",
  "You are " + (25 + Math.ceil(Math.random() * 25)) + " years old, an adult.",
  "You are " + (25 + Math.ceil(Math.random() * 25)) + " years old, an adult.",
  "You are " + (25 + Math.ceil(Math.random() * 25)) + " years old, an adult.",

  "You are " +
    (50 + Math.ceil(Math.random() * 25)) +
    " years old, an older adult.",
  "You are " +
    (50 + Math.ceil(Math.random() * 25)) +
    " years old, an older adult.",

  "You are " +
    (75 + Math.ceil(Math.random() * 25)) +
    " years old, a venerable adult.",
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

function setGoblinStats() {
  charStats = {
    strength: 8,
    agility: 12,
    intellect: 10,
    will: 9,
    speed: 10,
    corruption: 0,
    insanity: 0,
    perbonus: 1,
    healthbonus: 0,
    defbonus: 0,
    speedbonus: 0,
    charsize: "1/2",
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

  bumpStats();
  getSecondaryStats();
}

function getGoblinName() {
  return goblinNames[Math.floor(Math.random() * goblinNames.length)];
}

function setGoblinDetails() {
  var goblinDetails = "<div>" + getGoblinAge() + "</div>";
  goblinDetails += "<div>" + getGoblinBuild() + "</div>";
  goblinDetails += "<div>" + getGoblinApp() + "</div>";
  goblinDetails += "<div>" + getGoblinHabit() + "</div>";
  goblinDetails += "<div>" + getGoblinBackground() + "</div>";
  goblinDetails += "<div>" + getGoblinPersonality() + "</div>";

  return goblinDetails;
}

function getGoblinAge() {
  var ageRoll = rollxdx(3, 6);
  return goblinAge[ageRoll];
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
    charStats.insanity += 1;
  } else if (backgroundValue.match("You start the game with 1 Corruption.")) {
    charStats.corruption += 1;
  } else if (
    backgroundValue == "You came into money and start the game with 2d6 cp"
  ) {
    var easyMoney = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
    charStats.cp += easyMoney;
    backgroundValue =
      "You came into money and start the game with " + easyMoney + "cp.";
  } else if (
    backgroundValue ==
    "You are an unrepentant criminal and have an additional criminal profession."
  ) {
    charStats.prcr += 1;
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
