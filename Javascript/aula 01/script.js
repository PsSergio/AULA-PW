const Button = document.getElementById("button");
Button.addEventListener("click", login);

function login(){
    var EmailInput = document.getElementById("input-email").value;
    var PassWordInput = document.getElementById("password-input").value;

    if(EmailInput == 'email@gmail.com' && PassWordInput == '123456'){
        alert('Login realizado com sucesso!');
    }else if(!EmailInput || !PassWordInput){
        alert('Preencha os campos!');
    }else{
        alert('Email ou Senha inválidas!'); 
    }
}

// const somarBtn = document.getElementById("somar-btn").addEventListener("click", somar);
// const subtrairBtn = document.getElementById("subtrair-btn").addEventListener("click", subtrair);
// const multBtn = document.getElementById("multiplicar-btn").addEventListener("click", mult);
// const dividirBtn = document.getElementById("dividir-btn").addEventListener("click", dividir);
// const quadradoBtn = document.getElementById("quadrado-btn").addEventListener("click", quadrado);


var res = document.getElementById("res");
function somar(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    res.innerHTML = n1 + n2;
}
function subtrair(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    res.innerHTML = n1 - n2;
}
function mult(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    res.innerHTML = n1 * n2;
}
function dividir(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    res.innerHTML = n1 / n2;
}

function quadrado(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    res.innerHTML = `${n1*n1} e ${n2*n2}`;
}

