function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};
    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            servicos: [
                // { id: "1", nome: "Vale refeição", tipo: "Cupom", quantidade: "100", local: "rua da minha casa", descricao: "Vale um almoço grátis, desde que o prato pedido esteja dentre os pratos do dia" }
            ]
        }
    }
    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados))
}
function incluirServico() {
    if (document.getElementById('inputNome').value != ''
        && document.getElementById('inputTipo').value != ''
        && document.getElementById('inputQntd').value != ''
        && document.getElementById('inputLocal').value != '') {

        alert('Serviço Cadastrado com sucesso!');
        //ler dados ls
        let objDados = leDados();
        let strId = nextID();

        //incluir
        let strDescricao;
        let strNome = document.getElementById('inputNome').value;
        let strTipo = document.getElementById('inputTipo').value;
        let strQntd = document.getElementById('inputQntd').value;
        let strLocal = document.getElementById('inputLocal').value;
        if(document.getElementById('inputDescricao').value != ''){
            strDescricao = document.getElementById('inputDescricao').value;
        }else{
            strDescricao = "Não tem descrição";
        }
       

        let novoServico = {
            id: strId,
            nome: strNome,
            tipo: strTipo,
            quantidade: strQntd,
            local: strLocal,
            descricao: strDescricao
        };


        objDados.servicos.push(novoServico);

        //salvar no ls
        salvaDados(objDados);
        window.location.replace("CRUD.html");
    } else {
        alert("Preencha os campos corretamente!");
    }
}
function nextID(){
    let count = 0;
    let num;
    let objDados= leDados();
    for (i = 0; i < objDados.servicos.length; i++) {
        count ++;
    }
    if (count != 0){
        num =  objDados.servicos[count-1].id;
        count = num + 1;
    }
    return count;
}
function imprimeDados() {
    var itens = '';
    let objDados = leDados();
    for (i = 0; i < objDados.servicos.length; i++) {
     itens += `<tr><td>${objDados.servicos[i].id}</td>
            <td>${objDados.servicos[i].nome}</td>
            <td>${objDados.servicos[i].tipo} </td>
            <td>${objDados.servicos[i].quantidade}</td>
            <td>${objDados.servicos[i].local} </td>
            <td>${objDados.servicos[i].descricao}</td>
            <td><button class="btn btn-secondary" onclick="AlteraServico(this)">Alterar</button></td>
            <td><button id="btnDelete"   onclick="deleteServico(this)" class="btn btn-danger">Excluir</button></td> 
            </tr>`
            ;
    }
    document.getElementById('table-servicos').innerHTML = itens;
}

//botoes
document.getElementById('btnFin').addEventListener('click', incluirServico);
