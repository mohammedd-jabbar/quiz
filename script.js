const correctAnswers = ["B", "C", "D", "A", "B", "C", "B"];
const form = document.querySelector(".quiz-form");
const scoreQuiz = document.querySelector(".score-quiz");
const displayNone = document.querySelector(".d-none");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
  ];

  // Cheked answer
  userAnswers.forEach((value, index) => {
    if (value === correctAnswers[index]) {
      score += 14.25;
    }
  });

  scrollTo(0, 0);

  displayNone.classList.remove("d-none");

  let output = 0;

  const scrollScore = setInterval(() => {
    scoreQuiz.innerHTML = `${output}%`;

    if (output >= score) {
      clearInterval(scrollScore);
    }

    output++;
  }, 20);
});
