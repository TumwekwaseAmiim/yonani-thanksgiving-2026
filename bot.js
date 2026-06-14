// ===============================
// ENG. AMIIM AI CHATBOT ENGINE (UPGRADED)
// THANKSGIVING SERVICE 2026
// ===============================


/* ===============================
   1. NORMALIZE INPUT
================================= */
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .trim();
}


/* ===============================
   2. SAFE GET FROM BOT DATA
================================= */
function getData(key) {
  return (botData && botData[key]) ? botData[key] : null;
}


/* ===============================
   3. SMART RESPONSE ENGINE
================================= */
function getBotResponse(input) {

  const message = normalize(input);

  // ===============================
  // 3.1 DIRECT MATCH (FAST PATH)
  // ===============================
  const direct = getData(message);
  if (direct) return direct;


  // ===============================
  // 3.2 KEYWORD INTELLIGENCE LAYER
  // ===============================

  // 👤 Hon Yonani
  if (message.includes("yonani") || message.includes("hon") || message.includes("who is")) {
    return getData("who is hon yonani") ||
      "Hon. Yonani is the main host of the Thanksgiving Service 2026.";
  }

  if (
    message.includes("background") ||
    message.includes("political") ||
    message.includes("history")
  ) {
    return getData("what is his political background") ||
      "He has a strong background in leadership and community service.";
  }

  if (
    message.includes("works with") ||
    message.includes("collaborate") ||
    message.includes("team")
  ) {
    return getData("who works with yonani") ||
      "He works with a dedicated team of leaders and organizers.";
  }


  // 📅 EVENT INFO
  if (
    message.includes("event") ||
    message.includes("about") ||
    message.includes("service")
  ) {
    return getData("event description teaser") ||
      "The Thanksgiving Service 2026 is a special gathering of gratitude and celebration.";
  }

  if (message.includes("date") || message.includes("when")) {
    return getData("event date") ||
      "The event will take place on 28th June 2026.";
  }

  if (
    message.includes("venue") ||
    message.includes("location") ||
    message.includes("where") ||
    message.includes("place")
  ) {
    return getData("venue") ||
      "The event will be held at the designated thanksgiving venue.";
  }

  if (message.includes("time")) {
    return "The event starts at 10:00 AM on 28th June 2026 🙏";
  }


  // 🙏 INVITATION
  if (
    message.includes("invited") ||
    message.includes("who can attend") ||
    message.includes("eligibility")
  ) {
    return getData("who is invited") ||
      "Everyone is warmly invited to attend the Thanksgiving Service 2026.";
  }


  // 👋 GREETINGS
  if (
    message.includes("hi") ||
    message.includes("hello") ||
    message.includes("hey") ||
    message.includes("good morning") ||
    message.includes("good evening")
  ) {
    return "Welcome 🙏 Ask me about the event, Hon. Yonani, date, venue, or program details.";
  }


  // ===============================
  // 3.3 SMART FALLBACK (IMPROVED)
  // ===============================

  const suggestions = [
    "Who is Hon. Yonani?",
    "When is the event?",
    "Where is the venue?",
    "What is the event about?",
    "Who can attend?"
  ];

  return `
I don't have full information on that yet 🙏

Try asking:
- ${suggestions[0]}
- ${suggestions[1]}
- ${suggestions[2]}
- ${suggestions[3]}
- ${suggestions[4]}
`;
}