let businessURL = 'https://quibly.github.io/wdd230/chamber/data/data.json';
let cards = document.querySelector(".cards");

fetch(businessURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
        const businesses = jsonObject['businesses'];
        data.businesses.forEach(displayBusinesses);
    });

function displayBusinesses(business) {
    let card = document.createElement('div');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let logoContainer = document.createElement('h2');
    let logoImage = document.createElement('img');

    logoImage.setAttribute('src', business.Logo);
    logoImage.setAttribute('alt', business.LogoAlt);
    logoImage.setAttribute('loading', 'lazy');
    logoContainer.appendChild(logoImage);
    logoContainer.setAttribute('class', 'logoContainer');

    name.textContent = business.Name;
    address.textContent = business.Address;
    phone.textContent = business.Phone;

    website.setAttribute('href', business.Website);
    website.textContent = business.Website;

    card.appendChild(logoContainer);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
}
