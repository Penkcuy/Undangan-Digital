AOS.init();

// nama tamu
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");

document.getElementById("namaTamu").innerText =
  nama ? "Kepada: " + nama : "";

// start
function start(){
  const opening = document.getElementById("opening");

  opening.style.opacity = "0";
  opening.style.transition = "1s";

  setTimeout(()=>{
    opening.style.display="none";
  },1000);

  const musik = document.getElementById("musik");
  musik.volume = 0.3;
  musik.play();
}

// musik toggle
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
  const jam = Math.floor((d/(1000*60*60))%24);

  document.getElementById("countdown").innerText =
    hari + " hari " + jam + " jam";
},1000);
