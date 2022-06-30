let Api = "https://api.github.com/users/ElzeroWebSchool/repos";
let themeToggler = document.querySelector(".theme__toggler");
let navToggler = document.querySelector(".nav__toggler");
function theme_Toggler() {
  themeToggler.addEventListener("click", function () {
    replacer(this.firstElementChild, "fa-moon", "fa-sun");
    document.body.classList.toggle("dark-theme");
  });
}

function replacer(el, class1, class2) {
  if (el.classList.contains(class1)) {
    el.classList.replace(class1, class2);
  } else {
    el.classList.replace(class2, class1);
  }
}
theme_Toggler();

//  navbar  toggler

function nav__toggler() {
  navToggler.addEventListener("click", function () {
    let i = this.firstElementChild;
    let nav = document.querySelector(".nav");
    //  play audio
    document.querySelector("audio.firstPlay").play();
    if (nav.classList.contains("show")) {
      document.querySelector("audio.secondPlay").play();
    }
    nav.classList.toggle("show");
    document.body.classList.toggle("spacer");
    replacer(i, "fa-bars", "fa-times");

    nav
      .querySelectorAll(".nav__link")
      .forEach((el) => (el.onclick = () => navToggler.click()));
  });
}
nav__toggler();
//    scroll indicator
function scrollTop() {
  function scrollIndicator() {
    let scrollUp = document.querySelector(".scroll__top");

    scrollUp.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    let pageHeight = document.documentElement.scrollHeight;
    let height = pageHeight - document.documentElement.clientHeight;
    let partialScroll = window.scrollY;

    let indicator = Math.ceil((partialScroll / height) * 100);

    scrollUp.style.background = `conic-gradient(var(--primary-clr) ${indicator}% ,  var(--body-clr)  ${indicator}% )`;

    if (partialScroll > 300) scrollUp.classList.add("show");
    else scrollUp.classList.remove("show");
  }
  window.addEventListener("scroll", scrollIndicator);
}

scrollTop();
//

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

function ActiveLinks() {
  const sections = document.querySelectorAll(".section[id]");

  function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      let link = document.querySelector(`.nav__link[href*="#${current.id}"]`);
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58;
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  window.addEventListener("scroll", scrollActive);
}
ActiveLinks();
// faq

function createAccordion() {
  const accordion__items = [
    ...document.querySelectorAll(" .accordion .accordion__item"),
  ];

  accordion__items.forEach((item) => {
    header = item.querySelector(".accordion__header");
    header.addEventListener("click", () => {
      opened = document.querySelector(".accordion__item.open");
      toggler(item);
      if (opened && opened !== item) {
        toggler(opened);
      }
    });
  });

  function toggler(item) {
    let accordion__body = item.querySelector(".accordion__body");
    if (accordion__body) {
      // if
      if (!item.classList.contains("open")) {
        item.classList.add("open");
        accordion__body.style.height = accordion__body.scrollHeight + "px";
      } else {
        item.classList.remove("open");
        accordion__body.style.height = "0px";
      }
    }
  }
}
createAccordion();
//  Carousel
function CreateCarousel() {
  let carousel = document.querySelector(".carousel");
  let slides = carousel.querySelectorAll(".carousel__slide");
  let slider = carousel.querySelector(".carousel__slider");
  let pagination = carousel.querySelector(".carousel__pagination");
  let next = carousel.querySelector(".next");
  let previous = carousel.querySelector(".previous");
  width = 100;
  let start = 1;
  let interval;

  previous.onclick = () => moveSlide("previous", previous);
  next.onclick = () => moveSlide("next", next);

  // Adding  first and last
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  //  ADD   id name for each clone
  firstClone.id = "firstClone";
  lastClone.id = "lastClone";
  // Add  clones to slider
  slider.append(firstClone);
  slider.prepend(lastClone);

  // Getting the slides length
  const getSlides = carousel.querySelectorAll(".carousel__slide");

  slider.style.transform = `translateX(${-start * width}%)`;

  // SlideShow Function
  const slideShow = () => (interval = setInterval(() => moveSlide(), 4000));

  // Running   function
  slideShow();

  // stop slidesShow on mouse hover  and rerun int on mouse out
  carousel.addEventListener("mouseenter", () => {
    clearInterval(interval);

    window.addEventListener("keyup", function (event) {
      if (event.key === "ArrowLeft") previous.click();
      else if (event.key === "ArrowRight") next.click();
    });
  });
  carousel.addEventListener("mouseleave", slideShow);

  //   create the smooth infinte loop
  slider.addEventListener("transitionend", () => {
    if (getSlides[start].id === firstClone.id) {
      start = 1;
      slider.style.transition = "none";
      slider.style.transform = `translateX(${-start * width}%)`;
    }
    if (getSlides[start].id === lastClone.id) {
      slider.style.transition = "none";
      start = getSlides.length - 2;
      slider.style.transform = `translateX(${-width * start}%`;
    }
  });
  // create the function that moves slides accordion to direction
  function moveSlide(dir = "next", el = next) {
    if (dir === "next") {
      if (start >= getSlides.length - 1) return;
      start++;
      slider.style.transition = "all .5s ease-in-out";
      slider.style.transform = `translateX(${-start * width}%)`;
      delay(el);
    } else if (dir === "previous") {
      if (start === 0) return;
      start--;
      slider.style.transition = "all .5s ease-in-out";
      slider.style.transform = `translateX(${-start * width}%)`;
      delay(el);
    }
    // disabling arrows for sometime after click an reenable them
    function delay(ele) {
      if (ele) {
        ele.classList.add("delay");
        setTimeout(() => ele.classList.remove("delay"), 400);
      }
    }
  }
}
CreateCarousel();
//=====================

function clickButtons() {
  let audio = document.querySelector(".audioTick");
  let buttons = document.querySelectorAll(".btn , button , .accordion__header");
  buttons.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.currentTarget !== document.querySelector(".nav__toggler")) {
        audio.play();
      }
    });
  });
}
clickButtons();

//------------------

function Ripple() {
  let buttons = document.querySelectorAll(".aoh");
  buttons.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      if (!el.contains(el.querySelector(".ink"))) {
        let li = document.createElement("span");
        li.classList.add("ink");
        el.prepend(li);
      }

      let ink = el.querySelector(".ink");
      ink.classList.remove("animate");

      if (!ink.style.height && !ink.style.width) {
        let d = Math.max(el.offsetHeight, el.offsetWidth);
        ink.style.width  = ink.style.height = d + "px";
      }
      // Finding X & Y  coordinates
      let x = e.pageX - el.offsetLeft - el.clientWidth / 2;
      let y = e.pageY - el.offsetTop - el.clientHeight / 2;

      ink.style.top = y + "px";
      ink.style.left = x + "px";
      ink.classList.add("animate");
    });
  });
}

Ripple();
