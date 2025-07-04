const questions = [
  { question: "Wo liegt Borkum?", answers: ["Nordsee", "Ostsee", "Mittelmeer", "Atlantik"], correct: 0 },
  { question: "Wie viele Einwohner hat Borkum ungefähr?", answers: ["ca. 10.000", "ca. 5.000", "ca. 20.000", "ca. 50.000"], correct: 1 },
  { question: "Welches Tier sieht man oft auf Borkum?", answers: ["Möwe", "Pinguin", "Adler", "Känguru"], correct: 0 },
  { question: "Was ist typisch für Borkum?", answers: ["Wüste", "Gebirge", "Leuchtturm", "Skihang"], correct: 2 },
  { question: "Wie heißt der Leuchtturm auf Borkum?", answers: ["Pilsum", "Hörnum", "Borkumer Leuchtturm", "Roter Sand"], correct: 2 },
  { question: "Welche Sprache spricht man auf Borkum?", answers: ["Deutsch", "Französisch", "Spanisch", "Englisch"], correct: 0 },
  { question: "Welche Meeresregion umgibt Borkum?", answers: ["Atlantik", "Ostsee", "Mittelmeer", "Nordsee"], correct: 3 },
  { question: "Was kann man auf Borkum machen?", answers: ["Strandspaziergang", "Skifahren", "Wüstentour", "Bergsteigen"], correct: 0 },
  { question: "Wie kommt man am besten nach Borkum?", answers: ["Zug", "Auto", "Fähre", "Flugzeug"], correct: 2 },
  { question: "Borkum ist Teil welcher Inselgruppe?", answers: ["Seychellen", "Balearen", "Kanarische Inseln", "Ostfriesische Inseln"], correct: 3 },
  { question: "Welches Wetter ist typisch für Borkum?", answers: ["Windig und mild", "Heiß und trocken", "Kalt und schneereich", "Tropisch"], correct: 0 },
  { question: "Welche Pflanzen wachsen auf Borkum?", answers: ["Strandhafer", "Kakteen", "Tannen", "Regenwaldpflanzen"], correct: 0 },
  { question: "Was schützt die Insel Borkum vor Sturmfluten?", answers: ["Wälde", "Dünen", "Mauern", "Berge"], correct: 3 },
  { question: "Wie groß ist Borkum ungefähr?", answers: ["5km²", "100 km²", "26 km²", "50 km²"], correct: 2 },
  { question: "Welche Aktivität ist auf Borkum beliebt?", answers: ["Radfahren", "Skifahren", "Surfen im Mittelmeer", "Wandern im Gebirge"], correct: 0 },
  { question: "Welches Meer/Ozean ist auf Borkum", answers: ["Mittelmeer", "Atlantik", "Indischer ozean", "Wattmeer"], correct: 3 },
  { question: "Wer ist der schlauste in der Klasse?", answers: ["Daniel", "Michael.P", "Amir", "keiner von denen"], correct: 3 },
  { question: "Wer wird eher eine 6 im Zeugniss haben?", answers: ["Michael.P", "Diana", "Turpal", "Amir"], correct: 2 },
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(index);
    answersEl.appendChild(btn);
  });
  
  nextBtn.classList.add("hidden");
  resultEl.textContent = "";
}

function selectAnswer(selected) {
  const q = questions[currentQuestion];
  const buttons = answersEl.querySelectorAll("button");
  
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === q.correct) btn.style.backgroundColor = "#4caf50"; // grün
    else if (index === selected) btn.style.backgroundColor = "#f44336"; // rot
  });
  
  if (selected === q.correct) {
    resultEl.textContent = "Richtig!";
  } else {
    resultEl.textContent = `Falsch! Die richtige Antwort ist: ${q.answers[q.correct]}`;
  }
  
  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Glückwunsch, du hast das Quiz beendet!";
    answersEl.innerHTML = "";
    nextBtn.classList.add("hidden");
    resultEl.textContent = "";

    // Credit-Viereck anzeigen
    document.getElementById("credit").style.display = "block";
  }
};    
questionEl.textContent = "Glückwunsch, du hast das Quiz beendet!";
    answersEl.innerHTML = "";
    nextBtn.classList.add("hidden");
    resultEl.textContent = "";
  }
};

showQuestion();