document.getElementById("button").addEventListener("click", addLista);

function addLista(){
    document.getElementsByClassName("res-container")[0].style.display = 'flex'
    const InputValue = document.getElementById("inputLista").value;
    const LiElement = document.createElement("li");
    LiElement.innerHTML = InputValue;
    document.getElementById("ul").appendChild(LiElement);
}