burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')
navlist=document.querySelector('.navlist')
     burger.addEventListener('click' ,()=>{
         rightNav.classlist.toggle('v-class-resp')
         navlist.classlist.toggle('v-class-resp')
         navbar.classlist.toggle('h-nav-resp')
     })