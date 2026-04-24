// 1. Inisialisasi Nama Tamu
const urlParams = new URLSearchParams(window.location.search);
document.getElementById("namaTamu").innerText = urlParams.get('to') || "Tamu Undangan";

// 2. Countdown Timer
const targetDate = new Date("May 10, 2026 08:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

    document.getElementById("days").innerText = Math.floor(gap / day);
    document.getElementById("hours").innerText = Math.floor((gap % day) / hour);
    document.getElementById("mins").innerText = Math.floor((gap % hour) / minute);
    document.getElementById("secs").innerText = Math.floor((gap % minute) / second);
}
setInterval(updateCountdown, 1000);

// 3. Logika Buka Undangan
const musik = document.getElementById("musik");
function openEnvelope() {
    document.getElementById("envelope").classList.add("open");
    document.getElementById("main").classList.remove("hidden-content");
    document.body.classList.remove("no-scroll");
    document.querySelector(".music-btn").classList.remove("hidden");
    
    musik.volume = 0;
    musik.play();
    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 0.4) { vol += 0.05; musik.volume = vol; } 
        else { clearInterval(fade); }
    }, 200);
}

// 4. Parallax Hero
window.addEventListener("scroll", () => {
    let scrolled = window.pageYOffset;
    const heroBg = document.querySelector(".hero-bg");
    if(heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `scale(${1.1 - scrolled/10000}) translateY(${scrolled * 0.3}px)`;
    }

    // Efek Muncul saat Scroll
    document.querySelectorAll(".show-on-scroll").forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) { sec.classList.add("show"); }
    });
});

// 5. Partikel Bunga Jatuh
function createFlower() {
    const container = document.querySelector(".flowers");
    if(!container) return;
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.width = (Math.random() * 8 + 10) + "px";
    flower.style.height = flower.style.width;
    flower.style.animationDuration = (Math.random() * 3 + 5) + "s";
    container.appendChild(flower);
    setTimeout(() => flower.remove(), 8000);
}
setInterval(createFlower, 600);

function toggleMusic() {
    const btn = document.querySelector(".music-btn");
    if (musik.paused) { musik.play(); btn.innerText = "🔊"; } 
    else { musik.pause(); btn.innerText = "🔇"; }
}
