const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("menuBtn").classList.toggle("open");
}
const x = document.getElementById('menuBtn');
x.onclick = toggleMenu;

document.querySelector("#copyright").textContent = `©${new Date().getFullYear()} Vernal Chamber`;