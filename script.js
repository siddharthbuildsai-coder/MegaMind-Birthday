// ============================================================
// ✏️ PERSONAL CONTENT — EDIT EVERYTHING IN THIS BLOCK
// ============================================================
const CONFIG = {
  name: "Tanisha",
  myName: "Siddharth",
  birthdayDate: "2026-04-22",
  voiceNoteUnlockDate: "2026-04-22T00:00:00",
  mainHeading: "To the one who feels like home in every season",
  heroSubLine: "every sea feels calmer with you",
  letterContent: "My love, every ordinary day becomes extraordinary when you are in it.",
  belgiumStamp: "BELGIUM ✈️",
  footerLine: "Made with all my love, for your beautiful heart.",
  surpriseMessage: "Open this when your heart feels quiet.",
  voiceNoteOpeningLine: "[OPENING LINE OF VOICE NOTE]",
  voiceNotePostscript: "[P.S. NOTE]",
  onePieceArcName: "ARC NAME —  The ButterFingers Arc",
  onePieceEpisode1: "The day you stole my heart",
  onePieceEpisode2: "First time we spent a day together ",
  onePieceEpisode3: "The day I knew I was falling for you",
  vivreFinalLine: "I'd sail the Grand Line...For U",
  wantedPosterNote: "Best Treasure Ever",
  birthdayFactsClosingLine: "[April 22 modal closing line about her]"
};

const PHOTO_CAPTIONS = {
  1: "caption for photo 1",
  2: "caption for photo 2",
  3: "caption for photo 3",
  4: "caption for photo 4",
  6: "caption for photo 6",
  7: "caption for photo 7",
  8: "caption for photo 8",
  9: "caption for photo 9",
  10: "caption for photo 10",
  11: "caption for photo 11",
  12: "caption for photo 12",
  13: "caption for photo 13",
  14: "caption for photo 14",
  15: "caption for photo 15",
  16: "piggyback forever",
  17: "caption for photo 17",
  18: "caption for photo 18",
  19: "caption for photo 19",
  20: "caption for photo 20",
  21: "kisses 💋",
  22: "caption for photo 22",
  23: "caption for photo 23",
  24: "caption for photo 24",
  25: "caption for photo 25",
  26: "caption for photo 26"
};

const PHOTO_CATEGORIES = {
  us: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 14, 17, 19, 20, 22, 23, 25, 26],
  piggyback: [16],
  photobooth: [21],
  her: [6, 13, 15],
  goofy: [2, 4, 12],
  europe: [14, 22, 23]
};
// ============================================================

const PHOTO_CONFIG = {
  folder: "./photos",
  // Explicitly list all photos with their exact file names that exist
  singles: [
    { n: 1, file: "photo1.webp" },
    { n: 2, file: "photo2.webp" },
    { n: 3, file: "photo3.webp" },
    { n: 4, file: "photo4.webp" },
    { n: 6, file: "photo6.webp" },
    { n: 7, file: "photo7.webp" },
    { n: 8, file: "photo8.webp" }, // webp is smaller
    { n: 9, file: "photo9.webp" },
    { n: 10, file: "photo10.jpg" },
    { n: 11, file: "photo11.webp" },
    { n: 12, file: "photo12.jpg" },
    { n: 13, file: "photo13.jpg" },
    { n: 14, file: "photo14.jpg" },
    { n: 15, file: "photo15.webp" },
    { n: 16, file: "photo16.jpg" },
    { n: 17, file: "photo17.jpg" },
    { n: 18, file: "photo18.jpg" },
    { n: 19, file: "photo19.webp" },
    { n: 20, file: "photo20.jpg" },
    { n: 22, file: "photo22.webp" },
    { n: 23, file: "photo23.jpg" },
    { n: 24, file: "photo24.jpg" },
    { n: 26, file: "photo26.jpg" }
  ],
  collage21: ["photo21 (1).jpg", "photo21 (2).jpg", "photo21 (3).jpg", "photo21 (4).jpg"]
};

const state = {
  galleryItems: [],
  currentIndex: 0,
  typedBuffer: "",
  confettiStarted: false,
  factIndex: 0,
  musicMode: "coffee",
  espressoClicks: 0
};

