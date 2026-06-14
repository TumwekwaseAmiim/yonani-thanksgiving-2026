// ===============================
// THANKSGIVING SERVICE 2026 - FINAL UPGRADED LOGIC
// Eng. Amiim Tumwekwase Technologies
// ===============================


/* ===============================
   1. EVENT DATE
================================= */
const eventDate = new Date("June 28, 2026 10:00:00").getTime();


/* ===============================
   2. TOAST NOTIFICATION SYSTEM
================================= */
function showToast(message) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}


/* ===============================
   3. COUNTDOWN TIMER (UPGRADED)
================================= */
function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const countdownBox = document.getElementById("countdown");

  if (distance <= 0) {
    if (countdownBox) {
      countdownBox.innerHTML = `
        <h2 class="event-started">🎉 The Thanksgiving Service Has Started!</h2>
      `;
    }
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


/* ===============================
   4. AUTO EVENT END REDIRECT
================================= */
function checkEventStatus() {
  const now = new Date().getTime();

  if (now > eventDate) {
    showToast("Event started! Redirecting... 🙏");
    setTimeout(() => {
      window.location.href = "thankyou.html";
    }, 2000);
  }
}

setInterval(checkEventStatus, 60000);


/* ===============================
   5. CHAT SYSTEM (UPGRADED AI FEEL)
================================= */

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");


function loadChat() {
  if (chatBox) {
    chatBox.innerHTML = localStorage.getItem("chatHistory") || "";
  }
}

function saveChat() {
  localStorage.setItem("chatHistory", chatBox.innerHTML);
}


function getSmartReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("time") || msg.includes("when")) {
    return "The Thanksgiving Service is scheduled for 28th June 2026 at 10:00 AM 🙏";
  }

  if (msg.includes("where") || msg.includes("location")) {
    return "The event will take place at the designated thanksgiving venue. Full details are on the invitation.";
  }

  if (msg.includes("who")) {
    return "Hon. Yonani will be the main host of this Thanksgiving Service 🙏";
  }

  if (msg.includes("thank")) {
    return "You're welcome! We appreciate your support ❤️";
  }

  return "Sorry, I don't fully understand that yet. Please try asking about time, location, or host.";
}


function sendMessage() {
  if (!input) return;

  const message = input.value.trim();
  if (message === "") return;

  // user message
  chatBox.innerHTML += `
    <div class="chat user"><strong>You:</strong> ${message}</div>
  `;

  input.value = "";
  saveChat();

  // typing indicator
  const typing = document.createElement("div");
  typing.className = "chat bot";
  typing.innerHTML = "<em>AI is typing...</em>";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    const reply = getSmartReply(message);

    typing.innerHTML = `<strong>AI:</strong> ${reply}`;

    saveChat();
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}


/* ===============================
   6. SMOOTH SCROLL BUTTONS
================================= */
document.addEventListener("DOMContentLoaded", () => {

  loadChat();

  const viewBtn = document.querySelector(".btn");
  const contactBtn = document.querySelector(".btn-outline");

  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      document.querySelector(".event-details")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      document.querySelector(".contact")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  }
});


/* ===============================
   7. SCROLL REVEAL ANIMATION
================================= */
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100 && !sec.classList.contains("show")) {
      sec.classList.add("show");
    }
  });
});


/* ===============================
   8. BACK TO TOP BUTTON (AUTO)
================================= */
const topBtn = document.createElement("button");
topBtn.innerText = "↑ Top";
topBtn.className = "top-btn";
document.body.appendChild(topBtn);

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});