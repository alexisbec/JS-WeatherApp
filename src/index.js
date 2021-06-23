const convertToF = (celsius) => {
  const farenheit = (celsius * 9) / 5 + 32;
  return farenheit.toFixed(2);
};

const getWeather = async (city = 'New York') => {
  const { cityForm } = document.forms;

  cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  try {
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ec6b9c9b5c527cdcded5b165dc7b7c0&units=metric`);
    const data = await weather.json();

    const celsius = document.querySelector('#celsius');
    const farenheit = document.querySelector('#farenheit');
    const dCity = document.querySelector('#dCity');
    dCity.innerHTML = data.name;
    const dWeather = document.querySelector('#dWeather');
    dWeather.innerHTML = `${data.main.temp} °C`;
    const feelsWeather = document.querySelector('#feelsWeather');
    feelsWeather.innerHTML = `${data.main.feels_like} °C`;
    const infoWeather = data.weather[0].main;

    if (celsius.checked) {
      dWeather.innerHTML = `${data.main.temp} °C`;
      const feelsWeather = document.querySelector('#feelsWeather');
      feelsWeather.innerHTML = `${data.main.feels_like} °C`;
      cityForm.reset();
    } else if (farenheit.checked) {
      const fMain = convertToF(data.main.temp);
      dWeather.innerHTML = `${fMain} °F`;
      const fFeels = convertToF(data.main.feels_like);
      feelsWeather.innerHTML = `${fFeels} °F`;
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
