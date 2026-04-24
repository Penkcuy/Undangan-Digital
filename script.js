const params = new URLSearchParams(window.location.search);
document.getElementById("namaTamu").innerText =
  params.get("to") || "Tamu Undangan";

window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

const musik = document.getElementById("musik");

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
      if (v < 0.4) {
        v += 0.05;
        musik.volume = v;
      } else {
        clearInterval(fade);
      }
    }, 200);
  }, 500);
}

function toggleMusic() {
  if (musik.paused) musik.play();
  else musik.pause();
}
