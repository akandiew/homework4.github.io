var points = 0
var allButtons = document.getElementById("all-buttons")
var checkAnswer = (answer, response) => {
    if (answer === response) points++

}

questions.forEach(function (question){
    var questionT = document.getElementById("question.q")
    questionT.innerText = question.q
    question.o.forEach(function(option, index) {
        var button = document.createElement("button")
        button.addEventListener("click",() => {
        checkAnswer(question.a, index)

        })
        allButtons.append(button)
    })
})

