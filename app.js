// Time
function currentTime() {
  var today = new Date()
  
  // https://www.plus2net.com/javascript_tutorial/clock.php
  var minutes = today.getMinutes().toString()
  minutes = minutes.length == 1 ? 0 + minutes : minutes;

  var time = today.getHours() + ":" + minutes;
  document.getElementById('time').innerHTML = time;
  setTimeout("currentTime()",100)
}
currentTime();


// Bookmarks

let bookmarks = [
  {
    name: "Bank",
    link: "https://www.wellsfargo.com/",
  }
]