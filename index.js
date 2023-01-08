const hTag = document.getElementsByTagName('h2');
for (const h1 of hTag) {
    h1.style.color = 'lightblue'
};


const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';


const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
};



function colorChange() {
    const subBtn = document.getElementById('hello');
    subBtn.style.color = 'tomato';
}


function removeBtn() {
    const btns = document.getElementsByClassName('btn-info');
    for (const btn of btns) {
        btn.remove();
    }
}



function hello() {
    const bgchange = document.getElementById('subscirbe');
    bgchange.style.backgroundColor = 'tomato';
}


function picChange(){
    const hey = document.getElementById('pic');
    hey.src = "images/bags/bag-2.png";
}

