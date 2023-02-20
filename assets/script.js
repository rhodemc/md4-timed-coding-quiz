let myQuestionsArr = document.querySelector("#questionsArr");

let myQuestions = [{
    question: "What line of code would you use to print to your debugger?",
    answerOptions: ["console.log()", "boolean", "function", "class",],
    answer: "console.log()",
}, {
    question: "What does coercion mean in regards to programming?",
    answerOptions:["To convert between types", "To eat", "To poop", "To debug",],
    answer: "To convert between types",
}, {
    question: "Which of the following choices is NOT a for loop clause?",
    answerOptions:["Initialization", "Conditional Test", "Update", "Water bottle",],
    answer: "Water bottle",
}, {
    question: "What does append mean in regards to programming?",
    answerOptions:["To insert content at the end of a specific element", "To round down", "To round up", "To round across",],
    answer: "To insert content at the end of a specific element",
}];

for (i = 0; i < myQuestions.length; i++) {
    console.log(myQuestions[i].question)
    myQuestionsArr.innerHTML = myQuestions[i].question
}