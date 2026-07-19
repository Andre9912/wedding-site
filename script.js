const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");

let playing = false;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    musicBtn.innerHTML = "🔊";
  } else {
    music.pause();
    musicBtn.innerHTML = "🎵";
  }

  playing = !playing;
});
const dressBtn = document.getElementById("dressBtn");
const dressGallery = document.getElementById("dressGallery");

dressBtn.addEventListener("click", () => {
  dressGallery.classList.toggle("open");

  dressBtn.textContent = dressGallery.classList.contains("open")
    ? "Скрыть примеры"
    : "Посмотреть примеры образов";
});
document
  .getElementById("wedding-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const attendance = document.getElementById("attendance").value;
    const drink = document.getElementById("drink").value;
    const allergy = document.getElementById("allergy").value;
    const comment = document.getElementById("comment").value;

    fetch("https://wedding-dev-7xx1.onrender.com/send", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        attendance,
        drink,
        allergy,
        comment,
      }),
    })
      .then(() => {
        alert("Спасибо! Ваш ответ отправлен ❤️");
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка ❌");
      });
  });
const weddingDate = new Date("2026-10-10T00:00:00").getTime();

setInterval(function () {
  const now = new Date().getTime();

  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
const elements = document.querySelectorAll(".fade");

function showOnScroll() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
const petalsContainer = document.querySelector(".petals");

function createPetal() {
  const petal = document.createElement("div");

  petal.classList.add("petal");

  petal.innerHTML = "🌸";

  petal.style.left = Math.random() * 100 + "vw";

  petal.style.animationDuration = 5 + Math.random() * 5 + "s";

  petal.style.opacity = Math.random();

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 800);
