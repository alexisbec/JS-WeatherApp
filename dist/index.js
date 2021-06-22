/******/ (() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const getWeather = async (city = 'New York') => {
  const cityForm = document.forms['cityForm'];

  cityForm.addEventListener('submit', function (e) {
    e.preventDefault();
  });

  try {
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ec6b9c9b5c527cdcded5b165dc7b7c0&units=metric`);
    const data = await weather.json();

    const dCity = document.querySelector('#dCity');
    dCity.innerHTML = data.name;
    const dWeather = document.querySelector('#dWeather');
    dWeather.innerHTML = `${data.main.temp} °C`;
    const feelsWeather = document.querySelector('#feelsWeather');
    feelsWeather.innerHTML = `${data.main.feels_like} °C`;
  } catch (error) {
    console.log('error');
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
}

fetchCity();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1XZWF0aGVyQXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9GQUFvRixLQUFLO0FBQ3pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsY0FBYyxFQUFFO0FBQ3ZEOztBQUVBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5ID0gJ05ldyBZb3JrJykgPT4ge1xyXG4gIGNvbnN0IGNpdHlGb3JtID0gZG9jdW1lbnQuZm9ybXNbJ2NpdHlGb3JtJ107XHJcblxyXG4gIGNpdHlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTFlYzZiOWM5YjVjNTI3Y2RjZGVkNWIxNjVkYzdiN2MwJnVuaXRzPW1ldHJpY2ApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXIuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IGRDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RDaXR5Jyk7XHJcbiAgICBkQ2l0eS5pbm5lckhUTUwgPSBkYXRhLm5hbWU7XHJcbiAgICBjb25zdCBkV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkV2VhdGhlcicpO1xyXG4gICAgZFdlYXRoZXIuaW5uZXJIVE1MID0gYCR7ZGF0YS5tYWluLnRlbXB9IMKwQ2A7XHJcbiAgICBjb25zdCBmZWVsc1dlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHNXZWF0aGVyJyk7XHJcbiAgICBmZWVsc1dlYXRoZXIuaW5uZXJIVE1MID0gYCR7ZGF0YS5tYWluLmZlZWxzX2xpa2V9IMKwQ2A7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNlbGVjdENpdHkgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JykudmFsdWU7XHJcbiAgaWYgKGNpdHkgPT09ICcnKSB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3InKTtcclxuICAgIGVycm9ycy5pbm5lckhUTUwgPSBcIkNpdHkgY2FuJ3QgYmUgYmxhbmtcIjtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZ2V0V2VhdGhlcihjaXR5KTtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoQ2l0eSA9ICgpID0+IHtcclxuICBnZXRXZWF0aGVyKCk7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmRDaXR5Jyk7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzZWxlY3RDaXR5KCk7IH0pO1xyXG59XHJcblxyXG5mZXRjaENpdHkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==