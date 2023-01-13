//menu start

const navbarHeader = document.getElementById("navbar-header");
const dropDownContent = document.getElementsByClassName("dropdown-content");
const dropDownMenuItem = document.getElementsByClassName("dropdown-menu-item");
window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    navbarHeader.style.backgroundColor = "";
    navbarHeader.style.transition = "all 0.3s";
    for (i = 0; i < dropDownContent.length; i++) {
      dropDownContent[i].style.backgroundColor = "rgba(35, 46, 26, 0.7)";
    }
    for (i = 0; i < dropDownMenuItem.length; i++) {
      dropDownMenuItem[i].style.color = "var(--mainWhite)";
    }
  } else {
    navbarHeader.style.backgroundColor = "transparent";
    navbarHeader.style.transition = "all 0.3s";
    for (i = 0; i < dropDownContent.length; i++) {
      dropDownContent[i].style.backgroundColor = "var(--mainWhite)";
    }
    for (i = 0; i < dropDownMenuItem.length; i++) {
      dropDownMenuItem[i].style.color = "#5e6175";
    }
  }
});

//hamburger menu

const MENU = document.querySelector(".nav-menu_list");
const icon = document.querySelector(".hamburger-menu");
const closeIcon = document.querySelector(".close-nav");
icon.addEventListener("click", () => (MENU.style.right = "0"));
closeIcon.addEventListener("click", () => (MENU.style.right = "-70%"));

//accordion navbar

const NAV_MENU_ITEM = document.querySelectorAll(".nav-menu_item");
const MENU_ITEM = document.querySelectorAll(".dropdown-menu-item");
const MENU_LIST = document.querySelector(".nav-menu_list");

for(let i = 0;i<NAV_MENU_ITEM.length;i++){
  NAV_MENU_ITEM[i].addEventListener("click", () => {
  let menuItem = NAV_MENU_ITEM[i];
  let icon = menuItem.lastElementChild;
  menuItem.firstElementChild.classList.toggle("active-menu");
  icon.classList.toggle("icon-rotate");
  var panel = menuItem.parentElement.lastElementChild;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});
};

//accordion section

const accordionContainer = document.querySelector(".accordion-container");
  accordionContainer.addEventListener('click',(event)=>{
    var button = event.target;
    button.classList.toggle("section-accordion_active");
    button.style.borderBottom = 'none';
    var panel = button.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      button.style.borderBottom = '1px solid var(--subsidiaryGray);';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });

  //AOS run

  AOS.init();
