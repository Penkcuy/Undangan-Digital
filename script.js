AOS.init();

// nama tamu
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");

document.getElementById("namaTamu").innerText =
  nama ? "Kepada: " + nama : "";

// buka undangan
function start(){
  document.getElementById("opening").style.display="none";

  const musik = document.getElementById("musik");
  musik.volume = 0.3;
  musik.play();
}

// toggle musik
function toggleMusic(){
  const musik = document.getElementById("musik");
  const btn = document.querySelector(".music-btn");

  if(musik.paused){
    musik.play();
    btn.innerText="🔊";
  } else {
    musik.pause();
    btn.innerText="🔇";
  }
}

// countdown
const target = new Date("May 10, 2026").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const d = target - now;

  const hari = Math.floor(d/(1000*60*60*24));

  document.getElementById("countdown").innerText = hari + " hari";
},1000);
