const dots = document.querySelectorAll(".dot");
const sizes = document.querySelectorAll(".sizes__item");
const buyButton = document.querySelector('#btn-shop');
const closeModal = document.querySelector('#closeModal');
const modal = document.querySelector(".modal");


function changeFocus(){
   dots.forEach(function(dot){
    dot.classList.remove('isActive');
   })
   this.classList.add('isActive');
}
function changeSize(){
   sizes.forEach(function(item){
    item.classList.remove('is-selected');
   })
   this.classList.add('is-selected');
}

function showModal(){
   modal.classList.add('isVisible');
}
function hiddenModal(e){
   
   modal.classList.remove('isVisible');
}


dots.forEach(dot => dot.addEventListener('click', changeFocus))
sizes.forEach(item=> item.addEventListener('click',changeSize))
buyButton.addEventListener('click',showModal)
closeModal.addEventListener('click',hiddenModal)