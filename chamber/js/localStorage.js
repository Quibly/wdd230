let todaysDate = new Date();
todaysDate = Date.now();
console.log(todaysDate);
let lastVisitDate = window.localStorage.getItem('lastVisit');
const visitDetails = document.querySelector('#visitDetails');
console.log(lastVisitDate);

if(lastVisitDate == null) {
    window.localStorage.setItem('lastVisit',todaysDate);
    visitDetails.textContent = `This is your first visit!`;
} else {
    let sinceLast = parseInt(todaysDate) - parseInt(lastVisitDate);
    sinceLast = Math.floor((sinceLast)/(1000*60*60*24));
    Window.localStorage.setItem('lastVisit', todaysDate);
    if(sinceLast < 1) {
        visitDetails.textContent = `This is the first day you've visited our site!`
    } else {
        visitDetails.textContent = `It's been ${sinceLast} days since your last visit!`;
    }
}