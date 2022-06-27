
import { getResponse,getOne } from './test.js';

document.addEventListener('contextmenu', function () {

    let menu = document.querySelector('#contextMenu');
    let overlay = document.querySelector('#overlay');
    menu.style.display = 'block';
    overlay.style.display = 'block';
    if (event.y > $(document).height() - 100 && $(window).height() > $(document).height()-100) {

        menu.style.top = 0 + 'px';
        menu.style.left = 0 + 'px';

    }
    else{
        menu.style.top = event.y + 'px';
        menu.style.left = event.x + 'px';
    }

    event.preventDefault();
});

let list = document.querySelector('#list');

document.addEventListener('click', function () {
    let menu = document.querySelector('#contextMenu');
    menu.style.display = 'none';
});

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');

one.addEventListener('click', function () {
    getResponse();

});

two.addEventListener('click',function(){
    list.innerHTML = '';
})

three.addEventListener('click', function () {
    // let text = prompt('Enter your text');
    let item = document.createElement('li');
    item.innerHTML += '<i>❌</i> ' + event.x;
    list.append(item);
})
let turn = true;

list.addEventListener('click', function () {

    if (turn && event.target.tagName == 'LI') {
        event.target.classList.add('done', 'testStyle');
        turn = false;
    }
    else if (turn == false && event.target.tagName == 'LI') {
        event.target.classList.remove('done');
        turn = true;
    }
    else if (event.target.tagName == 'I') {
        console.log('i');
        event.target.parentElement.remove();
    }



    // event.preventDefault();

});

document.querySelector('#overlay').addEventListener('click', function () {
    event.target.style.display = 'none';
});




$(window).scroll(function () {

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {

        getOne();
    }
});