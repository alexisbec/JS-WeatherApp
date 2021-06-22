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
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ec6b9c9b5c527cdcded5b165dc7b7c0&units=metric`);
    const data = await weather.json();

    const dCity = document.querySelector('#dCity');
    dCity.innerHTML = data.name;
    const dWeather = document.querySelector('#dWeather');
    dWeather.innerHTML = `${data.main.temp} °C`;
    convertToF(data.main.temp);

    const feelsWeather = document.querySelector('#feelsWeather');
    feelsWeather.innerHTML = `${data.main.feels_like} °C`;
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

const convertToF = (celsius) => {
  const farenheit = celsius * 9 / 5 + 32;
  
  console.log(farenheit);
};

const fetchCity = () => {
  getWeather();
  const btn = document.querySelector('#findCity');
  btn.addEventListener('click', () => { selectCity(); });
};

fetchCity();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1XZWF0aGVyQXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0M7O0FBRUE7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxjQUFjLEVBQUU7QUFDdkQ7O0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eSA9ICdOZXcgWW9yaycpID0+IHtcclxuICBjb25zdCB7IGNpdHlGb3JtIH0gPSBkb2N1bWVudC5mb3JtcztcclxuXHJcbiAgY2l0eUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9MWVjNmI5YzliNWM1MjdjZGNkZWQ1YjE2NWRjN2I3YzAmdW5pdHM9bWV0cmljYCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlci5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgZENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZENpdHknKTtcclxuICAgIGRDaXR5LmlubmVySFRNTCA9IGRhdGEubmFtZTtcclxuICAgIGNvbnN0IGRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RXZWF0aGVyJyk7XHJcbiAgICBkV2VhdGhlci5pbm5lckhUTUwgPSBgJHtkYXRhLm1haW4udGVtcH0gwrBDYDtcclxuICAgIGNvbnZlcnRUb0YoZGF0YS5tYWluLnRlbXApO1xyXG5cclxuICAgIGNvbnN0IGZlZWxzV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVsc1dlYXRoZXInKTtcclxuICAgIGZlZWxzV2VhdGhlci5pbm5lckhUTUwgPSBgJHtkYXRhLm1haW4uZmVlbHNfbGlrZX0gwrBDYDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XHJcbiAgICBlcnJvcnMuaW5uZXJIVE1MID0gXCJDaXR5IGNhbid0IGJlIGJsYW5rXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0Q2l0eSA9ICgpID0+IHtcclxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS52YWx1ZTtcclxuICBpZiAoY2l0eSA9PT0gJycpIHtcclxuICAgIGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xyXG4gICAgZXJyb3JzLmlubmVySFRNTCA9IFwiQ2l0eSBjYW4ndCBiZSBibGFua1wiO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBnZXRXZWF0aGVyKGNpdHkpO1xyXG59O1xyXG5cclxuY29uc3QgY29udmVydFRvRiA9IChjZWxzaXVzKSA9PiB7XHJcbiAgY29uc3QgZmFyZW5oZWl0ID0gY2Vsc2l1cyAqIDkgLyA1ICsgMzI7XHJcbiAgXHJcbiAgY29uc29sZS5sb2coZmFyZW5oZWl0KTtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoQ2l0eSA9ICgpID0+IHtcclxuICBnZXRXZWF0aGVyKCk7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmRDaXR5Jyk7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzZWxlY3RDaXR5KCk7IH0pO1xyXG59O1xyXG5cclxuZmV0Y2hDaXR5KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=