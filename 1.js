// 1. DARK / LIGHT MODE


function toggleTheme() {
  var body = document.body;
  var btn = document.getElementById("themeBtn");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    btn.textContent = "☀️ Dark ";
  } else {
    btn.textContent = "🌙 Light ";
  }
}



//SCROLL TO TOP BUTTON


window.addEventListener("scroll", function () {
  var btn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// VIDEO SEARCH 


function filterVideos() {
  var searchText = document.getElementById("searchBox").value.toLowerCase();
  var cards = document.querySelectorAll(".video-card");

  cards.forEach(function (card) {
    var title = card.querySelector(".video-title").textContent.toLowerCase();
    if (title.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}



// QUIZ


var questions = [
  {
    question: "Q1. What is the full form of HTML?",
    options: ["HyperText Markup Language", "High Tech Modern Language", "HyperText Modern Links", "Home Tool Markup Language"],
    answer: 0
  },
  {
    question: "Q2. Which CSS property is used to change text color?",
    options: ["font-size", "color", "background", "margin"],
    answer: 1
  },
  {
    question: "Q3. How do you declare a variable in JavaScript?",
    options: ["var / let / const", "int / string", "define", "make"],
    answer: 0
  },
  {
    question: "Q4. Which HTML tag is used to display an image?",
    options: ["pic", "image", "img", "photo"],
    answer: 2
  },
  {
    question: "Q5. How do you enable flexbox in CSS?",
    options: ["display: block", "display: flex", "display: grid", "display: inline"],
    answer: 1
  }
];

function loadQuiz() {
  var html = "";
 
  for (var i = 0; i < questions.length; i++) {
    html += "<div class='quiz-question'>";
    html += "<p>" + questions[i].question + "</p>";
 
    for (var j = 0; j < questions[i].options.length; j++) {
      html += "<label><input type='radio' name='q" + i + "' value='" + j + "'> " + questions[i].options[j] + "</label><br>";
    }
 
    html += "</div>";
  }
 
  document.getElementById("quiz").innerHTML = html;
}
 

function checkQuiz() {
  var score = 0;
 
  for (var i = 0; i < questions.length; i++) {
    var selected = document.querySelector("input[name='q" + i + "']:checked");
    if (selected && parseInt(selected.value) === questions[i].answer) {
      score++;
    }
  }
 
  var result = document.getElementById("quizResult");
  result.textContent = "Your Score: " + score + " / " + questions.length;
 
  if (score === 5) {
    result.textContent += " 🎉 Perfect! Well done!";
  } else if (score >= 3) {
    result.textContent += " 👍 Good job! Keep practicing.";
  } else {
    result.textContent += " 📖 Read again and try once more!";
  }
}
 

// Page load hone pe quiz load karo
window.onload = loadQuiz;