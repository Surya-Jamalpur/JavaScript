'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openBtns = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for (let i = 0; i < openBtns.length; i++) {
    openBtns[i].addEventListener('click', openModal);
}


closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {
        console.log('escape was pressed..!')
        if (!modal.classList.contains('hidden')) {
            console.log('escape was pressed.. and the popup closed...')
            closeModal();
        }
    }
})
