var WORDS = [
  "AZURE", "CLAUDE", "CUSTOM MCP", "PIPELINES", "SQL", "SSAS", "POWERBI",
  "DATA WAREHOUSE", "ADF", "DATA GOVERNANCE", "RAG", "ETL", "OPTIMIZATION",
  "ENCRYPTION", "PII", "DATA PRIVACY", "LLM"
];
var container = document.getElementById("floating-words");

function getPosition() {
  var x, y;
  do {
    x = 15 + Math.random() * 70;
    y = 15 + Math.random() * 70;
  } while (x > 30 && x < 70 && y > 35 && y < 65);
  return { x: x, y: y };
}

function spawnWord() {
  var word = WORDS[Math.floor(Math.random() * WORDS.length)];
  var pos = getPosition();
  var duration = 6000 + Math.random() * 6000;
  var el = document.createElement("div");
  el.className = "floating-word";
  el.textContent = word;
  el.style.left = pos.x + "%";
  el.style.top = pos.y + "%";
  el.style.animationDuration = duration + "ms";
  container.appendChild(el);
  setTimeout(function () {
    el.remove();
  }, duration);
  // Schedule next word at random interval
  setTimeout(spawnWord, 2500 + Math.random() * 4000);
}

// Kick off several independent chains after intro finishes
setTimeout(function () {
  for (var i = 0; i < 4; i++) {
    setTimeout(spawnWord, i * 1500 + Math.random() * 2000);
  }
}, 4000);
