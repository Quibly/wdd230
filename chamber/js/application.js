const datehidden = document.querySelector("#dateHidden");

function dateTime() {
    const dateTimeValue = new Date($.now());
    datehidden.setAttribute('value', dateTimeValue);
    
}

const applicationBtn = document.querySelector('#applicationBtn');
applicationBtn.addEventListener('click', function() {dateTime()});