const pawCursor = document.getElementById("pawCursor");
const floatingPaws = document.getElementById("floatingPaws");
const masonry = document.getElementById("masonry");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCollage = document.getElementById("lightboxCollage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxMute = document.getElementById("lightboxMute");
const lightboxCounter = document.getElementById("lightboxCounter");
const chorusAudio = document.getElementById("chorusAudio");
const kpopAudio = document.getElementById("kpopAudio");
const megamindBtn = document.getElementById("megamindBtn");
const openSurpriseBtn = document.getElementById("openSurpriseBtn");
const surpriseContent = document.getElementById("surpriseContent");
const typeNote = document.getElementById("typeNote");
const factsModalOverlay = document.getElementById("factsModalOverlay");
const factsOpenBtn = document.getElementById("factsOpenBtn");
const factsCloseBtn = document.getElementById("factsCloseBtn");
const factsTabs = document.querySelectorAll(".facts-tab");
const factsPanes = document.querySelectorAll(".facts-pane");
const factCarousel = document.getElementById("factCarousel");
const factDots = document.getElementById("factDots");
const backTop = document.getElementById("backToTop");
const pageLoader = document.getElementById("pageLoader");
const musicModeToggle = document.getElementById("musicModeToggle");
const voiceLockStage = document.getElementById("voiceLockStage");
const voiceUnlockedStage = document.getElementById("voiceUnlockedStage");
const voiceUnlockCountdown = document.getElementById("voiceUnlockCountdown");
const padlock = document.getElementById("padlock");

function initCursor() {
  if (!pawCursor) return;
  document.addEventListener("mousemove", (e) => {
    pawCursor.style.left = `${e.clientX}px`;
    pawCursor.style.top = `${e.clientY}px`;
  }, { passive: true });
}

function hydrateConfigText() {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (key && key in CONFIG) el.textContent = CONFIG[key];
  });
  const letterTarget = document.getElementById("letterContent");
  if (letterTarget) letterTarget.textContent = CONFIG.letterContent;
}

function initRevealAnimations() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const cards = entry.target.querySelectorAll(".reveal-stagger");
      cards.forEach((card, i) => {
        setTimeout(() => card.classList.add("show"), i * 110);
      });
      staggerObserver.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  const loveSection = document.getElementById("love");
  if (loveSection) staggerObserver.observe(loveSection);
}

function getColumnCount() {
  const width = window.innerWidth;
  if (width < 620) return 1;
  if (width < 980) return 2;
  if (width < 1320) return 3;
  return 4;
}

let masonryDebounceTimer = null;

function layoutMasonry() {
  console.log("layoutMasonry called");
  if (!state.galleryItems.length || !masonry) {
    console.log("layoutMasonry: no items or no masonry");
    return;
  }
  
  // Clear any pending layout
  if (masonryDebounceTimer) clearTimeout(masonryDebounceTimer);
  
  const width = masonry.clientWidth;
  console.log(`Masonry width: ${width}`);
  const columns = width < 760 ? 1 : width < 1100 ? 2 : 3;
  const gap = 16; // Slightly larger gap
  const colWidth = (width - gap * (columns - 1)) / columns;
  const heights = new Array(columns).fill(0);
  
  state.galleryItems.forEach((item, idx) => {
    const ratio = (item.naturalHeight || 4) / (item.naturalWidth || 3);
    const h = Math.max(150, Math.round(colWidth * ratio)); // Taller minimum
    const colIdx = heights.indexOf(Math.min(...heights));
    
    const x = colIdx * (colWidth + gap);
    const y = heights[colIdx];
    
    item.element.style.width = `${colWidth}px`;
    item.element.style.height = `${h}px`;
    item.element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    item.element.style.position = 'absolute';
    item.element.style.left = '0';
    item.element.style.top = '0';
    
    heights[colIdx] += h + gap;
    
    if (idx === 0) console.log(`First item: width=${colWidth}, height=${h}, x=${x}, y=${y}`);
  });
  
  masonry.style.height = `${Math.max(...heights)}px`;
  console.log(`Masonry layout complete: ${columns} columns, height=${Math.max(...heights)}`);
}

