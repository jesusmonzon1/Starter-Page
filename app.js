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

// Weather
function Weather() {
  let city = "Yuma";
  let apiKey = "";

  async function getWeather() {
    let response = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`);
    let responseData = (await response).json();
    return responseData;
  }
  getWeather().then(responseData => console.log(responseData));
  
  
}
Weather();



// Search
function searchEngine() {
  let input = document.getElementById("search");
  input.addEventListener("keydown", function(e) {
    if (e.code === "Enter" || e.code === 13) {
      // Get the text from search bar
      let query = e.target.value;
      // Identify which engine was selected in droopdown
      let engine = document.getElementById("dropdown");
      const checkValue = engine.options[engine.selectedIndex].value;
      // Provide cases for each value in dropdown
      switch(checkValue) {
        case "google":
          url = `https://www.google.com/search?q=${query}`
          window.location.replace(url);
          break;
        case "youtube":
          url = `https://www.youtube.com/results?search_query=${query}`
          window.location.replace(url);
          break;
        case "reddit":
          url = `https://www.reddit.com/search?q=${query}`
          window.location.replace(url);
          break;
        case "stack":
          url = `https://stackoverflow.com/search?q=${query}`
          window.location.replace(url);
          break;
        case "wiki":
          url = `https://en.wikipedia.org/wiki/${query}`
          window.location.replace(url);
          break;
        default:
          console.log('Error in selection')
          break;
      }
    }
  });
}
searchEngine();

// Bookmarks
// This array gets looped in below bookmarks function.
let bookmarksList = [
  {
    name: "Bank",
    link: "https://www.wellsfargo.com/",
  },
  {
    name: "Email",
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    name: "News",
    link: "https://www.wsj.com/",
  },
  {
    name: "Notes",
    link: "https://www.evernote.com/client/web?login=true#?hm=true&",
  }
]

function bookmarks() {
  for (const book of bookmarksList) {
    let bookmarkText = document.createElement("div");
    let bookmarkLink = document.createElement("a");

    bookmarkText.append(document.createTextNode(book.name));
    bookmarkLink.href = book.link;

    bookmarkText.classList.add("bookmark");
    bookmarkLink.classList.add("bookmark-link");

    bookmarkLink.append(bookmarkText);
  
    document.getElementById("bookmarkHold").appendChild(bookmarkLink);
  }
};
bookmarks();