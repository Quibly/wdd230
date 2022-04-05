let imgNumber = 1;

let left = document.querySelector('.left');
let right = document.querySelector('.right');

function scrollImg(change) {

    document.querySelector(`#image${imgNumber}`).classList.toggle("selectedImg");
    switch(imgNumber + change) {
        case 0:
            imgNumber = 3;
            document.querySelector(`#image${imgNumber}`).classList.toggle("selectedImg");
            break;
        case 1:
            imgNumber = 1;
            document.querySelector(`#image${imgNumber}`).classList.toggle("selectedImg");
            break;
        case 2:
            imgNumber = 2;
            document.querySelector(`#image${imgNumber}`).classList.toggle("selectedImg");
            break;
        case 3:
            imgNumber = 3;
            document.querySelector(`#image${imgNumber}`).classList.toggle("selectedImg");
            break;
        case 4:
            imgNumber = 1;
            document.querySelector(`#image${imgNumber}`).classList.toggle("selectedImg");
    }
}

