var phone=document.getElementById('phone');

document.getElementById('phone').addEventListener('focus',function(e){
  document.getElementsByClassName('oculto')[0].style.display="block";
});

//evento scroll para cambiar estilo en header
var lastScrollTop = 0;
var navLink=document.getElementsByClassName('nav-link');
window.addEventListener("scroll", function(){
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop){
    document.getElementById('nav-background').classList.add("color-white");
    document.getElementById('login').style.border="1px solid #333447";
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].classList.add("color-blue");
    }
    document.getElementById('signup').style.display="block";
    document.getElementById('img-logo').src="assets/images/logo-pink.png";
  }
  else if(currentScroll<=3){
      document.getElementById('signup').style.display="none";
      document.getElementById("nav-background").classList.remove("color-white");
      document.getElementById('img-logo').src="assets/images/logo-white.png";
      document.getElementById('login').style.border="1px solid #fff";
      for (var i = 0; i < navLink.length; i++) {
        navLink[i].classList.remove("color-blue");
      }
 }
  lastScrollTop = currentScroll;
}, false);

//Validaciones formulario

var inputMsj=[
  {title:"Debe iniciar con 9 y tener 9 digitos"},
  {title:"Solo acepta letras, la primera debe ser mayuscula"},
  {title:"Debe tener el formato correcto"},
  {title:"Solo acepta letras, la primera debe ser mayuscula"}];

var input=document.getElementsByClassName('input-box');
inputMsj.forEach(function(e,i){
  input[i].addEventListener("blur",function(){
    input[i].setAttribute("title",e.title);
    input[i].classList.add("verify");
  });
  
});
