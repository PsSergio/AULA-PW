function criaObjeto(nome, idade, timeFavorito){
    let pessoa = {
        nomePessoa: nome,
        idadePessoa: idade,
        timeFavoritoPessoa: timeFavorito
    }
    console.log(pessoa);
}

function pegaDados(){
    let nome = prompt("Digite o seu nome: ");
    let idade = Number(prompt("Digite a sua idade: "));
    let timeFav = prompt("Digite a sua idade: ");
    criaObjeto(nome, idade, timeFav);
}



