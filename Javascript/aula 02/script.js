const ButtonsArray = document.getElementsByClassName("button");
var Textmath;
var res;
var n2Input = document.getElementById("n2");
var n1Input = document.getElementById("n1");
var n3Input = document.getElementById("n3");
const ButtonGeralArray = document.getElementsByClassName("buttonGeral");
var ElevadoClicked = false;

for (var i = 0; i < ButtonsArray.length; i++) {
    ButtonsArray[i].addEventListener("click", function () { // onclick para fechar "modal" do número elevado
        const buttonElevado = document.getElementById("input-elevado");
        buttonElevado.style.display = 'none';
        ElevadoClicked = false;
    })
}



function elevado() {
    ElevadoClicked = true;
    console.log(ElevadoClicked)
    const buttonElevado = document.getElementById("input-elevado");
    if (buttonElevado.style.display == 'flex') {
        buttonElevado.style.display = 'none';
        ElevadoClicked = false;
        return 0;
    }
    buttonElevado.style.display = 'flex';
}

function closeElevado() {
    document.getElementById("input-elevado").style.display = 'none';
}

function somar() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    Validation();
    res = n1 + n2;
    Textmath = "SOMAR";
    OpSimbolo = '+';
    UptadeRes();
}

function subtrair() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    Validation();
    res = n1 - n2;
    Textmath = "SUBTRAIR";
    OpSimbolo = '-';
    UptadeRes();
}

function divisao() {
    var ResSec = document.getElementsByClassName("res-container")[0];
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    Validation();
    if (n2 == 0) {
        console.log('a');
        n2Input.style.border = '2px solid red';
        ResSec.style.display = 'none';
        return;
    }
    ResSec.style.display = 'block';
    n2Input.style.border = '2px solid black';
    res = n1 / n2;
    Textmath = "DIVISÃO";
    OpSimbolo = '/';
    UptadeRes();
    
}

function multiplicar() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    Validation();
    res = n1 * n2;
    Textmath = "MULTIPLICAR";
    OpSimbolo = 'x';
    UptadeRes();
}

function calcularElevado() {
    var ResSec = document.getElementsByClassName("res-container")[0];
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var n3 = Number(document.getElementById("n3").value);
    Validation();
    Textmath = "POTÊNCIA";
    OpSimbolo = '^';
    for(var i = 0; i < InputsGeral.length; i++){
        if(!InputsGeral[i].value && !InputsGeral[i].value != 0){
            InputsGeral[i].style.border = '2px solid red';
            ResSec.style.display = 'none';
        }
    }
    var TextMathOnHtml = document.getElementById("textMath");
    TextMathOnHtml.innerHTML = Textmath;
    var ResText = document.getElementById("res-info");
    ResText.innerHTML = `${n1}^${n3} = ${n1 ** n3}<br>${n2}^${n3} = ${n2 ** n3}`;
}

function raizQuadrada() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    Validation();
    Textmath = "RAIZ QUADRADA";
    OpSimbolo = '^';
    var TextMathOnHtml = document.getElementById("textMath");
    TextMathOnHtml.innerHTML = Textmath;
    var ResText = document.getElementById("res-info");
    ResText.innerHTML = `√${n1} = ${Math.sqrt(n1)}<br>√${n2} = ${Math.sqrt(n2)}`;
}

function UptadeRes() {
    var TextMathOnHtml = document.getElementById("textMath");
    TextMathOnHtml.innerHTML = Textmath;
    var ResText = document.getElementById("res-info");
    ResText.innerHTML = `${n1.value} ${OpSimbolo} ${n2.value} = ${res}`;
}

var InputsGeral = document.getElementsByClassName("input");

function Validation() {
    var ResSec = document.getElementsByClassName("res-container")[0];
   
    if(!n1Input.value || !n2Input.value){
        n1Input.style.border = '2px solid red';
        n2Input.style.border = '2px solid red';
        ResSec.style.display = 'none';
        console.log(n2Input.style.border)
        return 0;
    }
    ResSec.style.display = 'block';
    n2Input.style.border = '2px solid black';
    n1Input.style.border = '2px solid black';
    n3Input.style.border = '2px solid black';
}
        
