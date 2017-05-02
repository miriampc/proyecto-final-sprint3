var phone=document.getElementById('phone');

document.getElementById('phone').addEventListener('focus',function(e){
  document.getElementsByClassName('input-box')[0].style.display="block";
});
