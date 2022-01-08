//const date = new Date();
//const d = date.toDateString();
//const time = date.toLocaleTimeString();
document.getElementById('updated').innerHTML = `Last Updated: ${document.lastModified}`;

const year = document.querySelector('#year');
const y = new Date().getFullYear();
year.textContent = `\xA9 ${y} | Adam Dutson | Utah`;