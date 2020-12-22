'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //selects all the classes with this name
console.log(btnsOpenModal);
const openModal = function(){
    console.log('Button clicked');
    modal.classList.remove('hidden'); //hidden class hides the modal therefore when show modal is clicked it is removed
    overlay.classList.remove('hidden');   
    }
for(let i=0;i<btnsOpenModal.length;i++)
btnsOpenModal[i].addEventListener('click', openModal);
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


btnCloseModal.addEventListener('click', closeModal); //we do not use closeModal() because it will be called as soon as the javascript code gets executed we want it to function only when the button is clicked)
overlay.addEventListener('click', closeModal);
//clicking the escape key to closemodal

document.addEventListener('keydown', function(e)
{
    if(e.key==='Escape' && !modal.classList.contains('hidden'))
    {
        
        
            closeModal();
        
    }
});

