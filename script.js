document.addEventListener('contextmenu', function() {   
        let menu = document.querySelector('#contextMenu');
        menu.style.display = 'block';
        menu.style.top = event.y + 'px';
        menu.style.left = event.x + 'px';       
        event.preventDefault(); 
});
let list = document.querySelector('#list');

document.addEventListener('click', function(params) {
    let menu = document.querySelector('#contextMenu');
    menu.style.display = 'none';
});

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');

one.addEventListener('click',function(){
    console.log('one');
})

// two.addEventListener('click',function(){
//     let lis = document.querySelectorAll('#list li');
//         for(var i=0; li=lis[i]; i++) {
//             li.parentNode.removeChild(li);
//         }
// })

three.addEventListener('click',function(){
        let text = prompt('Enter your text');
        let item = document.createElement('li');
        item.innerHTML += '<i>❌</i> ' + text;
        list.append(item);
})
let turn = true;

document.querySelector('#list').addEventListener('click', function() {
    if (event.target.tagName == 'LI') {

        if(turn){
            event.target.classList.add('done');   
            turn = false;
        }
        else{
            event.target.classList.remove('done');
            turn = true;
        }
    }
    else if (event.target.tagName == 'I') {
        console.log('i'); 
        event.target.parentElement.remove();

        event.preventDefault();
    }
});