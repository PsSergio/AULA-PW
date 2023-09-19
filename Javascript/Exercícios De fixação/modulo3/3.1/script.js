function calculadora(){
    let n1 = Number(prompt("Digite o primeiro numero: "));
    let n2 = Number(prompt("Digite o segundo numero: "));
    let repeat = true;

    while(repeat){
        let op = prompt("Digite a operação (somar, subtrair, multiplicar, dividir): ");
        repeat = false;
        switch(op){
            case "somar":{
                somar(n1, n2);
                break
            }
            case "subtrair":{
                subtrir(n1, n2);
                break
            }
            case "multiplicar":{
                multiplicar(n1, n2);
                break;
            }
            case "dividir":{
                dividir(n1, n2);
                break;
            }
            default:{
                repeat = true
            }
        }
    }
}

function somar(n1, n2){
    console.log(n1+n2);
}

function subtrir(n1, n2){
    console.log(n1-n2);
}

function multiplicar(n1, n2){
    console.log(n1*n2);
}

function dividir(n1, n2){
    if(n2 != 0)
        console.log(n1/n2);
    else
        console.log("Nao é possivel dividir por 0");
}