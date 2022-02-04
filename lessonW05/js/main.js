const bookAndChapter= document.querySelector('#favchap');
const buildButton = document.querySelector('#buttonInput');
const list = document.querySelector(".list");


buildButton.addEventListener('click', () => {
    if (bookAndChapter.value !== '') {

        let liElement = document.createElement('li');
        let liButton = document.createElement('button')
        let liContent = document.createTextNode(bookAndChapter.value);
        let buttonContent = document.createTextNode('❌');
        liElement.appendChild(liContent);
        liButton.appendChild(buttonContent);
        liButton.setAttribute('onclick', 'return this.parentNode.remove();');
        liButton.addEventListener('click', () => {return bookAndChapter.focus()});
        liElement.appendChild(liButton);
        list.appendChild(liElement);
        bookAndChapter.value = '';
        bookAndChapter.focus();
    }
});


