// 1. Ambil Nama Tamu
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");
document.getElementById("namaTamu").innerText = nama ? nama : "Tamu Undangan";

// 2. Loader
window.onload = () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => { loader.style.display = "none"; }, 500);
};

// 3. Logika Buka Amplop
const musik = document.getElementById("musik");
const body = document.body;

function openEnvelope() {
    document.getElementById("envelope").classList.add("open");
    
    // Aktifkan scroll pada konten utama setelah amplop terbuka
    setTimeout(() => {
        document.getElementById("main").classList.remove("hidden");
        body.classList.remove("no-scroll");
        document.querySelector(".music-btn").classList.remove("hidden-btn");
    }, 1200);

    // Play Musik
    playSmooth();
}

// 4. Pengaturan Musik
function playSmooth() {
    musik.volume = 0;
    musik.play().then(() => {
        let vol = 0;
        const fade = setInterval(() => {
            if (vol < 0.3) { vol += 0.05; musik.volume = vol; } 
            else { clearInterval(fade); }
        }, 150);
    }).catch(() => console.log("User interaction needed"));
}

function toggleMusic() {
    const btn = document.querySelector(".music-btn");
    if (musik.paused) { musik.play(); btn.innerText = "🔊"; } 
    else { musik.pause(); btn.innerText = "🔇"; }
}

// 5. Countdown
const targetDate = new Date("May 10, 2026 09:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const gap = targetDate - now;
    if (gap > 0) {
        const hari = Math.floor(gap / (1000 * 60 * 60 * 24));
        const jam = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const menit = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("countdown").innerText = `${hari} Hari : ${jam} Jam : ${menit} Menit`;
    }
}, 1000);

// 6. Logika Animasi Scroll & Parallax (Feel Cinematic)
const sections = document.querySelectorAll(".show-on-scroll");
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
    let scrolled = window.pageYOffset;

    // A. Efek Parallax Zoom pada Hero (Meniru Video 1)
    if (heroBg && scrolled < window.innerHeight) {
        // Semakin di-scroll bawah, bg semakin zoom dan blur hilang
        heroBg.style.transform = `scale(${1.1 - scrolled / 5000}) translateY(${scrolled * 0.2}px)`;
        heroBg.style.filter = `blur(${2 - scrolled / 200}px)`;
    }

    // B. Trigger Animasi Muncul Section
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 150) {
            sec.classList.add("show");
        }
    });
});

// 7. Bunga Berjatuhan
function createFlower() {
    const container = document.querySelector(".flowers");
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.width = (Math.random() * 12 + 8) + "px";
    flower.style.height = flower.style.width;
    flower.style.animationDuration = (Math.random() * 3 + 5) + "s";
    container.appendChild(flower);
    setTimeout(() => flower.remove(), 8000);
}
setInterval(createFlower, 500);

// 8. Salin No Rekening
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => { alert("Rekening berhasil disalin!"); });
}
