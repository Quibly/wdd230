let listBtn = document.querySelector('#listBtn');
let gridBtn = document.querySelector('#gridBtn')
let listGridId = document.querySelector('.cards');
let intViewportWidth = parseInt(visualViewport.width);

function checkSize() {
    intViewportWidth = parseInt(visualViewport.width);
    if ((intViewportWidth < 900) && (intViewportWidth > 550)) {
        listGridId.setAttribute('id', 'listView');
    } else if (intViewportWidth < 550) {
        listGridId.setAttribute('id', '');
    } else {
        listGridId.setAttribute('id', '');
    }
}

function toggleGrid() {
        listGridId.setAttribute('id', '');
}
function toggleList() {
        listGridId.setAttribute('id', 'listView');
}

checkSize();
gridBtn.addEventListener('click', function() {toggleGrid()});
listBtn.addEventListener('click', function() {toggleList()});
visualViewport.addEventListener('resize', function() {checkSize()});
