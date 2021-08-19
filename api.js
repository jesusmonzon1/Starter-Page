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
    // Temp and split the decimal
    this.temp.textContent = weather.main.temp;
    let newSplit = this.temp.textContent;
    this.temp.textContent = `${newSplit.split(".")[0]} F`;
    // Get description, ie 'few clouds'
    this.desc.textContent = weather.weather[0].description;
    // Get wind
    this.wind.textContent = weather.wind.speed
    let windSplit = this.wind.textContent;
    this.wind.textContent = `wind ${windSplit.split(".")[0]} mph`;
  }
  displayNumbers(bitcoin) {
    // Get current exchange rate for USD to bitcoin
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
    console.log(weather);
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
}
bitcoin();