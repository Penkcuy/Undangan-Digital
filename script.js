// nama tamu
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");

document.getElementById("namaTamu").innerText =
  nama ? nama : "Tamu Undangan";

// loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// buka amplop
function openEnvelope(){
  const env = document.getElementById("envelope");
  env.classList.add("open");

  setTimeout(()=>{
    env.style.display="none";
    document.getElementById("main").classList.remove("hidden");
  },1000);

  playSmooth();
}

// musik fade in
const musik = document.getElementById("musik");

function playSmooth(){
  musik.volume = 0;
  musik.play();

  let vol = 0;
  const fade = setInterval(()=>{
    if(vol < 0.3){
      vol += 0.01;
      musik.volume = vol;
    } else {
      clearInterval(fade);
    }
  },100);
}

// toggle musik
function toggleMusic(){
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
    hari + " hari " + jam + " jam lagi";
},1000);

// scroll animasi
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{
  sections.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
});

// bunga jatuh
const container = document.querySelector(".flowers");

setInterval(()=>{
  const flower = document.createElement("div");
  flower.classList.add("flower");

  flower.style.left = Math.random()*100 + "vw";
  flower.style.animationDuration = (5 + Math.random()*5) + "s";

  container.appendChild(flower);

  setTimeout(()=>flower.remove(),10000);
},500);

// auto scroll cinematic
setTimeout(()=>{
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
},4000);
