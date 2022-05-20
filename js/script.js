let loginform =document.querySelector('.header .login-form');
let navbar =document.querySelector('.header  .navbar');
document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
}
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginform.classList.remove('active');
}

(document).ready(function(){
    $('h2').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('h2').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
    });
 });
 


