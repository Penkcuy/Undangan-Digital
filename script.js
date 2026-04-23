// 1. Data
const params = new URLSearchParams(window.location.search);
document.getElementById("namaTamu").innerText = params.get("to") || "Tamu Undangan";

// 2. Loader
window.onload = () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => { loader.style.display = "none"; }, 500);
};

// 3. Open Envelope
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

// 4. Parallax & Reveal
window.addEventListener("scroll", () => {
    let scrolled = window.pageYOffset;
    const heroBg = document.querySelector(".hero-bg");
    if(heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `scale(${1.1 - scrolled/8000}) translateY(${scrolled * 0.2}px)`;
    }

    document.querySelectorAll(".show-on-scroll").forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) { sec.classList.add("show"); }
    });
});

// 5. Flower Logic (FIXED)
function createFlower() {
    const container = document.querySelector(".flowers");
    if(!container) return;
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.width = (Math.random() * 10 + 10) + "px";
    flower.style.height = flower.style.width;
    flower.style.animationDuration = (Math.random() * 3 + 4) + "s";
    container.appendChild(flower);
    setTimeout(() => flower.remove(), 7000);
}
setInterval(createFlower, 450);

// 6. Guest Book Logic
const wishForm = document.getElementById('wishForm');
const wishContainer = document.getElementById('wishContainer');

document.addEventListener('DOMContentLoaded', () => {
    const saved = JSON.parse(localStorage.getItem('weddingWishes')) || [];
    saved.forEach(w => renderWish(w.name, w.message));
});

wishForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('wishName').value;
    const msg = document.getElementById('wishMessage').value;
    if(name && msg) {
        renderWish(name, msg);
        const wishes = JSON.parse(localStorage.getItem('weddingWishes')) || [];
        wishes.push({name, message: msg});
        localStorage.setItem('weddingWishes', JSON.stringify(wishes));
        wishForm.reset();
    }
});

function renderWish(n, m) {
    const div = document.createElement('div');
    div.className = 'wish-item';
    div.innerHTML = `<strong>${n}</strong><p>${m}</p>`;
    wishContainer.prepend(div);
}

function toggleMusic() {
    const btn = document.querySelector(".music-btn");
    if (musik.paused) { musik.play(); btn.innerText = "🔊"; } 
    else { musik.pause(); btn.innerText = "🔇"; }
}

function copyText(t) {
    navigator.clipboard.writeText(t).then(() => alert("Berhasil disalin!"));
}
