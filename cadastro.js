var logado = false;
var mostraFormProduto = false;

if(localStorage.getItem("acesso") == "true"){
    logado = true;
    console.log('entrou');
};



function controleFormProduto(){
    mostraFormProduto = !mostraFormProduto;
    var form = document.getElementById("form");

    if(mostraFormProduto){
        form.style.display = "block";
    }
    else{
        form.style.display = "none";
    }
}

function cadastraProduto(){
    var produtoDescricao = document.getElementById("produtoDescricao");
    var produtoQuantidade = document.getElementById("produtoQuantidade");

    var dados = localStorage.getItem("dadosProdutos");

    if(dados != null){
        localStorage.setItem("dadosProduto", "[]");
        dados = [];
    }

    var  umRegistro = {
        nome: produtoDescricao.value,
        quantidade: produtoQuantidade.value
    }

    dados.push(umRegistro);

    dados.setItem("dadosProduto", JSON.stringify(dados));
    alert("Registro deu certo");

    produtoDescricao.value = "";
    produtoQuantidade.value = ""
}