let button = document.getElementById('btn');
let navLinks = document.getElementById('nav-links');
let navText = document.getElementById('nav-text');
let toggle = true;

button.addEventListener('click', showNav)

function showNav() {
    if(toggle) {
        button.classList.add('cross');
        navLinks.classList.add('show');
        navText.classList.add('show');
        toggle = false;
    } else {
        button.classList.remove('cross');
        navLinks.classList.remove('show');
        navText.classList.remove('show');
        toggle = true;
    }
}


class typeWriter {
    constructor(txtElement, words) {
        this.txtElement = txtElement;
        this.words = words;
        this.index = 0;
        this.current = 0;
        this.text = "";
        this.type();
        this.isDeleting = false;
        this.state = 1;
    }
}

typeWriter.prototype.type = function() {

    let timing = 800/this.state;

    if (this.isDeleting) {
        this.text = this.text.substring(0, this.current-1);
        this.current--;
        this.state = 6;
        if(this.current === 0) this.isDeleting = false;
    } else {
        this.text = this.words[this.index].substring(0, this.current+1);
        this.current++;
        this.state = 1;
        if(this.current === this.words[this.index].length) {
            this.isDeleting = true;
            if (this.index < this.words.length) this.index++;
            if (this.index == this.words.length) this.index = 0;
        }
    }
    
    console.log(this.text)

    this.txtElement.innerHTML = `<span class="inner-spanTxt">${this.text}<span>`;

    setTimeout(() => {
        this.type();
    },timing)

}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const spanText = document.querySelector('.txtSpan');
    const spanWords = JSON.parse(spanText.getAttribute('dataWords'));

    new typeWriter(spanText, spanWords);
}





// let guns = ['AWSG452', 'magnom76', 'silverThung'];
// let index = 0;
// let word = "";
// let isTrue = false;
// let current = 0;

// function typer() {

// if (!isTrue) {
//     word = guns[index].substring(0, current+1);
//     current ++;
//     if(current === guns[index].length) isTrue = true;
// } else {
//     word = word.substring(0, current-1);
//     current--
//     if(current === 0) {
//          isTrue = false; 
//          if (index < guns.length) {
//              index++
//          }
//          if (index == guns.length) {
//              index = 0
//          }
//         }
// }

// console.log(word)

// setTimeout(() => {
//     typer()
// },500)

// }




