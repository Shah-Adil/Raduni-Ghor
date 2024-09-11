const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.style = "display: none; ";
});

$("#menu-bar").click(() => {
  $(".nav").toggleClass("active");
  $("#menu-bar").toggleClass("fa-xmark");
})


// 

$(".shop-page-food-left").click(function(e) {
  let box = this.parentElement.querySelector(".shop-page-single");
  box.classList.add("active");
  let close =  box.querySelector(".page-menu-close");
    close.addEventListener("click" , () => {
      box.classList.remove("active");
    })

    document.querySelector(".shop-page-single.active::after").addEventListener("click" ,  () => {
      box.classList.remove("active");
    })
})

// 


$(".menu-bar").click(() => {
  $(".side-menu").toggleClass("active")
})

$(".side-black ").click(() => {
  $(".side-menu").removeClass("active");
})

