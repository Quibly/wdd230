let templeCard = document.querySelector('#templeSpotlight');

const getTempleSpotlightJSON = async url => {
    const response = await fetch(url);
    return response.json(); 
};
getTempleSpotlightJSON("./data/templeData.json")
   .then(data => displayTempleSpotlight(data));

function displayTempleSpotlight(data) {
    let templeString = data.temples;
    let templeName = templeString[0].name;
    let templeAddress = templeString[0].address;
    let templePhone = templeString[0].telephone;
    let templeImage = templeString[0].image;

    const name = document.createElement('h2');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');

    image.setAttribute('src', templeImage);
    image.setAttribute('alt', 'Picture of the Spotlight Temple');
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '610');
    image.setAttribute('height', '458');
    imageContainer.appendChild(image);
    imageContainer.setAttribute('id', 'imageContainer');

    name.textContent = templeName;
    address.textContent = templeAddress;
    phone.textContent = templePhone;

    templeCard.appendChild(name);
    templeCard.appendChild(address);
    templeCard.appendChild(phone);
    templeCard.appendChild(imageContainer);
}