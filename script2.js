let elem = document.getElementById('test');

let togglers = document.querySelectorAll('[data-toggle="modal"]');
for (const btn of togglers) {
    btn.addEventListener('click', function() {
        let id = event.target.dataset.target;
        console.log(id);
        if (id != undefined) {
            let modal = document.querySelector(id);
            modal.style.display = 'none';

            document.querySelector('#test').style.color = 'red';
        }
    });
}

let counter = 0;
let intervalId = setInterval(() => {
counter+=5;
elem.style.top = counter + 100 +'px';
elem.style.left = counter + 'px';
elem.style.fontSize = counter + 'px';
elem.style.color = "rgb("+ counter +", 102, 102)"; 
    elem.innerText = counter;


    

    if (counter > 100) {
        clearInterval(intervalId);
        return;  
    }
}, 1000);




