function toggleSidebar(){ document.getElementById("sidebar").classList.toggle("active"); }

// Countdown timer
const countdownEl = document.getElementById("countdown");
const downloadSection = document.getElementById("downloadSection");
let totalSeconds = 0;

const timer = setInterval(()=>{
  const minutes = Math.floor(totalSeconds/60);
  const seconds = totalSeconds % 60;
  countdownEl.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
  countdownEl.style.opacity="0.6";
  setTimeout(()=> countdownEl.style.opacity="1",200);
  totalSeconds--;
  if(totalSeconds<0){
    clearInterval(timer);
    countdownEl.style.display='none';
    downloadSection.style.display='flex';
  }
},1000);

// Download click logic
let clickCount=0;
const links=[
  "https://itoovoor.xyz/4/9115248",
  "https://itoovoor.xyz/4/9268618",
  "https://itoovoor.xyz/4/9268612",
  "https://itoovoor.xyz/4/9112795",
  "page03.html"
];
const remainingClicks=document.getElementById("remainingClicks");
function handleDownload(){
  if(clickCount<links.length){
    const url=links[clickCount];
    if(clickCount===4) window.location.href=url;
    else window.open(url,'_blank');
    clickCount++;
    remainingClicks.textContent=`Remaining Clicks: ${Math.max(0,5-clickCount)}`;
  }
}

// Fade-in main image
const img=document.getElementById("mainImage");
img.onload=()=> img.classList.add('loaded');