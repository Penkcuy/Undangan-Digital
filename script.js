// 1. Ambil Nama Tamu dari URL
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");
document.getElementById("namaTamu").innerText = nama ? nama : "Tamu Undangan";

// 2. Loader
window.onload = () => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 500);
};

// 3. Buka Amplop & Jalankan Animasi
function openEnvelope() {
    const env = document.getElementById("envelope");
    env.classList.add("open");
    
    // Aktifkan musik
    playSmooth();

    setTimeout(() => {
        env.style.display = "none";
        document.getElementById("main").classList.remove("hidden");
        
        // Auto Scroll Halus ke bagian Hero sebagai tanda
        window.scrollBy({ top: 100, behavior: "smooth" });
    }, 1200);
}

// 4. Pengaturan Musik (Fade In)
const musik = document.getElementById("musik");
function playSmooth() {
    musik.volume = 0;
    musik.play();
    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 0.4) {
            vol += 0.05;
            musik.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 200);
}

function toggleMusic() {
    const btn = document.querySelector(".music-btn");
    if (musik.paused) {
        musik.play();
        btn.innerText = "🔊";
    } else {
        musik.pause();
        btn.innerText = "🔇";
    }
}

// 5. Countdown Pernikahan
const targetDate = new Date("May 10, 2026 09:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const gap = targetDate - now;

    const hari = Math.floor(gap / (1000 * 60 * 60 * 24));
    const jam = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    document.getElementById("countdown").innerText = `${hari} hari ${jam} jam lagi`;
}, 1000);

// 6. Animasi Muncul saat Scroll (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});

// 7. Efek Kelopak Bunga Berjatuhan
function createFlower() {
    const container = document.querySelector(".flowers");
    const flower = document.createElement("div");
    flower.classList.add("flower");

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.width = Math.random() * 15 + 10 + "px";
    flower.style.height = flower.style.width;
    flower.style.animationDuration = Math.random() * 3 + 4 + "s";
    flower.style.opacity = Math.random();

    container.appendChild(flower);
    setTimeout(() => { flower.remove(); }, 6000);
}
setInterval(createFlower, 400);

// 8. Salin Nomor Rekening
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Nomor rekening berhasil disalin!");
    });
}
