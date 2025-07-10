const Profilebtn = document.getElementById("profile-btn");   // hover-div
const mainprofile = document.getElementById("main-profile");  // navbar-btn

const menu = document.getElementById("menu-btn");  //btn which clicked then div is flex
const verticalmenu = document.getElementById("vertical-menu"); //the dive which hidden

const searchbar = document.getElementById("search-box");
const searchbtn = document.getElementById("search-btn");

const buynow = document.getElementById("buy-now");


// nav-list click
menu.addEventListener("click", (e) => {
  e.stopPropagation();
  verticalmenu.style.display = "flex";

  verticalmenu.addEventListener("click", (e) => {
    e.stopPropagation();
  })

  document.addEventListener("click", (e) => {
    verticalmenu.style.display = "none";
  })
});

//profile clicks
Profilebtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mainprofile.style.display = "flex";

  mainprofile.addEventListener("click", (e) => {
    e.stopPropagation();
  })

  document.addEventListener("click", (e) => {
    mainprofile.style.display = "none";
  })
});

// search clicks
searchbtn.addEventListener("click", (e) => {
  e.stopPropagation();
  searchbar.style.display = "flex";

  searchbar.addEventListener("click", (e) => {
    e.stopPropagation();
  })

  document.addEventListener("click", (e) => {
    searchbar.style.display = "none";
  })
});

//cart to order-info
buynow.addEventListener("click", () => {
  window.location.href = "/order-info.html";
});