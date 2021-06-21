const dots = document.querySelectorAll(".dot");
const sizes = document.querySelectorAll(".sizes__item");
const buyButton = document.querySelector('#btn-shop');
const closeModal = document.querySelector('#closeModal');
const modal = document.querySelector(".modal");
const thumbnails = document.querySelectorAll('.thumbnail-image');


function changeFocus(){
   dots.forEach(dot => dot.classList.remove('isActive'))
   this.classList.add('isActive');
}

function changeSize(){
   sizes.forEach(size =>size.classList.remove('is-selected'))
   this.classList.add('is-selected');
}

function showModal(){
   modal.classList.add('isVisible');
}

function hiddenModal(){
   modal.classList.remove('isVisible');
}

function changeThumbnail(){
   thumbnails.forEach(thumbnail => thumbnail.classList.remove('isActiveThumbnail'))
   this.classList.toggle('isActiveThumbnail');
   
   
}

dots.forEach(dot => dot.addEventListener('click', changeFocus))
sizes.forEach(item=> item.addEventListener('click',changeSize))
buyButton.addEventListener('click',showModal)
closeModal.addEventListener('click',hiddenModal)
thumbnails.forEach(thumbnail => thumbnail.addEventListener('click',changeThumbnail))