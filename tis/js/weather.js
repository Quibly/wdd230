const getJSON = async url => {
    const response = await fetch(url);
    return response.json(); 
};
getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=40.45749307996542&lon=-109.52854471895078&units=imperial&lang=en&appid=7896a0abdc6f34148aad2107b8c89750")
   .then(data => displayWeather(data));

function displayWeather(data) {
    console.log(data);
    let weatherString = data;
    //If there is a weather alert this IF statement will add a banner to display the alert information.
    //This includes a button assigned for closing the alert banner.
    if (typeof weatherString.alerts !== 'undefined' && weatherString.alerts.length > 0) {
        let alertEvent = weatherString.alerts[0].event;

        let alertStart = weatherString.alerts[0].start;
        const startDate = new Date(alertStart * 1000);
        const formatStart = `${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()}`;

        let alertEnd = weatherString.alerts[0].end;
        const endDate = new Date(alertEnd * 1000);
        const formatEnd = `${endDate.getHours()}:${endDate.getMinutes()}:${endDate.getSeconds()}`;

        let alertDescription = weatherString.alerts[0].description;
        let weatherAlert = document.querySelector('#weatherAlert');

        const alertEventbutton = document.createElement('button');
        alertEventbutton.innerHTML = "X";
        alertEventbutton.setAttribute('type', 'button');

        const alertEventH2 = document.createElement('h2');
        const alertEventP1 = document.createElement('span');
        const alertEventP2 = document.createElement('p');

        alertEventH2.textContent = `Weather Alert: ${alertEvent}`;
        alertEventP1.innerHTML = `Starts: &nbsp; ${formatStart} &nbsp; &nbsp; &nbsp; &nbsp; Ends: &nbsp; ${formatEnd}`;
        alertEventP2.innerText = alertDescription;

        weatherAlert.appendChild(alertEventbutton);
        weatherAlert.appendChild(alertEventH2);
        weatherAlert.appendChild(alertEventP1);
        weatherAlert.appendChild(alertEventP2);

        alertEventbutton.addEventListener('click', function() {toggleAlert()});

        function toggleAlert() {
            weatherAlert.setAttribute('style', 'display:none');
        }
    } else {
        let weatherAlert = document.querySelector('#weatherAlert');
        weatherAlert.setAttribute('style', 'display:none');
    }

    //Set card information for 3 day forcast
    for (let i = 0; i < 3; i++) {
        let forcast;
        switch (i) {
            case 0:
                forcast = document.querySelector(`#weatherForcast1`);
                break;
            case 1:
                forcast = document.querySelector(`#weatherForcast2`);
                break;
            case 2:
                forcast = document.querySelector(`#weatherForcast3`);
        }
        
        let date = weatherString.daily[i].dt;
        let forcastDate = new Date(date*1000);
        let formDate= new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(forcastDate);
        const dayLabel = document.createElement('h3');
        const tempcurrent = document.createElement('p');
        const tempHiLo = document.createElement('p');

        dayLabel.textContent = `${formDate}`;
        tempcurrent.innerHTML = `Day Temp: &nbsp; ${weatherString.daily[i].temp.day}&#176;`;
        tempHiLo.innerHTML = `Min: &nbsp;${weatherString.daily[i].temp.min}&#176; &nbsp; &nbsp; &nbsp; Max: &nbsp;${weatherString.daily[i].temp.max}&#176;`;
        
        forcast.appendChild(dayLabel);
        forcast.appendChild(tempcurrent);
        forcast.appendChild(tempHiLo);
    }
    // let weatherIcon= document.querySelector('#weatherIcon');
    // let weatherTemp= document.querySelector('#weatherTemp');
    // let weatherCondition= document.querySelector('#weatherCondition');
    // let weatherWindSpeed= document.querySelector('#weatherWindSpeed');
    // let weatherWindChill= document.querySelector('#weatherWindChill');
    // let temperature = weatherString.main.temp;
    // let speed = weatherString.wind.speed;
    // let windChill = 35.74 + (0.6215 * temperature) - (35.75 * (speed ** 0.16)) + (0.4275 * temperature * (speed ** 0.16));
    // let iconValue = weatherString.weather[0].icon;
    // let iconImageURL =  `https://openweathermap.org/img/wn/${iconValue}@2x.png`;
    // let iconImage = new Image();
    // iconImage.setAttribute('alt', 'Weather Icon showing weather conditions');
    // iconImage.src = iconImageURL;
    // weatherIcon.appendChild(iconImage);
    // weatherTemp.textContent = `${weatherString.main.temp.toFixed(0)}\u00B0 F`;
    // weatherCondition.textContent = weatherString.weather[0].main;
    // weatherWindSpeed.textContent = `Wind Speed: ${weatherString.wind.speed.toFixed(1)} mph`;
    // if ((temperature <= 50)&&(speed > 3)) {
    //     weatherWindChill.textContent = `Wind Chill: ${windChill.toFixed(0)}\u00B0 F`;
    // } else {
    //     weatherWindChill.textContent = 'Wind Chill: N/A';
    // }

}
