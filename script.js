AOS.init();

// Nama tamu
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");

document.getElementById("namaTamu").innerText =
  nama ? "Kepada: " + nama : "Tamu Undangan";

// buka undangan
function bukaUndangan() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("content").classList.remove("hidden");

  const musik = document.getElementById("musik");
  musik.volume = 0.3;
  musik.play();
}

// toggle musik
function toggleMusic() {
  const musik = document.getElementById("musik");

  if (musik.paused) {
    musik.play();
  } else {
    musik.pause();
  }
}

// countdown detail
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
