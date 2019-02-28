function openNav() {
  document.querySelector('.main-header').classList.add("main-header__animation");
  document.getElementById("overlay").style.height = "100%";
  document.querySelector('.main-header').style.height = "100vh";
}
  
  function closeNav() {
    document.querySelector('.main-header').classList.remove("main-header__animation");
    document.getElementById("overlay").style.height = "0";
    document.querySelector('.main-header').style.height = "80px";
}