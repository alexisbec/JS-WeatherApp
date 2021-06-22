/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const getWeather = async (city = 'London') => {
  try {
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q='${city}'&appid=1ec6b9c9b5c527cdcded5b165dc7b7c0&units=metric`);
    const data = await response.json();

    console.log(weather);
  } catch (error) {
    console.log('error');
  }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1XZWF0aGVyQXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLHFGQUFxRixLQUFLO0FBQzFGOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5ID0gJ0xvbmRvbicpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JyR7Y2l0eX0nJmFwcGlkPTFlYzZiOWM5YjVjNTI3Y2RjZGVkNWIxNjVkYzdiN2MwJnVuaXRzPW1ldHJpY2ApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==