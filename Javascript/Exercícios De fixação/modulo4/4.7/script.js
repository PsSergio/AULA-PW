function manipulaArrays(){
    let cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"];
    cores.push("Laranja");
    cores.pop();
    cores.sort();
    cores.splice(1, 1);
    cores.unshift("fucsia"); 
    console.log(cores);
}