/* Sticky NavBar */
window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/** Scroll Arrow */
$(".arrow-scrool").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("body").offset().top,
    },
    1500
  );
});

/** FAQ **/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("open");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* Show and Hide Menu links */
$(".menu").click(function () {
  $(".menu-links").css("margin-right", "0px");
  $(".rong").css("display", "block");
});

$(".rong").click(function () {
  $(".menu-links").css("margin-right", "-250px");
  $(".rong").css("display", "none");
});

/** Show and Hide links  */
$(".icon1").click(function () {
  $(".link-sm1").toggleClass("hidden");
  $(".icon-right1").toggleClass("rotate");
  $(".li1").toggleClass("backgrlink");
});
$(".icon2").click(function () {
  $(".link-sm2").toggleClass("hidden");
  $(".icon-right2").toggleClass("rotate");
  $(".li2").toggleClass("backgrlink");
});

$(".icon3").click(function () {
  $(".link-sm3").toggleClass("hidden");
  $(".icon-right3").toggleClass("rotate");
  $(".li3").toggleClass("backgrlink");
});

$(".icon4").click(function () {
  $(".link-sm4").toggleClass("hidden");
  $(".icon-right4").toggleClass("rotate");
  $(".li4").toggleClass("backgrlink");
});
