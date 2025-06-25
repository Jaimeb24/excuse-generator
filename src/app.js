// Import the stylesheet so Vite bundles it
import "./style.css";

// --- Excuse data ---
const who    = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what   = ["my homework", "my phone", "the car"];
const when   = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

// --- Helper to generate one random excuse ---
function generateExcuse() {
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  return `${pick(who)} ${pick(action)} ${pick(what)} ${pick(when)}.`;
}

// --- Replace the paragraph once the page loads ---
window.addEventListener("load", () => {
  document.getElementById("excuse").textContent = generateExcuse();
});

