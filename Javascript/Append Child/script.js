document.getElementById("submit").addEventListener("click", CreatObject);
let carrinhoDeCompras = [];
let i = 0;

function CreatObject(){
    let NomeProduto = document.getElementById("nomeProduto").value;
    let MarcaProduto = document.getElementById("marcaProduto").value;
    let PrecoProduto = Number(document.getElementById("precoProduto").value);

    let ProdutoObejct = {
        nome_produto: NomeProduto,
        marca_produto: MarcaProduto,
        preco_produto: PrecoProduto
    };

    carrinhoDeCompras.push(ProdutoObejct);
    i++;
    ShowObjectInHTML(i, NomeProduto, MarcaProduto, PrecoProduto);
}

function ShowObjectInHTML(i, NomeProduto, MarcaProduto, PrecoProduto){
    const ResContainer = document.getElementsByClassName("res-container")[0];
    let NewProduct = document.createElement("div");
    NewProduct.classList.add("product");

    NewProduct.innerHTML = 
    `
    <div class="indice-produto">${i}</div>
    <div class="nome-produto">Nome: ${NomeProduto}</div>
    <div class="marca-produto">Marca: ${MarcaProduto}</div>
    <div class="preco-produto">Preço: ${PrecoProduto}</div>
    `
    ResContainer.appendChild(NewProduct);
}