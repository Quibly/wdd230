const getTemplesJSON = async url => {
    const response = await fetch(url);
    return response.json(); 
};
getTemplesJSON("../data/templeData.json")
   .then(data => displayTemples(data));

function displayTemples(data) {
    templeString = data.temples;
    for (let i = 0; i < 4; i++) {
        let templeCard;
        switch (i) {
            case 0:
                templeCard = document.querySelector(`#templeCard1`);
                break;
            case 1:
                templeCard = document.querySelector(`#templeCard2`);
                break;
            case 2:
                templeCard = document.querySelector(`#templeCard3`);
                break;
            case 3:
                templeCard = document.querySelector(`#templeCard4`);
        }

        const name = templeString[i].name;
        const address = templeString[i].address;
        const telephone = templeString[i].telephone;
        const email = templeString[i].email;
        const image = templeString[i].image;
        const services = templeString[i].services;
        const history = templeString[i].history;
        const ordinanceSchedule = templeString[i].ordinanceSchedule;
        const sessionSchedule = templeString[i].sessionSchedule;
        const templeClosureSchedule = templeString[i].templeClosureSchedule;
        const thumbsUp = localStorage.getItem(`thumbsUp${i+1}`);

        const serviceString = services.join('</br>');
        const historyString = history.join('</br>');
        const closureString = templeClosureSchedule.join('</br></br>');
        
        const tname = document.createElement('h3');
        const taddress = document.createElement('p');
        const tphone = document.createElement('p');
        const temail = document.createElement('a');
        const timage = document.createElement('img');
        const imgContainer = document.createElement('div');
        const tservices = document.createElement('p');
        const thistory = document.createElement('p');
        const tordinance = document.createElement('a');
        const tsession = document.createElement('a');
        const tclosure = document.createElement('p');
        const tlike = document.createElement('button');

        timage.setAttribute('src', image);
        timage.setAttribute('alt', `Temple number ${i+1}`);
        timage.setAttribute('width', '425');
        timage.setAttribute('height', '319');
        timage.setAttribute('loading', 'lazy');
        imgContainer.appendChild(timage);
        imgContainer.setAttribute('class', 'tImgContainer');

        tname.textContent = name;
        taddress.textContent = address;
        tphone.textContent = telephone;
        temail.setAttribute('href', email);
        temail.setAttribute('target', '_blank');
        temail.textContent = `Send an email to the Temple`;
        tservices.innerHTML = serviceString;
        thistory.innerHTML = historyString;
        tordinance.setAttribute('href', ordinanceSchedule);
        tordinance.setAttribute('target', '_blank');
        tordinance.innerHTML = `Schedule Ordinances`;
        tsession.setAttribute('href', sessionSchedule);
        tsession.setAttribute('target', '_blank');
        tsession.textContent = `Schedule Sessions`;
        tclosure.innerHTML = `<strong>Temple Closure Dates:</strong><br><br>${closureString}`;
        tlike.setAttribute('type', 'button');
        tlike.setAttribute('id', `thumbs-up${i+1}`);
        tlike.setAttribute('onclick', `toggleThumbs${i+1}(this)`);
        if (thumbsUp == 'thumbs-up') {
            tlike.setAttribute('class', 'thumbs-up');
        }
        tlike.innerHTML = '&#x1F44D;'; //&#x1F44D; Thumbs Up &#x1F44E; Thumbs Down

        templeCard.appendChild(tlike);
        templeCard.appendChild(tname);
        templeCard.appendChild(imgContainer);
        templeCard.appendChild(taddress);
        templeCard.appendChild(tphone);
        templeCard.appendChild(temail);
        templeCard.appendChild(tservices);
        templeCard.appendChild(thistory);
        templeCard.appendChild(tsession);
        templeCard.appendChild(tclosure);
        templeCard.appendChild(tordinance);
    }
}

