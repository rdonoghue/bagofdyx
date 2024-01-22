var ancestryAbilityString = "";
var ancestryLanguageStack = [
  "Common",
  "High Archaic",
  "Elvish",
  "Trollish",
  "Dark Speech",
];

var ancestryList = ["", "", ""];

function setAncestryStats() {
  charStats = {
    strength: 10,
    agility: 10,
    intellect: 10,
    will: 10,
    perbonus: 0,
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

function setAncestryDetails() {
  var ancestryDetails = "<div>" + setAncestryList();
  +"</div>";

  return ancestryDetails;
}
function setancestryAge() {
  return ancestryList[rollxdx(3, 6)];
}
