



let Questions = document.querySelectorAll(".question-item-container");
let Arrows = document.querySelectorAll(".arrow");
let PickedQuestion = document.querySelector(".question-selected");




function FoldQuestion() {
    PickedQuestion?.classList.remove("question-selected");
}

function RemoveStyles(questions) {
    for (let i = 0; i < questions.length; i++) {
        questions[i].classList.remove("question-selected");
    }
}

function AddStyles(question) {
    question.classList.add("question-selected");
}

function UpdatePickedQuestion() {
    PickedQuestion = document.querySelector(".question-selected");
}

for (let i = 0; i < Questions.length; i++) {
    let question = Questions[i].querySelector(".question");
    question.addEventListener("click", () => {
        RemoveStyles(Questions);
        AddStyles(question.parentElement.parentElement);
    })
}

for (let i = 0; i < Arrows.length; i++) {
    Arrows[i].addEventListener("click", () => {
        RemoveStyles(Questions);
        AddStyles(Arrows[i].parentElement.parentElement);
        FoldQuestion();
    });
}

document.addEventListener("click", () => {
    return UpdatePickedQuestion();
})