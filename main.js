import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import "./styles/style.scss";

// navbar interaction

document.addEventListener("DOMContentLoaded", function () {
  const topHeader = document.querySelector(".top-header");
  const navbar = document.querySelector(".navbar");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const logo = document.querySelector(".navbar .navbar-brand img");
  const body = document.body;
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > 100) {
      topHeader.style.display = "none";
      navbar.classList.add("navbar-fixed", "navbar-small");
      navbarCollapse.style.top = "56px";
    } else {
      topHeader.style.display = "flex";
      navbar.classList.remove("navbar-fixed", "navbar-small");
      navbarCollapse.style.top = "106px";
    }

    lastScrollTop = scrollTop;
  });

  // Toggler functionality for mobile
  const navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", function () {
    body.classList.toggle("nav-open");
    navbarToggler
      .querySelector(".navbar-toggler-icon")
      .classList.toggle("open");
  });
});

// Slider Script is here

let swiperNews = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});

let swiperSiteLogo = new Swiper(".siteLogoSlider", {
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".custom-swiper-button-logo-next",
    prevEl: ".custom-swiper-button-logo-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1920: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

// Calender Code Here

const monthNames = [
  "Sausis",
  "Vasaris",
  "Kovas",
  "Balandis",
  "Gegužė",
  "Birželis",
  "Liepa",
  "Rugpjūtis",
  "Rugsėjis",
  "Spalis",
  "Lapkritis",
  "Gruodis",
];
const daysInWeek = ["P", "A", "T", "K", "P", "Š", "S"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

document.getElementById(
  "monthYear"
).innerText = `${monthNames[currentMonth]} ${currentYear}`;

document
  .getElementById("prev")
  .addEventListener("click", () => changeMonth(-1));
document.getElementById("next").addEventListener("click", () => changeMonth(1));

function changeMonth(delta) {
  currentMonth += delta;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  } else if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  document.getElementById(
    "monthYear"
  ).innerText = `${monthNames[currentMonth]} ${currentYear}`;
  generateCalendar(currentMonth, currentYear);
}

function generateCalendar(month, year) {
  const calendarDates = document.querySelector(".calendar-dates");
  calendarDates.innerHTML = "";
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = 32 - new Date(year, month, 32).getDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    calendarDates.appendChild(emptyDiv);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dateDiv = document.createElement("div");
    dateDiv.innerText = i;
    if (
      i === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      dateDiv.classList.add("today");
    }
    calendarDates.appendChild(dateDiv);
  }
}

generateCalendar(currentMonth, currentYear);
