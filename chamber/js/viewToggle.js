let listBtn = document.querySelector('#listBtn');
let gridBtn = document.querySelector('#gridBtn')
let listGridId = document.querySelector('.cards');
let intViewportWidth = parseInt(visualViewport.width);
console.log(intViewportWidth);

function checkSize() {
    intViewportWidth = parseInt(visualViewport.width);
    if ((intViewportWidth < 900) && (intViewportWidth > 550)) {
        listGridId.setAttribute('id', 'listView');
        console.log('step 1');
    } else if (intViewportWidth < 550) {
        listGridId.setAttribute('id', '');
        console.log('step 2');
    } else {
        listGridId.setAttribute('id', '');
        console.log('step 3');
    }
}

function toggleGrid() {
        listGridId.setAttribute('id', '');
        console.log(gridBtn.value);
}
function toggleList() {
        listGridId.setAttribute('id', 'listView');
        console.log(listBtn.value);
}

checkSize();
gridBtn.addEventListener('click', function() {toggleGrid()});
listBtn.addEventListener('click', function() {toggleList()});
visualViewport.addEventListener('resize', function() {checkSize()});
