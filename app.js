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