let Api = "https://api.github.com/users/ElzeroWebSchool/repos";
let themeToggler = document.querySelector(".theme__toggler");
let navToggler = document.querySelector(".nav__toggler");

themeToggler.addEventListener("click", function () {
  replacer(this.firstElementChild, "fa-moon", "fa-sun");
  document.body.classList.toggle("dark-theme");
});

function replacer(el, class1, class2) {
  if (el.classList.contains(class1)) {
    el.classList.replace(class1, class2);
  } else {
    el.classList.replace(class2, class1);
  }
}

//  navbar  toggler

navToggler.addEventListener("click", function () {
  let i = this.firstElementChild;
  let nav = document.querySelector(".nav");
  nav.classList.toggle("show");
  document.body.classList.toggle("spacer");

  nav.querySelectorAll(".nav__link").forEach((el) => {
    el.onclick = function () {
      document.body.classList.remove("spacer");
      nav.classList.remove("show");
    };
  });
});

// activate links on scroll

function ActiveLinks() {
  let sections = document.querySelectorAll(".section[id");
  let pageTop = window.scrollY;
  sections.forEach((el) => {
    let sectionEnd = el.offsetTop + el.offsetHeight;

    let link = document.querySelector(`.nav__link[href="#${el.id}"]`);

    if (pageTop + 90 >= el.offsetTop && pageTop <= sectionEnd) {
      link.classList.add("active");

      //  remove active class from all links
      let active = document.querySelector(".nav__list .nav__link.active");
      if (active && active !== link) {
        active.classList.remove("active");
      }
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", ActiveLinks);
