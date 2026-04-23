AOS.init();

const params = new URLSearchParams(window.location.search);
const nama = params.get("to");

document.getElementById("namaTamu").innerText =
  nama ? "Kepada: " + nama : "Tamu Undangan";

function bukaUndangan() {
  const cover = document.getElementById("cover");

  cover.style.transition = "1s";
  cover.style.opacity = "0";

  setTimeout(() => {
    cover.style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  }, 1000);

  const musik = document.getElementById("musik");
  musik.volume = 0.3;
  musik.play();

  document.querySelector(".music-btn").innerText = "🔊";
}

function toggleMusic() {
  const musik = document.getElementById("musik");
  const btn = document.querySelector(".music-btn");

  if (musik.paused) {
    musik.play();
    btn.innerText = "🔊";
  } else {
    musik.pause();
    btn.innerText = "🔇";
  }
}

const target = new Date("May 10, 2026 10:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const selisih = target - now;

  const hari = Math.floor(selisih / (1000*60*60*24));
  const jam = Math.floor((selisih / (1000*60*60)) % 24);
  const menit = Math.floor((selisih / (1000*60)) % 60);

  document.getElementById("countdown").innerText =
    `${hari} hari ${jam} jam ${menit} menit`;
}, 1000);
