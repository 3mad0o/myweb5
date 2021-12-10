window.addEventListener("load" , function(){
    const loader =document.querySelector('.loader');  
    loader.className +=" hidden";
});


var tooglebutton =document.getElementById('responbut'),
    navbar =document.getElementById('navbar');
tooglebutton.onclick = function () {
    'use strict';
    if(navbar.classList == 'navbar'){
        navbar.classList.add('active');
        navbar.classList.remove('navbar');
    }else{
        navbar.classList.add('navbar');
        navbar.classList.remove('active');
    }
    };
    
 /*var mybutton = document.getElementById('but');
window.onscroll =function () {
    'use strict';
    if(window.scrollY < 500){
        mybutton.classList.remove('but');
        
    }else{
        mybutton.classList.add('but');
        
    }
};
mybutton.onclick = function () {
    'use strict'
    window.scrollTo(0, 0);
};*/

