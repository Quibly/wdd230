const apiURL = "http://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&units=imperial&lang=en&appid=7896a0abdc6f34148aad2107b8c89750";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.list[0].main.temp.toFixed(1);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    const desc = jsObject.list[0].weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc.toUpperCase();
  });

 