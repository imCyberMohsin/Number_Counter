//* Counter Script  

const container = document.querySelector('#container');
const headH2 = document.querySelector('#heading');
const count_heading = document.querySelector('#count-heading');
const inc_btn = document.querySelector('#increment');
const dec_btn = document.querySelector('#decrement');
const reset_btn = document.querySelector('#reset');

let count = 0;

// Increment Button
inc_btn.addEventListener('click', () => {
    count++;
    count_heading.innerHTML = count;
    if (count === 0) {
        headH2.style.color = 'white';
        count_heading.style.color = 'white';
        container.style.boxShadow = `2px 2px 2px 2px white`;
    }
    else if (count > 0) {
        headH2.style.color = 'Green';
        count_heading.style.color = 'Green';
        container.style.boxShadow = `2px 2px 2px 2px green`;
    }
})

// Decrement Button
dec_btn.addEventListener('click', () => {
    count--;
    count_heading.innerHTML = count;
    if (count === 0) {
        headH2.style.color = 'white';
        count_heading.style.color = 'white';
        container.style.boxShadow = `2px 2px 2px 2px white`;
    }
    else if (count < 0) {
        headH2.style.color = 'crimson';
        count_heading.style.color = 'crimson';
        container.style.boxShadow = `2px 2px 2px 2px crimson`;
    }
})

// Reset Button
reset_btn.addEventListener('click', () => {
    count = 0
    count_heading.innerHTML = count;
    if (count === 0) {
        headH2.style.color = 'white';
        count_heading.style.color = 'white';
        container.style.boxShadow = `2px 2px 2px 2px white`;
    }
})