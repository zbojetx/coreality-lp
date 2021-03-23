window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  console.log(currentScrollPos)

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 20) {
    // I am using 'display' instead of 'top':
    document.getElementById("navbar-sticky").style.display = "flex";

  } else {
    document.getElementById("navbar-sticky").style.display = "none";
  }
}