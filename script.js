// buka amplop
function openEnvelope(){
  const env = document.getElementById("envelope");
  env.classList.add("open");

  setTimeout(()=>{
    env.style.display="none";
    document.getElementById("main").classList.remove("hidden");
  },1000);

  const musik = document.getElementById("musik");
  musik.volume = 0.3;
  musik.play();
}

// musik
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
  document.getElementById("countdown").innerText = hari + " hari lagi";
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
  flower.style.animationDuration = (3 + Math.random()*5) + "s";

  container.appendChild(flower);

  setTimeout(()=>flower.remove(),8000);
},300);
