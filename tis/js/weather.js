let latitude;
let longitude;
let locationLink;

function getLocation() {
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(useLocation, defaultLocation)
    // } -- I commented out this code because it was giving me Lighthouse errors for best practices since it's loading the location data without user interaction for location services.
    defaultLocation();
}

function useLocation(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    locationLink = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&lang=en&appid=7896a0abdc6f34148aad2107b8c89750";

    const getJSON = async url => {
        const response = await fetch(url);
        return response.json(); 
    };
    getJSON(locationLink)
       .then(data => displayWeather(data));
}

function defaultLocation(error) {
    latitude = 39.7392;
    longitude = 104.9903;
    locationLink = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&lang=en&appid=7896a0abdc6f34148aad2107b8c89750";

    const getJSON = async url => {
        const response = await fetch(url);
        return response.json(); 
    };
    getJSON(locationLink)
       .then(data => displayWeather(data));
}

getLocation();

function displayWeather(data) {
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

        alertEventH2.textContent = `Weather Alert: ${alertEvent} for Denver, Colorado`;
        alertEventP1.innerHTML = `Starts: &nbsp; ${formatStart} &nbsp; &nbsp; &nbsp; &nbsp; Ends: &nbsp; ${formatEnd}`;
        alertEventP2.innerText = alertDescription;

        weatherAlert.appendChild(alertEventbutton);
        weatherAlert.appendChild(alertEventH2);
        weatherAlert.appendChild(alertEventP1);
        weatherAlert.appendChild(alertEventP2);

        alertEventbutton.addEventListener('click', function() {toggleAlert()}, {passive: true});

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
        const tempHigh = document.createElement('p');
        const tempLow = document.createElement('p');

        dayLabel.textContent = `${formDate}`;
        tempcurrent.innerHTML = `Day Temp: &nbsp; ${weatherString.daily[i].temp.day}&#176;`;
        tempHigh.innerHTML = `Min: &nbsp;${weatherString.daily[i].temp.min}&#176;`;
        tempLow.innerHTML = `Max: &nbsp;${weatherString.daily[i].temp.max}&#176;`;

        forcast.appendChild(dayLabel);
        forcast.appendChild(tempcurrent);
        forcast.appendChild(tempHigh);
        forcast.appendChild(tempLow);
    }

    //Current weather conditions card
    let weatherCurrent = document.querySelector('#weatherCurrent');
    let currTemp = weatherString.current.temp;
    let currDesc = weatherString.current.weather[0].description;
    let currHum = weatherString.current.humidity;

    const cardHead = document.createElement('h2');
    const cardTemp = document.createElement('p');
    const cardDesc = document.createElement('p');
    const cardHum = document.createElement('p');

    cardHead.textContent = `Current Conditions`;
    cardTemp.innerHTML = `Temp: &nbsp;${currTemp} &#176;F`;
    cardDesc.innerHTML = `Desc: &nbsp;${currDesc.charAt(0).toUpperCase()}${currDesc.slice(1)}`;
    cardHum.innerHTML = `Humidity: &nbsp;${currHum}%`;
    
    weatherCurrent.appendChild(cardHead);
    weatherCurrent.appendChild(cardTemp);
    weatherCurrent.appendChild(cardDesc);
    weatherCurrent.appendChild(cardHum);
}
