/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const getWeather = async (city = 'london') => {
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

const fetchCity = () => {
  getWeather();
  const btn = document.querySelector('#findCity');
  btn.addEventListener('click', () => { changeCity(); });
}

fetchCity();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1XZWF0aGVyQXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9GQUFvRixLQUFLO0FBQ3pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxjQUFjLEVBQUU7QUFDdkQ7O0FBRUEsWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eSA9ICdsb25kb24nKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9MWVjNmI5YzliNWM1MjdjZGNkZWQ1YjE2NWRjN2I3YzAmdW5pdHM9bWV0cmljYCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlci5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgZENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZENpdHknKTtcclxuICAgIGRDaXR5LmlubmVySFRNTCA9IGRhdGEubmFtZTtcclxuICAgIGNvbnN0IGRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RXZWF0aGVyJyk7XHJcbiAgICBkV2VhdGhlci5pbm5lckhUTUwgPSBgJHtkYXRhLm1haW4udGVtcH0gwrBDYDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlQ2l0eSA9ICgpID0+IHtcclxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS52YWx1ZTtcclxuICBpZiAoY2l0eSA9PT0gJycpIHtcclxuICAgIGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xyXG4gICAgZXJyb3JzLmlubmVySFRNTCA9ICdDaXR5IGNhblxcJ3QgYmUgYmxhbmsnO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBnZXRXZWF0aGVyKGNpdHkpO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hDaXR5ID0gKCkgPT4ge1xyXG4gIGdldFdlYXRoZXIoKTtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluZENpdHknKTtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNoYW5nZUNpdHkoKTsgfSk7XHJcbn1cclxuXHJcbmZldGNoQ2l0eSgpOyJdLCJzb3VyY2VSb290IjoiIn0=