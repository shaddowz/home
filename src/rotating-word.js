var WORDS = [
  "AZURE SUITE", "CLAUDE IN VS CODE", "VISUAL STUDIO CODE LLM INTEGRATION",
  "CREATIVE AI WORKFLOW DESIGNER", "ADF PIPELINES", "SQL WAY OF THINKING",
  "TABULAR MODELING", "POWERBI FOCUSED", "DATA WAREHOUSE BASED",
  "AZURE DATA FACTORY", "DATA GOVERNANCE COMPLIANT", "ETL EXPERIENCED",
  "PRIVACY BY DESIGN", "LLM INTEGRATIONS", "QLIKSENSE EXPERIENCED",
  "QLIKCLOUD EXPERIENCED", "SSRS/SSAS/SSIS STACKED", "DASHBOARDS BUILDER",
  "COMPLEX QUERY SOLVER", "AGENTIC WORKFLOW", "AI DRIVEN SOLUTIONS"
];

var el = document.getElementById("rotating-word");
var recent = [];
var DURATION = 3200;

function pickWord() {
  var available = WORDS.filter(function (w) { return recent.indexOf(w) === -1; });
  if (available.length === 0) available = WORDS;
  var word = available[Math.floor(Math.random() * available.length)];
  recent.push(word);
  if (recent.length > 5) recent.shift();
  return word;
}

function showWord() {
  var word = pickWord();
  var span = document.createElement("span");
  span.textContent = word;
  span.style.animationDuration = DURATION + "ms";
  el.innerHTML = "";
  el.appendChild(span);
  setTimeout(showWord, DURATION + 500);
}

setTimeout(showWord, 2000);
