// UI for weather & finance API
class UI {
  constructor() {
    // Weather selectors
    this.temp = document.getElementById('weather-temp');
    this.desc = document.getElementById('weather-desc');
    this.wind = document.getElementById('weather-wind');
    // Finance selectors
    this.price = document.getElementById('bitcoin');
  }

  display(weather) {
    this.temp.textContent = weather.main.temp;
    this.temp.textContent = `${this.temp.textContent.slice(0, -3)} F`;

    this.desc.textContent = weather.weather[0].description;
    
    this.wind.textContent = weather.wind.speed
    this.wind.textContent = `wind ${this.wind.textContent.slice(0,2)} mph`;
  }
  displayNumbers(bitcoin) {
    this.price.textContent = bitcoin["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
    this.price.textContent = `${this.price.textContent.slice(0,-9)}`;
  }
}
const ui = new UI();

// Weather API
function weather() {
  let city = "Yuma";
  let apiKey = "";

  async function getWeather() {
    let response = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`);
    let weather = (await response).json();
    return weather;
  }
  getWeather().then(weather => ui.display(weather));
}
weather();

// Financial API
function bitcoin() {
  let apiKey = ""

  async function getBitcoin() {
    let response = fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${apiKey}`);
    let bitcoin = (await response).json();
    return bitcoin;
  }
  getBitcoin().then(bitcoin => ui.displayNumbers(bitcoin))
  // getBitcoin().then(bitcoin => console.log(bitcoin["Realtime Currency Exchange Rate"]["5. Exchange Rate"]))
}
bitcoin();