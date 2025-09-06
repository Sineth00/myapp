function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

// Countdown timer
let totalSeconds = 5;
const countdownEl = document.getElementById("countdown");
const downloadSection = document.getElementById("downloadSection");

const timer = setInterval(() => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  countdownEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  countdownEl.style.opacity = "0.6";
  setTimeout(() => countdownEl.style.opacity = "1", 200);
  totalSeconds--;

  if (totalSeconds < 0) {
    clearInterval(timer);
    countdownEl.style.display = 'none';
    downloadSection.style.display = 'flex';
  }
}, 1000);

// Click control logic
let clickCount = 0;
const links = [
  "https://itoovoor.xyz/4/9115248",
  "https://itoovoor.xyz/4/9268618",
  "https://itoovoor.xyz/4/9268612",
  "https://itoovoor.xyz/4/9112795",
  "https://www.mediafire.com/file/kigghgaokv6e2oj/test.rar/file"
];
const remainingClicks = document.getElementById("remainingClicks");

function handleDownload() {
  if (clickCount < links.length) {
    const url = links[clickCount];
    if (clickCount === links.length - 1) {
      window.location.href = url;
    } else {
      window.open(url, '_blank');
    }
    clickCount++;
    const remaining = Math.max(0, 5 - clickCount);
    remainingClicks.textContent = `Remaining Clicks: ${remaining}`;
  }
}

// ✅ Lazy load logic
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll(".lazy-img");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute("data-src");
          img.onload = () => img.classList.add("loaded");
          img.removeAttribute("data-src");
          obs.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => observer.observe(img));
  } else {
    // fallback (no IntersectionObserver support)
    lazyImages.forEach(img => {
      img.src = img.getAttribute("data-src");
      img.onload = () => img.classList.add("loaded");
      img.removeAttribute("data-src");
    });
  }
});
