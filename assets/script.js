// const questionsAnswers = {
//     question: "What line of code would you use to debug your existing code?",
//     answer: ["console.log()", "boolean", "function", "class",]
// };

let questionsArr = document.querySelector("#questionsArr");

let questions = [{
    question: "What line of code would you use to debug your existing code?",
    answer: ["console.log()", "boolean", "function", "class",],
}, {
    question: "test2",
    answer:["ans1", "ans2", "ans3", "ans4",],
}, {
    question: "test3",
    answer:["ans1", "ans2", "ans3", "ans4",],
}, {
    question: "test4",
    answer:["ans1", "ans2", "ans3", "ans4",],
}];

for (i = 0; i < questions.length; i++) {
    console.log(questions[i].question)
    questionsArr.innerHTML = questions[i].question
}