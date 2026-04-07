var WORDS = [
  "AZURE", "CLAUDE", "CUSTOM MCP", "PIPELINES", "SQL", "SSAS", "POWERBI",
  "DATA WAREHOUSE", "ADF", "DATA GOVERNANCE", "RAG", "ETL", "OPTIMIZATION",
  "ENCRYPTION", "PII", "DATA PRIVACY", "LLM",
  "QLIKSENSE", "QLIKCLOUD", "SSRS", "DASHBOARDS", "COMPLEX QUERYS", "WINDOW FUNCTIONS",
  "AGENTIC WORKFLOW", "AI DRIVEN SOLUTIONS"
];
var container = document.getElementById("floating-words");
var recent = [];
var activePositions = [];

function pickWord() {
  var available = WORDS.filter(function (w) { return recent.indexOf(w) === -1; });
  if (available.length === 0) available = WORDS;
  var word = available[Math.floor(Math.random() * available.length)];
  recent.push(word);
  if (recent.length > 5) recent.shift();
  return word;
}

function getPosition() {
  var attempts = 0;
  var x, y;
  do {
    x = 15 + Math.random() * 70;
    y = 15 + Math.random() * 70;
    attempts++;
    if (attempts > 30) break;
  } while (
    (x > 30 && x < 70 && y > 35 && y < 65) ||
    isTooClose(x, y)
  );
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
  var word = pickWord();
  var pos = getPosition();
  var duration = 4000 + Math.random() * 3000;
  var el = document.createElement("div");
  el.className = "floating-word";
  el.textContent = word;
  el.style.left = pos.x + "%";
  el.style.top = pos.y + "%";
  el.style.animationDuration = duration + "ms";
  container.appendChild(el);
  activePositions.push(pos);
  setTimeout(function () {
    el.remove();
    var idx = activePositions.indexOf(pos);
    if (idx !== -1) activePositions.splice(idx, 1);
  }, duration);
  setTimeout(spawnWord, 2500 + Math.random() * 4000);
}

setTimeout(function () {
  for (var i = 0; i < 4; i++) {
    setTimeout(spawnWord, i * 1500 + Math.random() * 2000);
  }
}, 2000);
