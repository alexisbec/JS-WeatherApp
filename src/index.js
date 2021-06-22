const getWeather = async (city = 'Mexico') => {
  const addForm = document.forms['cityForm'];

  addForm.addEventListener('submit', function (e) {
    e.preventDefault();
  });

  try {
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ec6b9c9b5c527cdcded5b165dc7b7c0&units=metric`);
    const data = await weather.json();

    const dCity = document.querySelector('#dCity');
    dCity.innerHTML = data.name;
    const dWeather = document.querySelector('#dWeather');
    dWeather.innerHTML = `${data.main.temp} °C`;
  } catch (error) {
    console.log('error');
  }
};

const changeCity = () => {
  const city = document.querySelector('#city').value;
  if (city === '') {
    const errors = document.querySelector('#error');
    errors.innerHTML = 'City can\'t be blank';
    return;
  }
  getWeather(city);
};

const emptyVals = () => {
  const errors = document.querySelector('#error');
  errors.innerHTML = '';
  document.getElementById('city').value = '';
};

const fetchCity = () => {
  getWeather();
  const btn = document.querySelector('#findCity');
  btn.addEventListener('click', () => { changeCity(); });
}

fetchCity();