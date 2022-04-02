// For routing button clicks for reservations to the reservations page
let reservationsLink = document.querySelector('.reservationsLink');
reservationsLink.onclick = linkToReservations;

function linkToReservations() {
    window.location.href='https://quibly.github.io/wdd230/tis/html/reservations.html';
}