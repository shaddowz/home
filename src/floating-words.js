var WORDS = [
  "AZURE SUITE", "CLAUDE", "VISUAL STUDIO CODE LLM INTEGRATIONS",
  "CUSTOM MCP", "ADF PIPELINES", "SQL", "TABULAR", "POWERBI",
  "DATA WAREHOUSE", "ADF", "DATA GOVERNANCE COMPLIANT", "ETL EXPERIENCED",
  "PRIVACY BY DESIGN", "AI ADOPTING LLMS TO WORKFLOW", "QLIKSENSE",
  "QLIKCLOUD", "SSRS/SSAS/SSIS", "DASHBOARD BUILDING",
  "COMPLEX SQL SOLUTIONS", "AGENTIC WORKFLOW", "AI DRIVEN SOLUTIONS"
];
var container = document.getElementById("floating-words");
var recent = [];
var activePositions = [];
var MAX_WORDS = 5;
var activeCount = 0;

function pickWord() {
  var available = WORDS.filter(function (w) { return recent.indexOf(w) === -1; });
  if (available.length === 0) available = WORDS;
  var word = available[Math.floor(Math.random() * available.length)];
  recent.push(word);
  if (recent.length > 5) recent.shift();
  return word;
}

// Position words in a ring close to the center text but not overlapping it.
// Center exclusion zone: x 25-75%, y 30-70%
// Spawn zone: just outside that band, within x 8-92%, y 10-90%
function getPosition() {
  var attempts = 0;
  var x, y;
  do {
    // Bias toward the edges of the center zone
    var side = Math.random();
    if (side < 0.25) {
      // Above center
      x = 15 + Math.random() * 70;
      y = 10 + Math.random() * 18;
    } else if (side < 0.5) {
      // Below center
      x = 15 + Math.random() * 70;
      y = 72 + Math.random() * 16;
    } else if (side < 0.75) {
      // Left of center
      x = 8 + Math.random() * 15;
      y = 20 + Math.random() * 60;
    } else {
      // Right of center
      x = 77 + Math.random() * 15;
      y = 20 + Math.random() * 60;
    }
    attempts++;
    if (attempts > 20) break;
  } while (isTooClose(x, y));
  return { x: x, y: y };
}

function isTooClose(x, y) {
  for (var i = 0; i < activePositions.length; i++) {
    var dx = x - activePositions[i].x;
    var dy = y - activePositions[i].y;
    if (Math.abs(dx) < 15 && Math.abs(dy) < 8) return true;
  }
  return false;
}

function spawnWord() {
  if (activeCount >= MAX_WORDS) return;
  var word = pickWord();
  var pos = getPosition();
  var duration = 4000 + Math.random() * 3000;
  var el = document.createElement("div");
  el.className = "floating-word";
  el.textContent = word;
  el.style.left = pos.x + "%";
  el.style.top = pos.y + "%";
  el.style.animation = "wordFloat " + duration + "ms ease-in-out forwards";
  container.appendChild(el);
  activePositions.push(pos);
  activeCount++;
  setTimeout(function () {
    el.remove();
    var idx = activePositions.indexOf(pos);
    if (idx !== -1) activePositions.splice(idx, 1);
    activeCount--;
  }, duration);
}

setInterval(function () {
  spawnWord();
}, 3500);

setTimeout(function () {
  for (var i = 0; i < 2; i++) {
    setTimeout(spawnWord, i * 1800);
  }
}, 2500);
