const dots = document.querySelectorAll(".dot");
const sizes = document.querySelectorAll(".sizes__item");

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

dots.forEach(dot => dot.addEventListener('click', changeFocus))
sizes.forEach(item=> item.addEventListener('click',changeSize))