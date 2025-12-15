let field;
let templateChoice;

function loaded() {
    field = document.getElementById("choiceField");
    templateChoice = document.getElementById("1");
}

function addPoll(addElement) {
    field.appendChild(templateChoice.cloneNode())
    console.log(document.getElementsByClassName("choice").length);
}

function removePoll(removeElement) {

}

function changeFormat() {
    
}