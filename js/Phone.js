burger=document.querySelector(".burger");
navbar=document.querySelector("#navbar");
navigation=document.querySelector("#navigation-menu");

burger.addEventListener('click',()=>{
    navbar.classList.toggle('nav-height');
    navigation.classList.toggle('nav-resp-menu');
})