// Debounced version for image onload events
function debouncedLayoutMasonry() {
  if (masonryDebounceTimer) clearTimeout(masonryDebounceTimer);
  masonryDebounceTimer = setTimeout(layoutMasonry, 100);
}

function openLightbox(index) {
  const item = state.galleryItems[index];
  if (!item) return;

  state.currentIndex = index;
  if (item.type === "collage") {
    lightboxImage.classList.add("hidden");
    lightboxCollage.classList.remove("hidden");
    const collageImgs = lightboxCollage.querySelectorAll("img");
    item.sources.forEach((src, idx) => {
      if (collageImgs[idx]) collageImgs[idx].src = src;
    });
    lightboxCaption.textContent = PHOTO_CAPTIONS[item.photoNumber] || "Our four-photo frame.";
  } else {
    lightboxCollage.classList.add("hidden");
    lightboxImage.classList.remove("hidden");
    lightboxImage.src = item.src;
    lightboxCaption.textContent = PHOTO_CAPTIONS[item.photoNumber] || "Add your caption in script.js";
  }
  if (lightboxCounter) lightboxCounter.textContent = `${state.currentIndex + 1} / ${state.galleryItems.length}`;
  lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  if (chorusAudio) {
    chorusAudio.currentTime = 0;
    chorusAudio.play().catch(() => {
      // Browser may block if user gesture is not recognized.
    });
  }
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  document.body.style.overflow = "";
  if (chorusAudio) {
    chorusAudio.pause();
    chorusAudio.currentTime = 0;
  }
}

function navigateLightbox(direction) {
  if (!state.galleryItems.length) return;
  state.currentIndex = (state.currentIndex + direction + state.galleryItems.length) % state.galleryItems.length;
  openLightbox(state.currentIndex);
}

function buildGalleryItem(photoNumber, src, imgElement) {
  const item = document.createElement("button");
  item.type = "button";
  item.className = "masonry-item";
  item.setAttribute("aria-label", `Open photo ${photoNumber}`);

  const img = imgElement.cloneNode();
  img.loading = "lazy";
  img.alt = `Memory photo ${photoNumber}`;

  const overlay = document.createElement("div");
  overlay.className = "masonry-overlay";
  overlay.textContent = "🐾";
  const ribbon = document.createElement("span");
  ribbon.className = "photo-ribbon";
  ribbon.textContent = getCategoryLabel(photoNumber);

  item.appendChild(img);
  item.appendChild(ribbon);
  item.appendChild(overlay);
  masonry.appendChild(item);

  return { element: item, img };
}

function buildCollageItem(photoNumber, sources, previewImages) {
  const item = document.createElement("button");
  item.type = "button";
  item.className = "masonry-item collage-item polaroid-collage";
  item.setAttribute("aria-label", `Open collage photo ${photoNumber}`);

  const collage = document.createElement("div");
  collage.className = "masonry-collage";
  previewImages.forEach((imgEl) => {
    const img = imgEl.cloneNode();
    img.loading = "lazy";
    img.alt = `Collage memory ${photoNumber}`;
    collage.appendChild(img);
  });

  const overlay = document.createElement("div");
  overlay.className = "masonry-overlay";
  overlay.textContent = "🐾";
  const ribbon = document.createElement("span");
  ribbon.className = "photo-ribbon";
  ribbon.textContent = "photobooth";

  item.appendChild(collage);
  item.appendChild(ribbon);
  item.appendChild(overlay);
  masonry.appendChild(item);

  return {
    photoNumber,
    type: "collage",
    sources,
    naturalWidth: 1200,
    naturalHeight: 860,
    element: item
  };
}

function getCategoryLabel(photoNumber) {
  if (PHOTO_CATEGORIES.photobooth.includes(photoNumber)) return "photobooth";
  if (PHOTO_CATEGORIES.piggyback.includes(photoNumber)) return "piggyback";
  if (PHOTO_CATEGORIES.europe.includes(photoNumber)) return "europe";
  if (PHOTO_CATEGORIES.goofy.includes(photoNumber)) return "goofy";
  if (PHOTO_CATEGORIES.her.includes(photoNumber)) return "her";
  return "us";
}

