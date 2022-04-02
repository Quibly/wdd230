function toggleThumbs1() {
    tc1 = document.querySelector('#thumbs-up1');
    tc1.classList.toggle("thumbs-up");
    if (tc1.classList == 'thumbs-up') {
        localStorage.setItem('thumbsUp1', 'thumbs-up');
    } else {
        localStorage.removeItem('thumbsUp1', '');
    }
}

function toggleThumbs2() {
    tc1 = document.querySelector('#thumbs-up2');
    tc1.classList.toggle("thumbs-up");
    if (tc1.classList == 'thumbs-up') {
        localStorage.setItem('thumbsUp2', 'thumbs-up');
    } else {
        localStorage.removeItem('thumbsUp2', '');
    }
}

function toggleThumbs3() {
    tc3 = document.querySelector('#thumbs-up3');
    tc3.classList.toggle("thumbs-up");
    if (tc3.classList == 'thumbs-up') {
        localStorage.setItem('thumbsUp3', 'thumbs-up');
    } else {
        localStorage.removeItem('thumbsUp3', '');
    }
}

function toggleThumbs4() {
    tc4 = document.querySelector('#thumbs-up4');
    tc4.classList.toggle("thumbs-up");
    if (tc4.classList == 'thumbs-up') {
        localStorage.setItem('thumbsUp4', 'thumbs-up');
    } else {
        localStorage.removeItem('thumbsUp4', '');
    }
}


