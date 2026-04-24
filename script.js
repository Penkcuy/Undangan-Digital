/* GUEST NAME */
const params = new URLSearchParams(location.search);
document.getElementById("namaTamu").innerText =
  params.get("to") || "Tamu Undangan";

/* LOADER */
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

/* MUSIC */
const musik = document.getElementById("musik");

function toggleMusic() {
  musik.paused ? musik.play() : musik.pause();
}

/* OPEN ENVELOPE */
function openEnvelope() {
  document.getElementById("envelope").classList.add("open");
  setTimeout(() => {
    document.getElementById("main").classList.remove("hidden");
    document.body.classList.remove("no-scroll");
    document.querySelector(".music-btn").classList.remove("hidden");

    musik.volume = 0;
    musik.play();
    let v = 0;
    const fade = setInterval(() => {
      if (v < 0.4) { v += 0.05; musik.volume = v; }
      else clearInterval(fade);
    }, 200);
  }, 500);
}

/* SCROLL STAGGER */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach((el, i) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      setTimeout(() => el.classList.add("show"), i * 200);
    }
  });
});

/* RSVP TO WHATSAPP */
document.getElementById("rsvpForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("rsvpName").value;
  const status = document.getElementById("rsvpStatus").value;
  const text = `RSVP Undangan%0A%0ANama: ${name}%0AKehadiran: ${status}`;
  window.open(`https://wa.me/628XXXXXXXXX?text=${text}`, "_blank");
});

/* FLOWER PARTICLE */
const canvas = document.getElementById("flowerCanvas");
const ctx = canvas.getContext("2d");
let w, h, flowers;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function initFlowers() {
  flowers = Array.from({ length: 30 }, () => ({
    x: Math.random() * w,
