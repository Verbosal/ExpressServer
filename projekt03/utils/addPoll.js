let field = document.getElementById("choiceField");
let templateChoice = document.getElementById("1");

function addPoll(addElement) {
    field.appendChild(templateChoice.cloneNode)
    console.log(document.getElementsByClassName("choice").length);
}