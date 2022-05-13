function changBackground(){
    let images = ['url("imgs/back1.jpg")', 'url("imgs/back2.jpg")','url("imgs/back3.jpg")'];
    let random = images[Math.floor(Math.random() * images.length)];
    let header = document.querySelector('header');
    header.style.backgroundImage = random;
}
setInterval(changBackground, 3000);

onload = function(){
    let head_text = document.getElementById("h_text");
    let text = "Back End Developer with Php Laravel";
    let index = 0;
    setInterval(function () {
      head_text.innerHTML += text.charAt(index);
      index++;
    }, 100)
}

 function  ScrollTop() {
  window.scrollTo(0, 0);
}

window.onscroll = function () {
  const top = document.getElementById('top');
  if(window.pageYOffset >= 1200){
    top.style= 'display:inline';
  } else{
    top.style= 'display:none';
  }   
}