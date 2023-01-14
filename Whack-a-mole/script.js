
let items=document.querySelectorAll('.item');

for (const item of items) {
    item.addEventListener('click', szinezokapcsolo)
}

function szinezokapcsolo(e){
    let ezadiv = e.target;
    if(ezadiv.classList.contains('highlight'))
    {
        ezadiv.classList.toggle('highlight');
        start();
    }
   /* else
    {
        ezadiv.classList.toggle('bad');

        start();
    }*/
}

function start(){
    let negyzet=items[Math.floor(1+36*Math.random())];
    negyzet.classList.toggle('highlight');
    
}
