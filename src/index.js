const getWeather = async (city = 'New York') => {
  const { cityForm } = document.forms;

  cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  try {
    const weatherC = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ec6b9c9b5c527cdcded5b165dc7b7c0&units=metric`);
    const weatherF = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ec6b9c9b5c527cdcded5b165dc7b7c0&units=imperial`);
    const dataC = await weatherC.json();
    const dataF = await weatherF.json();

    const celsius = document.querySelector('#celsius');
    const farenheit = document.querySelector('#farenheit');
    const dCity = document.querySelector('#dCity');
    dCity.innerHTML = dataC.name;
    const dWeather = document.querySelector('#dWeather');
    dWeather.innerHTML = `${dataC.main.temp} °C`;
    const feelsWeather = document.querySelector('#feelsWeather');
    feelsWeather.innerHTML = `${dataC.main.feels_like} °C`;
    const infoWeather = dataC.weather[0].main;

    if (celsius.checked) {
      dWeather.innerHTML = `${dataC.main.temp} °C`;
      const feelsWeather = document.querySelector('#feelsWeather');
      feelsWeather.innerHTML = `${dataC.main.feels_like} °C`;
      cityForm.reset();
    } else if (farenheit.checked) {
      dWeather.innerHTML = `${dataF.main.temp} °F`;
      const feelsWeather = document.querySelector('#feelsWeather');
      feelsWeather.innerHTML = `${dataF.main.feels_like} °F`;
      cityForm.reset();
    }

    if (infoWeather === 'Rain') {
      document.body.style.backgroundImage = "url('../src/img/rain_bg.png')";
    } else if (infoWeather === 'Clouds') {
      document.body.style.backgroundImage = "url('../src/img/clouds_bg.png')";
    } else if (infoWeather === 'Clear') {
      document.body.style.backgroundImage = "url('../src/img/clear_bg.png')";
    } else if (infoWeather === 'Snow') {
      document.body.style.backgroundImage = "url('../src/img/snow_bg.png')";
    } else {
      document.body.style.backgroundImage = "url('../src/img/background.png')";
    }
  } catch (error) {
    const errors = document.querySelector('#error');
    errors.innerHTML = "City can't be blank";
  }
};

const selectCity = () => {
  const city = document.querySelector('#city').value;
  if (city === '') {
    const errors = document.querySelector('#error');
    errors.innerHTML = "City can't be blank";
    return;
  }
  getWeather(city);
};

const fetchCity = () => {
  getWeather();
  const btn = document.querySelector('#findCity');
  btn.addEventListener('click', () => { selectCity(); });
};

fetchCity();
