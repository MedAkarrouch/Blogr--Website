"use strict";
const hero = document.querySelector(".hero");
const btn = document.getElementById("nav-btn");
const items = document.querySelectorAll(".item");
const itemsLink = document.querySelectorAll(".item-link");
const dropdown = document.getElementById("dropdown");
const links = document.querySelectorAll("a");
// Show Nav
btn.addEventListener("click", function () {
  hero.classList.toggle("show-nav");
  hero.classList.contains("sticky") &&
    hero.classList.toggle("sticky-translateNav");
  hero.classList.remove("hide-nav");
});
// Get Back to default
const x = window.matchMedia("(max-width: 950px)");
function myFunction(x) {
  if (!x.matches) {
    for (const i of itemsLink) {
      console.log(i);
      i.classList.remove("show-dropdown");
    }
    hero.classList.remove("show-nav");
  } else {
    // get the drop down menu to default
  }
}
myFunction(x);
x.addListener(myFunction);
// Show Dropdown Menu
itemsLink.forEach((item) => {
  // console.log(itemsLink);
  item.addEventListener("click", function (e) {
    for (const i of itemsLink)
      i !== e.currentTarget && i.classList.remove("show-dropdown");
    e.currentTarget.classList.toggle("show-dropdown");
  });
});
// Links
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const obs = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      hero.classList.add("sticky");
      hero.classList.add("hide-nav");
      hero.classList.remove("show-nav");
    } else {
      hero.classList.remove("sticky");
      hero.classList.remove("hide-nav");
      // hero.classList.add("hide-nav");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-15px 0px 0px 0px",
  }
);
obs.observe(hero);
