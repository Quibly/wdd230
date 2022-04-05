let weddingBtn = document.querySelector('#weddingBtn');
let missionBtn = document.querySelector('#missionBtn');

weddingBtn.addEventListener('click', function() {toggleWeddingMission()});
missionBtn.addEventListener('click', function() {toggleWeddingMission()});

function toggleWeddingMission() {
    let weddingBtn = document.querySelector('#weddingBtn');
    let missionBtn = document.querySelector('#missionBtn');
    let reception = document.querySelector('#reception');
    let mission = document.querySelector('#mission');
    
    weddingBtn.classList.toggle("selected");
    missionBtn.classList.toggle("selected");
    reception.classList.toggle("unselected");
    mission.classList.toggle("unselected");
}