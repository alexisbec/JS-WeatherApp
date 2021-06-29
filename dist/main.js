/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1XZWF0aGVyQXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EscUZBQXFGLEtBQUs7QUFDMUYscUZBQXFGLEtBQUs7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQ7O0FBRUE7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDO0FBQ0Esa0NBQWtDLHNCQUFzQjtBQUN4RDtBQUNBLEtBQUs7QUFDTCw4QkFBOEIsZ0JBQWdCO0FBQzlDO0FBQ0Esa0NBQWtDLHNCQUFzQjtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGNBQWMsRUFBRTtBQUN2RDs7QUFFQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5ID0gJ05ldyBZb3JrJykgPT4ge1xyXG4gIGNvbnN0IHsgY2l0eUZvcm0gfSA9IGRvY3VtZW50LmZvcm1zO1xyXG5cclxuICBjaXR5Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3Qgd2VhdGhlckMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9MWVjNmI5YzliNWM1MjdjZGNkZWQ1YjE2NWRjN2I3YzAmdW5pdHM9bWV0cmljYCk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRiA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0xZWM2YjljOWI1YzUyN2NkY2RlZDViMTY1ZGM3YjdjMCZ1bml0cz1pbXBlcmlhbGApO1xyXG4gICAgY29uc3QgZGF0YUMgPSBhd2FpdCB3ZWF0aGVyQy5qc29uKCk7XHJcbiAgICBjb25zdCBkYXRhRiA9IGF3YWl0IHdlYXRoZXJGLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBjZWxzaXVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NlbHNpdXMnKTtcclxuICAgIGNvbnN0IGZhcmVuaGVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXJlbmhlaXQnKTtcclxuICAgIGNvbnN0IGRDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RDaXR5Jyk7XHJcbiAgICBkQ2l0eS5pbm5lckhUTUwgPSBkYXRhQy5uYW1lO1xyXG4gICAgY29uc3QgZFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZFdlYXRoZXInKTtcclxuICAgIGRXZWF0aGVyLmlubmVySFRNTCA9IGAke2RhdGFDLm1haW4udGVtcH0gwrBDYDtcclxuICAgIGNvbnN0IGZlZWxzV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVsc1dlYXRoZXInKTtcclxuICAgIGZlZWxzV2VhdGhlci5pbm5lckhUTUwgPSBgJHtkYXRhQy5tYWluLmZlZWxzX2xpa2V9IMKwQ2A7XHJcbiAgICBjb25zdCBpbmZvV2VhdGhlciA9IGRhdGFDLndlYXRoZXJbMF0ubWFpbjtcclxuXHJcbiAgICBpZiAoY2Vsc2l1cy5jaGVja2VkKSB7XHJcbiAgICAgIGRXZWF0aGVyLmlubmVySFRNTCA9IGAke2RhdGFDLm1haW4udGVtcH0gwrBDYDtcclxuICAgICAgY29uc3QgZmVlbHNXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzV2VhdGhlcicpO1xyXG4gICAgICBmZWVsc1dlYXRoZXIuaW5uZXJIVE1MID0gYCR7ZGF0YUMubWFpbi5mZWVsc19saWtlfSDCsENgO1xyXG4gICAgICBjaXR5Rm9ybS5yZXNldCgpO1xyXG4gICAgfSBlbHNlIGlmIChmYXJlbmhlaXQuY2hlY2tlZCkge1xyXG4gICAgICBkV2VhdGhlci5pbm5lckhUTUwgPSBgJHtkYXRhRi5tYWluLnRlbXB9IMKwRmA7XHJcbiAgICAgIGNvbnN0IGZlZWxzV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVsc1dlYXRoZXInKTtcclxuICAgICAgZmVlbHNXZWF0aGVyLmlubmVySFRNTCA9IGAke2RhdGFGLm1haW4uZmVlbHNfbGlrZX0gwrBGYDtcclxuICAgICAgY2l0eUZvcm0ucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5mb1dlYXRoZXIgPT09ICdSYWluJykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1nL3JhaW5fYmcucG5nJylcIjtcclxuICAgIH0gZWxzZSBpZiAoaW5mb1dlYXRoZXIgPT09ICdDbG91ZHMnKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWcvY2xvdWRzX2JnLnBuZycpXCI7XHJcbiAgICB9IGVsc2UgaWYgKGluZm9XZWF0aGVyID09PSAnQ2xlYXInKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWcvY2xlYXJfYmcucG5nJylcIjtcclxuICAgIH0gZWxzZSBpZiAoaW5mb1dlYXRoZXIgPT09ICdTbm93Jykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1nL3Nub3dfYmcucG5nJylcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWcvYmFja2dyb3VuZC5wbmcnKVwiO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3InKTtcclxuICAgIGVycm9ycy5pbm5lckhUTUwgPSBcIkNpdHkgY2FuJ3QgYmUgYmxhbmtcIjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RDaXR5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpLnZhbHVlO1xyXG4gIGlmIChjaXR5ID09PSAnJykge1xyXG4gICAgY29uc3QgZXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XHJcbiAgICBlcnJvcnMuaW5uZXJIVE1MID0gXCJDaXR5IGNhbid0IGJlIGJsYW5rXCI7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGdldFdlYXRoZXIoY2l0eSk7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaENpdHkgPSAoKSA9PiB7XHJcbiAgZ2V0V2VhdGhlcigpO1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5kQ2l0eScpO1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2VsZWN0Q2l0eSgpOyB9KTtcclxufTtcclxuXHJcbmZldGNoQ2l0eSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9