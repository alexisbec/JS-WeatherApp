/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const getWeather = async (city = 'Mexico') => {
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

const inputVal = () => {
  const errors = document.querySelector('#error');
  errors.innerHTML = '';
  document.getElementById('city').value = '';
};

const fetchCity = () => {
  getWeather();
  const btn = document.querySelector('#findCity');
  btn.addEventListener('click', () => { selectCity(); });
}

fetchCity();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1XZWF0aGVyQXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9GQUFvRixLQUFLO0FBQ3pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxjQUFjLEVBQUU7QUFDdkQ7O0FBRUEsWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eSA9ICdNZXhpY28nKSA9PiB7XHJcbiAgY29uc3QgY2l0eUZvcm0gPSBkb2N1bWVudC5mb3Jtc1snY2l0eUZvcm0nXTtcclxuXHJcbiAgY2l0eUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9MWVjNmI5YzliNWM1MjdjZGNkZWQ1YjE2NWRjN2I3YzAmdW5pdHM9bWV0cmljYCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlci5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgZENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZENpdHknKTtcclxuICAgIGRDaXR5LmlubmVySFRNTCA9IGRhdGEubmFtZTtcclxuICAgIGNvbnN0IGRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RXZWF0aGVyJyk7XHJcbiAgICBkV2VhdGhlci5pbm5lckhUTUwgPSBgJHtkYXRhLm1haW4udGVtcH0gwrBDYDtcclxuICAgIGNvbnN0IGZlZWxzV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVsc1dlYXRoZXInKTtcclxuICAgIGZlZWxzV2VhdGhlci5pbm5lckhUTUwgPSBgJHtkYXRhLm1haW4uZmVlbHNfbGlrZX0gwrBDYDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlQ2l0eSA9ICgpID0+IHtcclxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS52YWx1ZTtcclxuICBpZiAoY2l0eSA9PT0gJycpIHtcclxuICAgIGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xyXG4gICAgZXJyb3JzLmlubmVySFRNTCA9IFwiQ2l0eSBjYW4ndCBiZSBibGFua1wiO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBnZXRXZWF0aGVyKGNpdHkpO1xyXG59O1xyXG5cclxuY29uc3QgZW1wdHlWYWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xyXG4gIGVycm9ycy5pbm5lckhUTUwgPSAnJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpLnZhbHVlID0gJyc7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaENpdHkgPSAoKSA9PiB7XHJcbiAgZ2V0V2VhdGhlcigpO1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5kQ2l0eScpO1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgY2hhbmdlQ2l0eSgpOyB9KTtcclxufVxyXG5cclxuZmV0Y2hDaXR5KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==