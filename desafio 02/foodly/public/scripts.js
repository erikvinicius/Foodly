const route = document.location.pathname;
const links = document.querySelectorAll('.links a');
const cards = document.querySelectorAll('.card');
const showItems = document.querySelectorAll('.showItems');

for (let link of links) {
    if(link.getAttribute("href") == route){
        link.style.fontWeight = 'bold';
    }
}

for (let card of cards) {
    card.addEventListener('click', ()=> {
        window.location.href = `/recipes/${card.id}`;
    });
}


function showIngredients() {
    const ingredientsConteiner = document.querySelector('.ingredients');
    const list = ingredientsConteiner.querySelector('ul');
    const mostrarLink = ingredientsConteiner.querySelector('a');
    if( list.classList.contains('itemDisabled')){
        list.classList.remove('itemDisabled');
        mostrarLink.innerHTML = 'ESCONDER';
    }
    else {
        list.classList.add('itemDisabled');
        mostrarLink.innerHTML = 'MOSTRAR';
    }
}


function showPreparationMode() {
    const preparationModeConteiner = document.querySelector('.preparation-mode');
    const item = preparationModeConteiner.querySelector('#recipe-preparation');
    const showBtn = preparationModeConteiner.querySelector('a');
    if( item.classList.contains('itemDisabled')){
        item.classList.remove('itemDisabled');
        showBtn.innerHTML = 'ESCONDER';
    }
    else {
        item.classList.add('itemDisabled');
        showBtn.innerHTML = 'MOSTRAR';
    }
}

function showAdditionalInformations() {
    const ingredientsConteiner = document.querySelector('.additional-informations');
    const item = ingredientsConteiner.querySelector('#information');
    const showBtn = ingredientsConteiner.querySelector('a');
    if( item.classList.contains('itemDisabled')){
        item.classList.remove('itemDisabled');
        showBtn.innerHTML = 'ESCONDER';
    }
    else {
        item.classList.add('itemDisabled');
        showBtn.innerHTML = 'MOSTRAR';
    }
}