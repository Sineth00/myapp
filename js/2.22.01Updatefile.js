function toggleSidebar() {
      document.getElementById("sidebar").classList.toggle("active");
    }

    // Countdown logic
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

    // Download link click control
    let clickCount = 0;
    const links = [
      "https://www.profitableratecpm.com/nx64xevz?key=ce89f208409555d709e6ea5bb9153b62",
      "https://www.profitableratecpm.com/frbz41v5p?key=a6c0ec51fc75e215edde00f3cd0ba6c8",
      "https://www.profitableratecpm.com/dx3bjtqak?key=4768749510c838e63b59b1d73a9910f4",
      "https://www.profitableratecpm.com/gb0xhbm7e?key=768fb8ce995b745df63d6d647282491f",
      "https://www.mediafire.com/file/oprksdl0ty1ndv1/OB50_Link_File.rar/file"
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

    // Image loading animation
    const img = document.getElementById("mainImage");
    const loader = document.getElementById("imageLoader");

    img.onload = () => {
      loader.style.display = 'none';
      img.classList.add('loaded');
    };