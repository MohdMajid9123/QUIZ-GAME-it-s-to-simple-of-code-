const quizDB = [
  {
    question: "Q1).Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    ans: "ans4",
  },
  {
    question: "Q2).How to write an IF statement in JavaScript?",
    a: "if i = 5 then",
    b: "if i == 5 then",
    c: "if (i == 5)",
    d: " if i = 5",
    ans: "ans4",
  },
  {
    question: "Which of the following is a disadvantage of using JavaScript?",

    a: "Client-side JavaScript does not allow the reading or writing of files.",
    b: "JavaScript can not be used for Networking applications because there is no such support available.",
    c: "JavaScript doesn't have any multithreading or multiprocess capabilities.",
    d: "All of the above.",
    ans: "ans4",
  },

  {
    question:
      "Q3).How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",

    a: "if (i <> 5)",
    b: "if i <> 5",
    c: "if (i != 5)",
    d: "if i =! 5 then",
    ans: "ans3",
  },

  {
    question: "Q4).How does a WHILE loop start?",

    a: "while i = 1 to 10",
    b: "while (i <= 10; i++)",
    c: "while (i <= 10)",
    d: "none of this",
    ans: "ans3",
  },

  {
    question: "Q5).How does a FOR loop start?",
    a: "for (i = 0; i <= 5)",
    b: "for (i = 0; i <= 5; i++)",
    c: "for i = 1 to 5",
    d: "for (i <= 5; i++)",
    ans: "ans2",
  },

  {
    question: "Q6).How can you add a comment in a JavaScript?",

    a: "//This is a comment",
    b: "/This is a comment",
    c: "<!--This is a comment-->",
    d: "none of this",
    ans: "ans1",
  },

  {
    question: "Q7).How to insert a comment that has more than one line?",

    a: "/*This comment has more than one line*/",
    b: "//This comment has more than one line//",
    c: "<!--This comment has more than one line-->",
    d: "none of this",

    ans: "ans1",
  },

  {
    question: "Q8).What is the correct way to write a JavaScript array?",

    a: "var colors = (1,2,3,4)",
    b: "var colors = [1,2,3,4]",
    c: "var colors = 1,2,3,4",
    d: "var colors = {1,2,3,4}",
    ans: "ans2",
  },

  {
    question: "Q9).How do you round the number 7.25, to the nearest integer?",
    a: "rnd(7.25)",
    b: "Math.round(7.25)",
    c: "Math.rnd(7.25)",
    d: "round(7.25)",
    ans: "ans2",
  },

  {
    question:
      "Q10).How do you find the number with the highest value of x and y?",
    a: "Math.max(x, y)",
    b: "Math.ceil(x, y)",
    c: "top(x, y)",
    d: "ceil(x, y)",
    ans: "ans1",
  },

  {
    question: "Q13).How can you detect the client&rsquo;s browser name?",
    a: "navigator.appName",
    b: "browser.name",
    c: "client.navName",
    d: "none of this",

    ans: "ans1",
  },

  {
    question:
      "Q14).Which event occurs when the user clicks on an HTML element?",

    a: "onchange",
    b: "onclick",
    c: "onmouseclick",
    d: "onmouseover",
    ans: "ans2",
  },

  {
    question: "Q15).How do you declare a JavaScript variable?",
    a: "var carName;",
    b: "variable carName;",
    c: "v carName;",
    d: "none of this",

    ans: "ans1",
  },

  {
    question: "Q16).Which operator is used to assign a value to a variable?",
    a: "*",
    b: "-",
    c: "=",
    d: "x",
    ans: "ans3",
  },

  {
    question: "Q17).What will the following code return: Boolean(10 &gt; 9)",

    a: "NaN",
    b: "false",
    c: "true",
    d: "none of this",

    ans: "ans3",
  },
  {
    question: "Q19).What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    ans: "ans1",
  },
  {
    question: "Q20).What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    ans: "ans2",
  },
  {
    question: "Q21).What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    ans: "ans2",
  },
];

// step one
const questionEl = document.querySelector("#question");
//submit btn target
const submitEl = document.querySelector("#submit");
//input all target
const InputAll = document.querySelectorAll("input");
//last div target
const last_div = document.querySelector("#last_div");
// questionCounter
let questionCounter = 0;
//score
let score = 0;

//loadQuestion to load your question and it's data
const loadQuestion = () => {
  const questionList = quizDB[questionCounter];
  questionEl.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

//get all input id
const getAnswer = () => {
  let answer;
  InputAll.forEach((ele) => {
    if (ele.checked) {
      answer = ele.id;
    }
  });
  return answer;
};

//when you click the radio button after the next page is not show with out it . It's show
resetTargetInput = () => {
  InputAll.forEach((ele) => (ele.checked = false));
};

//submit button event and function
submitEl.addEventListener("click", () => {
  const storeAnswer = getAnswer();
  if (storeAnswer === quizDB[questionCounter].ans) {
    score++;
  }
  questionCounter++;
  resetTargetInput();

  //compare questionCounter and quizDB Length
  if (questionCounter < quizDB.length) {
    loadQuestion();
  } else {
    //last div code
    last_div.innerHTML = `
      <h3>Your Score Is : ${score} / ${questionCounter} 🤘🤘</h3>
          <button class="btn" onclick="location.reload()">Play Again</button>
      `;
    last_div.style.display = "block";
  }
});
