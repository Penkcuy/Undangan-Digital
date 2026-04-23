// Ambil nama dari URL
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");

document.getElementById("namaTamu").innerText =
  nama ? "Kepada: " + nama : "Tamu Undangan";

// buka undangan + play musik
function bukaUndangan() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("content").classList.remove("hidden");

  document.getElementById("musik").play();
}

// countdown
const targetDate = new Date("May 10, 2026 10:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const selisih = targetDate - now;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerText =
    hari + " hari lagi";
}, 1000);