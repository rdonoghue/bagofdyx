var messagesOn = 1;
function pageReset() {
  location.reload();
}

function capitalize(words) {
  return words.charAt(0).toUpperCase() + str.slice(1);
}

function myLog(msg, reference = "Missing", rank = 0) {
  if (messagesOn < rank) {
    console.log("Source: " + reference);
    console.log(msg);
  }
}
