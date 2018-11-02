window.onscroll = function() {myFunction()};    
var header = document.getElementById("header__wrap");
var sticky = header.offsetTop;
function myFunction() {
 if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};


$(".btn").on("click", function (e) {
  console.log(e);
  $(".sidebar").toggleClass("show");
});

