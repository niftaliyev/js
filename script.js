document.addEventListener('contextmenu', function() {   
    
        let menu = document.querySelector('#contextMenu');
        let overlay = document.querySelector('#overlay');      
        menu.style.display = 'block';
        menu.style.top = event.y + 'px';
        menu.style.left = event.x + 'px'; 
        overlay.style.display = 'block';
        event.preventDefault(); 
});
let list = document.querySelector('#list');

document.addEventListener('click', function() {
    let menu = document.querySelector('#contextMenu');
    menu.style.display = 'none';
});

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');


// two.addEventListener('click',function(){
//     let lis = document.querySelectorAll('#list li');
//         for(var i=0; li=lis[i]; i++) {
//             li.parentNode.removeChild(li);
//         }
// })

three.addEventListener('click',function(){
        // let text = prompt('Enter your text');
        let item = document.createElement('li');
        item.innerHTML += '<i>❌</i> ' + event.x;
        list.append(item);
})
let turn = true;

list.addEventListener('click', function() {

        if(turn && event.target.tagName == 'LI'){
            event.target.classList.add('done','testStyle');   
            turn = false;
        }
        else if (turn == false && event.target.tagName == 'LI'){
            event.target.classList.remove('done');
            turn = true;
        }
        else if (event.target.tagName == 'I') {
            console.log('i'); 
            event.target.parentElement.remove();
        }


        
        // event.preventDefault();
    
});

document.querySelector('#overlay').addEventListener('click', function() {
    event.target.style.display = 'none';
    document.querySelector(opened).style.display = 'none';
 });