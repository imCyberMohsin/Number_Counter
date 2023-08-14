//* Script For Increment-Decrement Counter  

const count_heading = document.querySelector('#count-heading');
const inc_btn = document.querySelector('#increment');
const dec_btn = document.querySelector('#decrement');

let count = 0;

inc_btn.addEventListener('click', () => {
    count++;
    count_heading.innerHTML = count;
    if (count === 0) {
        count_heading.style.color = 'white';
    }
    else if (count > 0) {
        count_heading.style.color = 'Green';
    }
})

dec_btn.addEventListener('click', () => {
    count--;
    count_heading.innerHTML = count;
    if (count === 0) {
        count_heading.style.color = 'white';
    }
    else if (count < 0) {
        count_heading.style.color = 'crimson';
    }
})