let businessURL = 'https://quibly.github.io/wdd230/chamber/data/data.json';

fetch(businessURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        let newBusinesses = businesses.filter(topMembers);
        newBusinesses = shuffleArray(newBusinesses);
        selectTop3(newBusinesses);
    });

function topMembers(business) {
    let membership = business.Membership;
    return (membership == "Gold" || membership == "Silver");
}

function shuffleArray(array) {
    let shuffled = array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return shuffled;
}

function selectTop3(array) {
    for (let i = 0; i < 3; i++) {
        
        let card;
        switch (i) {
            case 0:
                card = document.querySelector("#spot1");
                break;
            case 1:
                card = document.querySelector("#spot2");
                break;
            case 2:
                card = document.querySelector("#spot3");
                break;
            default:
                break;
        }

        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let logoContainer = document.createElement('div');
        let logoImage = document.createElement('img');

        logoImage.setAttribute('src', array[i].Logo);
        logoImage.setAttribute('alt', array[i].LogoAlt);
        logoImage.setAttribute('loading', 'lazy');
        logoContainer.appendChild(logoImage);
        logoContainer.setAttribute('class', 'logoContainerHome');

        name.textContent = array[i].Name;
        address.textContent = array[i].Address;
        phone.textContent = array[i].Phone;
        website.setAttribute('href', array[i].Website);
        website.setAttribute('target', '_blank');
        website.textContent = array[i].Website;

        card.appendChild(logoContainer);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
    }
}
// function displayBusinesses(business) {
    
//     let card = document.createElement('div');
//     let name = document.createElement('h2');
//     let address = document.createElement('p');
//     let phone = document.createElement('p');
//     let website = document.createElement('a');
//     let logoContainer = document.createElement('div');
//     let logoImage = document.createElement('img');

//     logoImage.setAttribute('src', business.Logo);
//     logoImage.setAttribute('alt', business.LogoAlt);
//     logoImage.setAttribute('loading', 'lazy');
//     logoContainer.appendChild(logoImage);
//     logoContainer.setAttribute('class', 'logoContainer');

//     name.textContent = business.Name;
//     address.textContent = business.Address;
//     phone.textContent = business.Phone;

//     website.setAttribute('href', business.Website);
//     website.setAttribute('target', '_blank');
//     website.textContent = business.Website;

//     card.appendChild(logoContainer);
//     card.appendChild(name);
//     card.appendChild(address);
//     card.appendChild(phone);
//     card.appendChild(website);

//     cards.appendChild(card);
// }