async function loadGallery() {
  if (!masonry) return;
  
  // Clear and prepare
  state.galleryItems = [];
  masonry.innerHTML = '';
  
  // Create all gallery items
  const entries = PHOTO_CONFIG.singles.map((p) => ({
    photoNumber: p.n,
    type: "single",
    src: `${PHOTO_CONFIG.folder}/${p.file}`
  })).sort((a, b) => a.photoNumber - b.photoNumber);
  
  entries.forEach((entry, index) => {
    const photoNum = entry.photoNumber;
    const src = entry.src;
    
    const item = document.createElement("button");
    item.type = "button";
    item.className = "masonry-item";
    item.setAttribute("aria-label", `Open photo ${photoNum}`);
    
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Memory photo ${photoNum}`;
    img.loading = "lazy";
    
    const ribbon = document.createElement("span");
    ribbon.className = "photo-ribbon";
    ribbon.textContent = getCategoryLabel(photoNum);
    
    const overlay = document.createElement("div");
    overlay.className = "masonry-overlay";
    overlay.textContent = "🐾";
    
    item.appendChild(img);
    item.appendChild(ribbon);
    item.appendChild(overlay);
    masonry.appendChild(item);
    
    // Click handlers
    if (photoNum === 16) {
      item.classList.add("piggyback-photo");
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        triggerPiggybackAnimation(item);
      });
    } else {
      item.addEventListener("click", () => openLightbox(index));
    }
    
    state.galleryItems.push({
      photoNumber: photoNum,
      type: "single",
      src: src,
      element: item
    });
  });
  
  // Add collage
  const collageSources = PHOTO_CONFIG.collage21.map((f) => `${PHOTO_CONFIG.folder}/${f}`);
  
  const collageItem = document.createElement("button");
  collageItem.type = "button";
  collageItem.className = "masonry-item collage-item";
  collageItem.setAttribute("aria-label", "Open collage photo 21");
  
  const collage = document.createElement("div");
  collage.className = "masonry-collage";
  
  collageSources.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    collage.appendChild(img);
  });
  
  const ribbon = document.createElement("span");
  ribbon.className = "photo-ribbon";
  ribbon.textContent = "photobooth";
  
  const overlay = document.createElement("div");
  overlay.className = "masonry-overlay";
  overlay.textContent = "🐾";
  
  collageItem.appendChild(collage);
  collageItem.appendChild(ribbon);
  collageItem.appendChild(overlay);
  masonry.appendChild(collageItem);
  
  const collageIndex = state.galleryItems.length;
  collageItem.addEventListener("click", () => openLightbox(collageIndex));
  
  state.galleryItems.push({
    photoNumber: 21,
    type: "collage",
    sources: collageSources,
    element: collageItem
  });
  
  initMemoriesMusic();
}

function initLightboxControls() {
  if (!lightbox || !lightboxClose || !lightboxPrev || !lightboxNext) return;
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
  lightboxNext.addEventListener("click", () => navigateLightbox(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
  if (lightboxMute) {
    lightboxMute.addEventListener("click", () => {
      if (!chorusAudio) return;
      chorusAudio.muted = !chorusAudio.muted;
      lightboxMute.textContent = chorusAudio.muted ? "🔇" : "🔊";
    });
  }

  let touchStartX = 0;
  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 40) return;
    if (dx > 0) navigateLightbox(-1);
    else navigateLightbox(1);
  }, { passive: true });
}

function spawnFloatingPaw() {
  if (!floatingPaws) return;
  const paw = document.createElement("span");
  paw.className = "ghost-paw";
  paw.textContent = "🐾";
  paw.style.left = `${Math.random() * 96 + 2}%`;
  paw.style.top = `${Math.random() * 90 + 5}%`;
  floatingPaws.appendChild(paw);
  setTimeout(() => paw.remove(), 3000);
}

function initFloatingPaws() {
  setInterval(spawnFloatingPaw, 2600);
}

function updateCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  const isBirthdayToday = now.getMonth() === 3 && now.getDate() === 22;

  const countdownView = document.getElementById("countdownView");
  const celebrationView = document.getElementById("celebrationView");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!countdownView || !celebrationView || !daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  if (isBirthdayToday) {
    countdownView.classList.add("hidden");
    celebrationView.classList.remove("hidden");
    if (!state.confettiStarted) {
      initConfetti();
      state.confettiStarted = true;
    }
    return;
  }

  celebrationView.classList.add("hidden");
  countdownView.classList.remove("hidden");

  const target = new Date(CONFIG.birthdayDate + "T00:00:00");
  if (target < now) target.setFullYear(year + 1);

  const diff = target.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

function initVoiceLock() {
  if (!voiceLockStage || !voiceUnlockedStage) return;
  const unlockDate = new Date(CONFIG.voiceNoteUnlockDate);

  function tick() {
    const now = new Date();
    if (now >= unlockDate) {
      voiceLockStage.classList.add("hidden");
      voiceUnlockedStage.classList.remove("hidden");
      if (padlock) padlock.classList.add("unlocking");
      return;
    }
    const diff = unlockDate.getTime() - now.getTime();
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    if (voiceUnlockCountdown) voiceUnlockCountdown.textContent = `${d}d ${h}h ${m}m ${s}s`;
  }
  tick();
  setInterval(tick, 1000);
}

function initConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const colors = ["#F5F0E8", "#C9A99A", "#FFFFFF", "#EDE8DC", "#D8CDBF"];
  const pieces = [];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }

  function makePiece() {
    return {
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * -canvas.clientHeight,
      s: Math.random() * 6 + 4,
      v: Math.random() * 2 + 1.2,
      w: Math.random() * 0.06 + 0.02,
      r: Math.random() * Math.PI,
      c: colors[Math.floor(Math.random() * colors.length)]
    };
  }

  for (let i = 0; i < 110; i += 1) pieces.push(makePiece());

  function draw() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    pieces.forEach((p) => {
      p.y += p.v;
      p.r += p.w;
      if (p.y > canvas.clientHeight + 12) {
        p.y = -20;
        p.x = Math.random() * canvas.clientWidth;
      }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.8);
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize, { passive: true });
}

function initMegamind() {
  if (!megamindBtn) return;
  megamindBtn.addEventListener("click", () => {
    megamindBtn.classList.remove("pop");
    // Restart animation.
    // eslint-disable-next-line no-unused-expressions
    megamindBtn.offsetWidth;
    megamindBtn.classList.add("pop");

    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(420, ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(210, ac.currentTime + 0.08);
    gain.gain.setValueAtTime(0.08, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start();
    osc.stop(ac.currentTime + 0.11);
  });
}

function initKonami() {
  const code = ["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"];
  const buffer = [];
  document.addEventListener("keydown", (e) => {
    buffer.push(e.key.toLowerCase());
    if (buffer.length > code.length) buffer.shift();
    if (code.every((k, i) => buffer[i] === k)) {
      document.body.classList.toggle("belgium-mode");
    }
  });
}

function cupcakeRain() {
  const layer = document.createElement("div");
  layer.className = "cupcake-rain";
  document.body.appendChild(layer);

  const duration = 3000;
  const interval = setInterval(() => {
    const drop = document.createElement("span");
    drop.className = "cupcake-drop";
    drop.textContent = "🧁";
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.fontSize = `${Math.random() * 12 + 14}px`;
    drop.style.animationDuration = `${Math.random() * 1.4 + 1.6}s`;
    layer.appendChild(drop);
    setTimeout(() => drop.remove(), 3200);
  }, 75);

  setTimeout(() => {
    clearInterval(interval);
    layer.remove();
  }, duration);
}

function initKeyboardSecret() {
  document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (key.length !== 1) return;
    state.typedBuffer = (state.typedBuffer + key).slice(-12);
    if (state.typedBuffer.includes("cupcake")) {
      state.typedBuffer = "";
      cupcakeRain();
    }
  });
}

function initFactsModal() {
  if (!factsModalOverlay || !factsOpenBtn || !factsCloseBtn) return;
  factsOpenBtn.addEventListener("click", () => factsModalOverlay.classList.add("open"));
  factsCloseBtn.addEventListener("click", () => factsModalOverlay.classList.remove("open"));
  factsModalOverlay.addEventListener("click", (e) => {
    if (e.target === factsModalOverlay) factsModalOverlay.classList.remove("open");
  });
  factsTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.tab;
      factsTabs.forEach((t) => t.classList.toggle("active", t === tab));
      factsPanes.forEach((p) => p.classList.toggle("active", p.id === id));
    });
  });
}

function initFactCarousel() {
  if (!factCarousel || !factDots) return;
  const facts = [
    "April 22 is Earth Day — the world's largest environmental event.",
    "April 22 people blend logic and emotion beautifully.",
    "Late April birthdays often carry a strong artistic eye.",
    "Numerology for 22 points to balance and abundance.",
    "Earth Day sparked major environmental policy shifts.",
    "Taurus is ruled by Venus, planet of love and beauty.",
    "Late-April births often score high in emotional intelligence.",
    "On April 22, the universe felt a little wider."
  ];
  factDots.innerHTML = "";
  facts.forEach((_, idx) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.addEventListener("click", () => renderFact(idx));
    factDots.appendChild(dot);
  });

  function renderFact(index) {
    state.factIndex = index % facts.length;
    factCarousel.innerHTML = `<div class="carousel-card"><span class="no">${String(state.factIndex + 1).padStart(2, "0")}</span><p>${facts[state.factIndex]}</p></div>`;
    factDots.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i === state.factIndex));
  }

  renderFact(0);
  setInterval(() => renderFact((state.factIndex + 1) % facts.length), 4000);
}

function initBackTop() {
  if (!backTop) return;
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initPageLoader() {
  if (!pageLoader) return;
  window.addEventListener("load", () => pageLoader.classList.add("hidden"));
  setTimeout(() => pageLoader.classList.add("hidden"), 1200);
}

function initPageTransitions() {
  document.body.classList.add("page-transition-in");
  document.querySelectorAll("a[href$='.html']").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href) return;
      e.preventDefault();
      document.body.classList.add("page-transition-out");
      setTimeout(() => { window.location.href = href; }, 250);
    });
  });
}

function initMusicMode() {
  if (!musicModeToggle) return;
  const modes = ["coffee", "kpop", "mute"];
  musicModeToggle.addEventListener("click", () => {
    const next = (modes.indexOf(state.musicMode) + 1) % modes.length;
    state.musicMode = modes[next];
    musicModeToggle.textContent = state.musicMode === "coffee" ? "☕" : state.musicMode === "kpop" ? "🎵" : "🔇";
    if (!chorusAudio || !kpopAudio) return;
    if (state.musicMode === "mute") { chorusAudio.pause(); kpopAudio.pause(); return; }
    if (state.musicMode === "kpop") { chorusAudio.pause(); kpopAudio.play().catch(() => {}); }
    if (state.musicMode === "coffee") { kpopAudio.pause(); }
  });
}

function initEspressoCounter() {
  document.querySelectorAll(".espresso-card").forEach((el) => {
    el.addEventListener("click", () => {
      state.espressoClicks += 1;
      el.querySelector(".espresso-clicks").textContent = `${state.espressoClicks}`;
    });
  });
}

function initPiggybackHover() {
  document.addEventListener("mouseover", (e) => {
    const card = e.target.closest(".piggyback-photo");
    if (!card) return;
    const bubble = document.createElement("div");
    bubble.textContent = "Best ride of my life.";
    bubble.style.cssText = "position:absolute;top:8px;right:8px;background:#fff6ea;border:1px solid rgba(120,96,74,.3);padding:4px 8px;border-radius:10px;font-size:.76rem;z-index:4;";
    card.appendChild(bubble);
    setTimeout(() => bubble.remove(), 3000);
  });
}

function initSurprisePage() {
  if (!openSurpriseBtn || !surpriseContent || !typeNote) return;
  openSurpriseBtn.addEventListener("click", () => {
    surpriseContent.classList.remove("hidden");
    openSurpriseBtn.classList.add("hidden");
    const fullText = typeNote.dataset.note || "";
    typeNote.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      typeNote.textContent += fullText.charAt(i);
      i += 1;
      if (i >= fullText.length) clearInterval(timer);
    }, 24);
    cupcakeRain();
  });
}

function initImageFallbacks() {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      const src = img.getAttribute("src") || "";
      if (src.includes("golder-retriever-1")) {
        img.src = "./assets/golden-retriever-1.svg";
        return;
      }
      if (src.includes("golder-retriever-2")) {
        img.src = "./assets/golden-retriever-2.svg";
        return;
      }
      if (src.includes("coffee-korean-bun.jpg")) {
        img.src = "./assets/coffee-korean-bun.svg";
        return;
      }
      if (src.includes("spain-pebble-beach.jpg")) {
        document.body.style.backgroundImage = 'linear-gradient(rgba(245, 240, 232, 0.78), rgba(237, 232, 220, 0.78)), url("./assets/spain-pebble-beach.svg"), radial-gradient(circle at top, #f8f4ee 0%, var(--bg) 55%, #f0e8dc 100%)';
        return;
      }
      img.dataset.failed = "true";
      img.alt = "Add image file in assets folder";
      img.style.objectFit = "contain";
      img.style.padding = "18px";
      img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 220'%3E%3Crect width='360' height='220' fill='%23efe4d6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%23726154'%3EAdd local image in /assets%3C/text%3E%3C/svg%3E";
    }, { once: true });
  });
}

function triggerPiggybackAnimation(element) {
  // Play piggyback animation
  element.classList.add("piggyback-riding");
  
  // Create and show the piggyback message
  const message = document.createElement("div");
  message.textContent = "🐷🎒 Piggyback ride!";
  message.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(255,246,234,0.95);border:2px solid var(--dusty-rose);padding:16px 24px;border-radius:16px;font-size:1.2rem;font-weight:bold;z-index:10000;box-shadow:0 8px 32px rgba(0,0,0,0.2);animation:fadeInOut 2s ease;";
  document.body.appendChild(message);
  
  // Play a fun sound effect
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ac.currentTime + 0.1);
    osc.frequency.exponentialRampToValueAtTime(600, ac.currentTime + 0.2);
    gain.gain.setValueAtTime(0.1, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start();
    osc.stop(ac.currentTime + 0.3);
  } catch (e) {
    // Audio not supported
  }
  
  // Remove animation class and message after animation
  setTimeout(() => {
    element.classList.remove("piggyback-riding");
    if (message.parentNode) message.remove();
    
    // Find photo16 index and open lightbox
    const photo16Index = state.galleryItems.findIndex(item => item.photoNumber === 16);
    if (photo16Index !== -1) {
      openLightbox(photo16Index);
    }
  }, 1500);
}

function initMemoriesMusic() {
  // Check if we're on the memories page
  if (!document.location.href.includes("memories.html")) return;
  
  // Auto-play the song when gallery loads
  if (chorusAudio && state.musicMode !== "mute") {
    chorusAudio.play().catch(() => {
      // Browser may block autoplay, user needs to interact first
      console.log("Autoplay blocked, waiting for user interaction");
    });
  }
}

function init() {
  console.log("Initializing...");
  console.log("masonry element:", masonry);
  
  hydrateConfigText();
  initPageLoader();
  initPageTransitions();
  initCursor();
  initRevealAnimations();
  initLightboxControls();
  initFloatingPaws();
  initMegamind();
  initKonami();
  initFactsModal();
  initFactCarousel();
  initBackTop();
  initMusicMode();
  initEspressoCounter();
  initPiggybackHover();
  initVoiceLock();
  initSurprisePage();
  initImageFallbacks();
  initKeyboardSecret();
  
  if (masonry) {
    console.log("Calling loadGallery...");
    loadGallery();
  } else {
    console.error("Masonry element not found - gallery will not load");
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

init();
