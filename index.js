const radio = document.querySelectorAll('.radio');
const minus = document.querySelectorAll('.minus');
const plus = document.querySelectorAll('.plus');
const number = document.querySelectorAll('.counter');
const count = document.querySelectorAll('.count');

for (let el of radio) {
    if (el.checked) {
    }
}
for(let el of plus) {
    el.addEventListener('click', foo)
}
for(let el of minus) {
    el.addEventListener('click', poo)
}

function foo () {
    for(let el of number) {
        if(el.value < 20){
            el.value ++
        }
    }
}


function poo () {
    for(let el of number) {
        if(el.value > 1){
            el.value --
        }
    }
}