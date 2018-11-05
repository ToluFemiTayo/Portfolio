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
  // console.log(e);
  $(".sidebar").toggleClass("show");
});

// form fill
var _form = document.getElementsByClassName("form__fill")[0];
var _inputs = Array.from(_form.getElementsByClassName("form__contol"));
var _error = 0;
var keyupHandler = function (e) {
  var _next = e.target.nextElementSibling;
  if (e.target.name === "name" ) {
   if (e.target.value.length < 6) {
    this.classList.add("is__invalid");
    _next.classList.remove("d__none");
   }
   else {
    this.classList.remove("is__invalid");
    _next.classList.add("d__none");
   }
  }
  else if (e.target.name === "email") {
   var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   var value = e.target.value;
   if (!regExp.test(String(value).toLowerCase())) {
    this.classList.add("is__invalid");
    _next.classList.remove("d__none");
   }
   else {
    this.classList.remove("is__invalid");
    _next.classList.add("d__none");
   }
  }
  else if (e.target.name === "message") {
   if (e.target.value.length < 10) {
    this.classList.add("is__invalid");
    _next.classList.remove("d__none");
   }
   else {
    this.classList.remove("is__invalid");
    _next.classList.add("d__none");   
   };
  }
  
 };
_inputs.forEach(function (eachInputs) {
     eachInputs.addEventListener("keyup", keyupHandler);
   });
 _form.addEventListener("submit")
e.preventDefault();

