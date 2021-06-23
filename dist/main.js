/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1XZWF0aGVyQXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRDs7QUFFQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0Esa0NBQWtDLHFCQUFxQjtBQUN2RDtBQUNBLEtBQUs7QUFDTDtBQUNBLDhCQUE4QixNQUFNO0FBQ3BDO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxjQUFjLEVBQUU7QUFDdkQ7O0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnZlcnRUb0YgPSAoY2Vsc2l1cykgPT4ge1xyXG4gIGNvbnN0IGZhcmVuaGVpdCA9IChjZWxzaXVzICogOSkgLyA1ICsgMzI7XHJcbiAgcmV0dXJuIGZhcmVuaGVpdC50b0ZpeGVkKDIpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5ID0gJ05ldyBZb3JrJykgPT4ge1xyXG4gIGNvbnN0IHsgY2l0eUZvcm0gfSA9IGRvY3VtZW50LmZvcm1zO1xyXG5cclxuICBjaXR5Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0xZWM2YjljOWI1YzUyN2NkY2RlZDViMTY1ZGM3YjdjMCZ1bml0cz1tZXRyaWNgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBjZWxzaXVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NlbHNpdXMnKTtcclxuICAgIGNvbnN0IGZhcmVuaGVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXJlbmhlaXQnKTtcclxuICAgIGNvbnN0IGRDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RDaXR5Jyk7XHJcbiAgICBkQ2l0eS5pbm5lckhUTUwgPSBkYXRhLm5hbWU7XHJcbiAgICBjb25zdCBkV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkV2VhdGhlcicpO1xyXG4gICAgZFdlYXRoZXIuaW5uZXJIVE1MID0gYCR7ZGF0YS5tYWluLnRlbXB9IMKwQ2A7XHJcbiAgICBjb25zdCBmZWVsc1dlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHNXZWF0aGVyJyk7XHJcbiAgICBmZWVsc1dlYXRoZXIuaW5uZXJIVE1MID0gYCR7ZGF0YS5tYWluLmZlZWxzX2xpa2V9IMKwQ2A7XHJcbiAgICBjb25zdCBpbmZvV2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluO1xyXG5cclxuICAgIGlmIChjZWxzaXVzLmNoZWNrZWQpIHtcclxuICAgICAgZFdlYXRoZXIuaW5uZXJIVE1MID0gYCR7ZGF0YS5tYWluLnRlbXB9IMKwQ2A7XHJcbiAgICAgIGNvbnN0IGZlZWxzV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVsc1dlYXRoZXInKTtcclxuICAgICAgZmVlbHNXZWF0aGVyLmlubmVySFRNTCA9IGAke2RhdGEubWFpbi5mZWVsc19saWtlfSDCsENgO1xyXG4gICAgICBjaXR5Rm9ybS5yZXNldCgpO1xyXG4gICAgfSBlbHNlIGlmIChmYXJlbmhlaXQuY2hlY2tlZCkge1xyXG4gICAgICBjb25zdCBmTWFpbiA9IGNvbnZlcnRUb0YoZGF0YS5tYWluLnRlbXApO1xyXG4gICAgICBkV2VhdGhlci5pbm5lckhUTUwgPSBgJHtmTWFpbn0gwrBGYDtcclxuICAgICAgY29uc3QgZkZlZWxzID0gY29udmVydFRvRihkYXRhLm1haW4uZmVlbHNfbGlrZSk7XHJcbiAgICAgIGZlZWxzV2VhdGhlci5pbm5lckhUTUwgPSBgJHtmRmVlbHN9IMKwRmA7XHJcbiAgICAgIGNpdHlGb3JtLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluZm9XZWF0aGVyID09PSAnUmFpbicpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltZy9yYWluX2JnLnBuZycpXCI7XHJcbiAgICB9IGVsc2UgaWYgKGluZm9XZWF0aGVyID09PSAnQ2xvdWRzJykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1nL2Nsb3Vkc19iZy5wbmcnKVwiO1xyXG4gICAgfSBlbHNlIGlmIChpbmZvV2VhdGhlciA9PT0gJ0NsZWFyJykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1nL2NsZWFyX2JnLnBuZycpXCI7XHJcbiAgICB9IGVsc2UgaWYgKGluZm9XZWF0aGVyID09PSAnU25vdycpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltZy9zbm93X2JnLnBuZycpXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1nL2JhY2tncm91bmQucG5nJylcIjtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XHJcbiAgICBlcnJvcnMuaW5uZXJIVE1MID0gXCJDaXR5IGNhbid0IGJlIGJsYW5rXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0Q2l0eSA9ICgpID0+IHtcclxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS52YWx1ZTtcclxuICBpZiAoY2l0eSA9PT0gJycpIHtcclxuICAgIGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xyXG4gICAgZXJyb3JzLmlubmVySFRNTCA9IFwiQ2l0eSBjYW4ndCBiZSBibGFua1wiO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBnZXRXZWF0aGVyKGNpdHkpO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hDaXR5ID0gKCkgPT4ge1xyXG4gIGdldFdlYXRoZXIoKTtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluZENpdHknKTtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNlbGVjdENpdHkoKTsgfSk7XHJcbn07XHJcblxyXG5mZXRjaENpdHkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==