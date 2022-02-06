const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
datefield.innerHTML = `${fulldate}`;

document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("menuBtn").classList.toggle("open");
}
const x = document.getElementById('menuBtn');
x.onclick = toggleMenu;

document.querySelector("#copyright").textContent = `©${new Date().getFullYear()} Vernal Chamber`;

function toggleBanner() {
    document.getElementById("chamberbanner").classList.toggle("bannerClosed");
}

const y = document.getElementById('bannerBtn');
y.onclick = toggleBanner;

let day = now.getDay();

function bannerCheck() {
    switch (day) {
        case 1:
            break;
        case 2:
            break;
        default:
            toggleBanner();
            break;
    }
}

window.onload = bannerCheck;