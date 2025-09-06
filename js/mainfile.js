// Sidebar toggle
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
  "https://www.mediafire.com/file/kigghgaokv6e2oj/%25E0%25B6%2594%25E0%25B6%25B5_%25E0%25B6%259A%25E0%25B6%25B1%25E0%25B7%258A%25E0%25B6%25B1%25E0%25B7%258F_OB50_New_2.22.01_Update_Sensitivity_100%2525_Working_%25F0%259F%2598%25B1.rar/file"
];
const remainingClicks = document.getElementById("remainingClicks");

function handleDownload() {
  if (clickCount < links.length) {
    const url = links[clickCount];
    if (clickCount === 4) {
      window.location.href = url;
    } else {
      window.open(url, '_blank');
    }
    clickCount++;
    const remaining = Math.max(0, 5 - clickCount);
    remainingClicks.textContent = `Remaining Clicks: ${remaining}`;
  }
}

// Lazy-load images
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll(".lazy-img");
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
});
