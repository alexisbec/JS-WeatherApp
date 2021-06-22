const getWeather = async (city = 'London') => {
  try {
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q='${city}'&appid=1ec6b9c9b5c527cdcded5b165dc7b7c0&units=metric`);
    const data = await response.json();

    console.log(weather);
  } catch (error) {
    console.log('error');
  }
}