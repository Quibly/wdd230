// For Date display at top of page
let now = new Date();
let date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
let dateBanner = document.querySelector('#dateBanner');
dateBanner.textContent = date;

// For display of last modification date in footer
document.querySelector("#footerCopy").textContent = `Copyright 2022 | Adam Dutson | WDD 230 | Last Modification: ${document.lastModified}`;

// For view toggle of navigation menu
let navBtn = document.querySelector('#navBtn');
let navList = document.querySelector('#navList');
navBtn.onclick = toggleMenu;

function toggleMenu() {
    navBtn.classList.toggle("open");
    navList.classList.toggle("open");
}
