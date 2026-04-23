// 1. Setup Data
const params = new URLSearchParams(window.location.search);
const nama = params.get("to") || "Tamu Undangan";
document.getElementById("namaTamu").innerText = nama;

// 2. Loader Exit
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() => document.getElementById("loader").style.display = "none", 500);
    }, 1000);
};

// 3. Open Logic
const musik = document.getElementById("musik");
function openEnvelope() {
    document.getElementById("envelope").classList.add("open");
    document.getElementById("main").classList.remove("hidden-content");
    document.body.classList.remove("no-scroll");
    document.querySelector(".music-btn").classList.remove("hidden");
    
    // Play Musik Fade In
    musik.volume = 0;
    musik.play();
    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 0.4) { vol += 0.05; musik.volume = vol; } 
        else { clearInterval(fade); }
    }, 200);
}

// 4. Parallax & Scroll Reveal
window.addEventListener("scroll", () => {
    let scrolled = window.pageYOffset;
    const heroBg = document.querySelector(".hero-bg");
    
    // Smooth Zoom Effect
    if(heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `scale(${1.1 - scrolled/8000}) translateY(${scrolled * 0.2}px)`;
    }

    // Intersection Reveal
    document.querySelectorAll(".show-on-scroll").forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 150) { 
            sec.classList.add("show"); 
        }
    });
});

// 5. Flower Particles
function createFlower() {
    const container = document.querySelector(".flowers");
    if(!container) return;
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.width = (Math.random() * 8 + 8) + "px";
    flower.style.height = flower.style.width;
    flower.style.animationDuration = (Math.random() * 3 + 5) + "s";
    container.appendChild(flower);
    setTimeout(() => flower.remove(), 8000);
}
setInterval(createFlower, 700);

// 6. Tools
function toggleMusic() {
    const btn = document.querySelector(".music-btn");
    if (musik.paused) { musik.play(); btn.innerText = "🔊"; } 
    else { musik.pause(); btn.innerText = "🔇"; }
}

function copyText(t) {
    navigator.clipboard.writeText(t).then(() => alert("Nomor rekening berhasil disalin!"));
}
