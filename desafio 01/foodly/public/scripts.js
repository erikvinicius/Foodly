const route = document.location.pathname;
const links = document.querySelectorAll('.links a');
const cards = document.querySelectorAll('.card');
const closeModal = document.querySelector('.close-modal a');
const modalOverlay = document.querySelector('.modal-overlay');

for (let link of links) {
    if(link.getAttribute("href") == route){
        link.style.fontWeight = 'bold';
    }
}

for (let card of cards) {
    card.addEventListener('click', ()=> {
        modalOverlay.classList.add('active');
    });
}

closeModal.addEventListener('click', ()=> {
    modalOverlay.classList.remove('active');
});