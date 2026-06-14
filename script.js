// ===============================
// THANKSGIVING SERVICE 2026 - FINAL STABLE SCRIPT
// ===============================

const eventDate = new Date("June 28, 2026 10:00:00").getTime();

/* ================= TOAST ================= */
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => toast.remove(), 4000);
}

/* ================= COUNTDOWN ================= */
function updateCountdown() {
  const now = Date.now();
  const distance = eventDate - now;

  const countdownBox = document.querySelector(".countdown");
  if (!countdownBox) return;

  if (distance <= 0) {
    countdownBox.innerHTML = "<h2>🎉 Event Started!</h2>";
    return;
  }

  document.getElementById("days").innerText =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerText =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("minutes").innerText =
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("seconds").innerText =
    Math.floor((distance % (1000 * 60)) / 1000);
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ================= CHAT SYSTEM ================= */
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

function loadChat() {
  if (chatBox) {
    chatBox.innerHTML = localStorage.getItem("chatHistory") || "";
  }
}

function saveChat() {
  if (chatBox) {
    localStorage.setItem("chatHistory", chatBox.innerHTML);
  }
}

function getSmartReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("time") || msg.includes("when")) {
    return "28th June 2026 at 10:00 AM 🙏";
  }

  if (msg.includes("where")) {
    return "Nkogoro Archdeaconry Church 🙏";
  }

  if (msg.includes("who")) {
    return "Hon. Yonani is the host of this Thanksgiving Service 🙏";
  }

  if (msg.includes("thank")) {
    return "You're welcome ❤️";
  }

  return "Ask about time, location, or host 🙏";
}

function sendMessage() {
  if (!chatBox || !input) return;

  const message = input.value.trim();
  if (!message) return;

  chatBox.innerHTML += `<div class="chat user"><b>You:</b> ${message}</div>`;
  input.value = "";

  const typing = document.createElement("div");
  typing.className = "chat bot";
  typing.innerHTML = "<em>AI is typing...</em>";
  chatBox.appendChild(typing);

  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    typing.innerHTML = `<b>AI:</b> ${getSmartReply(message)}`;
    saveChat();
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);

  saveChat();
}

/* ================= SAFE INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  loadChat();

  // ⭐ IMPORTANT FIX: SHOW EVERYTHING ON LOAD (fix white screen)
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("show");
  });

  const viewBtn = document.querySelector(".btn");
  const contactBtn = document.querySelector(".btn-outline");

  viewBtn?.addEventListener("click", () => {
    document.querySelector(".event-details")
      ?.scrollIntoView({ behavior: "smooth" });
  });

  contactBtn?.addEventListener("click", () => {
    document.querySelector(".contact")
      ?.scrollIntoView({ behavior: "smooth" });
  });
});

/* ================= SCROLL REVEAL ================= */
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

/* ================= TOP BUTTON ================= */
const topBtn = document.createElement("button");
topBtn.innerText = "↑ Top";
topBtn.className = "top-btn";
document.body.appendChild(topBtn);

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

/* ================= SHARE SYSTEM ================= */
function shareSite() {
  const url = window.location.href;
  const text = "🎉 Join Thanksgiving Service 2026 - Hon. Yonani 🙏";

  if (navigator.share) {
    navigator.share({
      title: "Thanksgiving Service 2026",
      text: text,
      url: url
    });
  } else {
    const whatsapp = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
    window.open(whatsapp, "_blank");
  }
}