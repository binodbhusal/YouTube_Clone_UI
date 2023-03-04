const openMenu=document.querySelector('#show-menu');
const sideBar=document.querySelector('.side-bar');
openMenu.addEventListener('click',function(){
    sideBar.classList.toggle('sidebar-show');
})