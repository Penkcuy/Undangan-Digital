// 1. Ambil Nama Tamu
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");
document.getElementById("namaTamu").innerText = nama ? nama : "Tamu Undangan";

// 2. Loader
window.onload = () => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => { document.getElementById("loader").style.display = "none"; }, 500);
};

// 3. Buka Undangan
const musik = document.getElementById("musik");
function openEnvelope() {
    document.getElementById("envelope").classList.add("open");
    document.getElementById("main").classList.remove("hidden-content");
    document.body.classList.remove("no-scroll");
    document.querySelector(".music-btn").classList.remove("hidden");
    
    // Play Musik
    musik.volume = 0;
    musik.play();
    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 0.3) { vol += 0.05; musik.volume = vol; } 
        else { clearInterval(fade); }
    }, 200);
}

// 4. Toggle Musik
function toggleMusic() {
    const btn = document.querySelector(".music-btn");
    if (musik.paused) { musik.play(); btn.innerText = "🔊"; } 
    else { musik.pause(); btn.innerText = "🔇"; }
}

// 5. Animasi Scroll & Parallax
window.addEventListener("scroll", () => {
    let scrolled = window.pageYOffset;
    const heroBg = document.querySelector(".hero-bg");
    
    if(heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `scale(${1.1 - scrolled/5000}) translateY(${scrolled * 0.3}px)`;
    }

    document.querySelectorAll(".show-on-scroll").forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) { sec.classList.add("show"); }
    });
});

// 6. Bunga
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.width = (Math.random() * 10 + 10) + "px";
    flower.style.height = flower.style.width;
    flower.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.querySelector(".flowers").appendChild(flower);
    setTimeout(() => flower.remove(), 7000);
}
setInterval(createFlower, 500);

function copyText(t) {
    navigator.clipboard.writeText(t).then(() => alert("Berhasil disalin!"));
}
