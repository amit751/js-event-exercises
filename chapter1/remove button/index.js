const buttons =document.getElementsByClassName("remove-button");
const divs =document.getElementsByClassName("pane");

for (const button of buttons) {
    button.addEventListener("click", function(event){
        event.currentTarget.parentNode.remove();
    });
}

