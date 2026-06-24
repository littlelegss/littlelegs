// 퀴즈 데이터 (문제, 보기, 정답 인덱스)
const quizData = [
    {
        question: "다음 중 맞춤법이 올바른 문장은 무엇일까요?",
        options: [
            "오늘 점심은 무난히 합격점을 줄 만해.",
            "어따 대고 삿대질이야?",
            "그 일은 내 알바 아니구먼.",
            "어스름한 새벽녘에 잠이 깼다."
        ],
        answer: 3 // 4번째 보기 (0부터 시작하므로 3이 4번째)
    },
    {
        question: "다음 중 '설레다'의 활용형으로 올바른 단어는?",
        options: [
            "설레임",
            "설렘",
            "설래임",
            "설램"
        ],
        answer: 1 // 2번째 보기
    },
    {
        question: "문맥상 가장 적절한 어휘는?\n'선생님은 학생들의 의견을 적극적으로 (  )하셨다.'",
        options: [
            "수용 (受容)",
            "수정 (修正)",
            "수배 (手配)",
            "수출 (輸出)"
        ],
        answer: 0 // 1번째 보기
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionNumberElem = document.getElementById("question-number");
const questionTextElem = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreTextElem = document.getElementById("score-text");

// 퀴즈 시작 함수
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizBox.classList.remove("hide");
    resultBox.classList.add("hide");
    loadQuestion();
}

// 문제 로드 함수
function loadQuestion() {
    const currentQuiz = quizData[currentQuestionIndex];
    questionNumberElem.innerText = `문제 ${currentQuestionIndex + 1} / ${quizData.length}`;
    questionTextElem.innerText = currentQuiz.question;
    
    optionButtons.forEach((button, index) => {
        button.innerText = `${index + 1}. ${currentQuiz.options[index]}`;
    });
}

// 답변 선택 시 작동하는 함수
function selectAnswer(selectedIndex) {
    const currentQuiz = quizData[currentQuestionIndex];
    
    if (selectedIndex === currentQuiz.answer) {
        score++;
        alert("정답입니다! 🎉");
    } else {
        alert(`아쉽습니다! 정답은 ${currentQuiz.answer + 1}번입니다. 🥲`);
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// 결과 화면 표시 함수
function showResult() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    scoreTextElem.innerText = `총 ${quizData.length}문제 중 ${score}문제를 맞혔습니다!`;
}

// 다시 시작 함수
function restartQuiz() {
    startQuiz();
}

// 페이지가 로드되면 자동으로 퀴즈 시작
window.onload = startQuiz;
