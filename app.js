const quizdata = [
    {
        qusetion: 'What is Your Name?',
        a: 'Usama Khan',
        b: 'Ali Khan',
        c: 'Ahmed Khan',
        d: 'None of these',
        correct: 'a',
    },
    {
        qusetion: 'what language is best for web development 2020?',
        a: 'Python',
        b: 'Java',
        c: 'JavaScript',
        d: 'Ruby',
        correct: 'c',
    },
    {
        qusetion: 'Who is the Father of our Nation?',
        a: 'Mahatma Gandhi',
        b: 'Ahmad Shah Durrani',
        c: 'Skanderbeg',
        d: 'Quaid-e-Azam',
        correct: 'd',
    },
    {
        qusetion: 'Who was the first Prime Minister of Pakistan',
        a: 'Liaquat Ali Khan',
        b: 'Quaid-e-Azam',
        c: 'Mr. Liaqat Ali Khan',
        d: 'Khawaja Nazimuddin',
        correct: 'a',
    },
    {
        qusetion: ' How many Cricket world cups does India have?',
        a: 'One',
        b: 'Three',
        c: 'Five',
        d: 'None of these',
        correct: "a",
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const qusetionEl = document.getElementById('qusetion');
const aQue = document.getElementById('aque');
const bQue = document.getElementById('bque');
const cQue = document.getElementById('cque');
const dQue = document.getElementById('dque');
const buttonEle = document.getElementById('btn');


let currentElement = 0;
let score = 0;
getreadey();
function getreadey() {
    deselectAnswers();
    const quizdatafull = quizdata[currentElement];
    qusetionEl.innerText = quizdatafull.qusetion;
    aQue.innerText = quizdatafull.a;
    bQue.innerText = quizdatafull.b;
    cQue.innerText = quizdatafull.c;
    dQue.innerText = quizdatafull.d;

}
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerle) => {
        if (answerle.checked) {
            answer = answerle.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

buttonEle.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizdata[currentElement].correct) {
            score++;
        }

        currentElement++;
        if (currentElement < quizdata.length) {
            getreadey();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizdata.length} questions.</h2>
                
                <button onclick="location.reload()">Again</button>
                <img src="images.jpg" alt="This is a image" id="ima">
            `;
        }
    }
});