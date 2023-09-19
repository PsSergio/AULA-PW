function manipulaArrays(){
    let cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"];
    cores.push("Laranja");
    cores.pop();
    cores.sort();
    cores.splice(1, 1); 
    let firstI = cores[0];
    let lastI = cores[cores.length-1];
    console.log(`Primeiro elemento: ${firstI}, último numero: ${lastI}`);
}
