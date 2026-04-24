const urlParams = new URLSearchParams(window.location.search);
document.getElementById("namaTamu").innerText = urlParams.get('to') || "Tamu Undangan";

window.onload = () => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => { document.getElementById("loader").style.display = "none"; }, 800);
};

const musik = document.getElementById("musik");
const video = document.getElementById("bgVideo");

function openEnvelope() {
    // 1. Jalankan Animasi Amplop
    document.getElementById("envelope").classList.add("open");
    
    // 2. Tampilkan Konten
    setTimeout(() => {
        document.getElementById("main").classList.remove("hidden-content");
        document.body.classList.remove("no-scroll");
        document.querySelector(".music-btn").classList.remove("hidden");
    }, 500);

    // 3. Play Video & Musik
    video.play();
    musik.volume = 0;
    musik.play();
    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 0.4) { vol += 0.05; musik.volume = vol; } 
        else { clearInterval(fade); }
    }, 200);
}

window.addEventListener("scroll", () => {
    document.querySelectorAll(".show-on-scroll").forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) { sec.classList.add("show"); }
    });
});

// Guest Book (Sama seperti sebelumnya)
const wishForm = document.getElementById('wishForm');
const wishContainer = document.getElementById('wishContainer');

wishForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('wishName').value;
    const msg = document.getElementById('wishMessage').value;
    if(name && msg) {
        const div = document.createElement('div');
        div.className = 'wish-item';
        div.innerHTML = `<strong style="color:#d4a373">${name}</strong><p style="font-size:13px">${msg}</p>`;
        wishContainer.prepend(div);
        wishForm.reset();
    }
});

function toggleMusic() {
    const btn = document.querySelector(".music-btn");
    if (musik.paused) { musik.play(); btn.innerText = "🔊"; } 
    else { musik.pause(); btn.innerText = "🔇"; }
}
