// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hideLoader");
  }, 1500);
});

// ==========================
// CURSOR HEART
// ==========================

const cursor = document.getElementById("cursor-heart");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  const heart = document.createElement("div");

  heart.className = "heart";

  heart.innerHTML = "❤";

  heart.style.left = e.clientX + "px";

  heart.style.top = e.clientY + "px";

  heart.style.color = ["#ff4f8b", "#ff8fab", "#ffd6e0", "#ffffff"][
    Math.floor(Math.random() * 4)
  ];

  heart.style.fontSize = Math.random() * 15 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
});

// ==========================
// MUSIC
// ==========================

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () => {
  if (playing) {
    music.pause();

    musicBtn.innerHTML = '<i class="fa-solid fa-music"></i>';
  } else {
    music.play();

    musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }

  playing = !playing;
};

// ==========================
// DARK MODE
// ==========================

const darkBtn = document.getElementById("darkBtn");

darkBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

// ==========================
// LIGHTBOX
// ==========================

const cards = document.querySelectorAll(".card img");

const lightbox = document.getElementById("lightbox");

const big = document.getElementById("lightboxImg");

const close = document.getElementById("closeLightbox");

cards.forEach((img) => {
  img.onclick = () => {
    lightbox.style.display = "flex";

    big.src = img.src;
  };
});

close.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document
  .querySelectorAll(".card,.glass,.timeline-item,.menu-card,.section-title")
  .forEach((el) => {
    observer.observe(el);
  });

// ==========================
// GALLERY STAGGER
// ==========================

document.querySelectorAll(".card").forEach((card, index) => {
  card.style.transitionDelay = index * 0.15 + "s";
});

// ==========================
// PARALLAX
// ==========================

window.addEventListener("scroll", () => {
  let y = window.scrollY;

  document.querySelector(".hero").style.backgroundPositionY = y * 0.5 + "px";
});

// ==========================
// SAKURA
// ==========================

function sakura() {
  const flower = document.createElement("div");

  flower.className = "sakura";

  flower.innerHTML = "🌸";

  flower.style.left = Math.random() * 100 + "vw";

  flower.style.animationDuration = Math.random() * 6 + 6 + "s";

  flower.style.fontSize = Math.random() * 20 + 18 + "px";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 12000);
}

setInterval(sakura, 350);

// ==========================
// BUTTON RIPPLE
// ==========================

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");

    ripple.style.position = "absolute";

    ripple.style.width = "10px";

    ripple.style.height = "10px";

    ripple.style.borderRadius = "50%";

    ripple.style.background = "rgba(255,255,255,.5)";

    ripple.style.left = e.offsetX + "px";

    ripple.style.top = e.offsetY + "px";

    ripple.style.transform = "scale(0)";

    ripple.style.transition = ".6s";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.style.transform = "scale(30)";

      ripple.style.opacity = "0";
    }, 10);

    setTimeout(() => {
      ripple.remove();
    }, 700);
  });
});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.onclick = function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
});
