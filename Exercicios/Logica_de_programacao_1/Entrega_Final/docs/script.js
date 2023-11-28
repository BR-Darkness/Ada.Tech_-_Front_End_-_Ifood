//Lógica de autoincrementar o ID:
incrementCounter = (function() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }
})();

//Construtor Atividade
class Atividade {
    constructor(nome, descricao, responsavel) {
        this.id = incrementCounter();
        this.nome = nome ? nome : "Atividade sem Nome";
        this.descricao = descricao ? descricao : "Atividade sem Descrição";
        this.atividadeItem = [];
        this.responsavel = responsavel ? responsavel : "Atividade sem Responsavel";
    }
}

let listaDeAtividades = [];

//EXIBIR LISTA DE ATIVIDADES:

const exibirLista = () => { atualizarLista(listaDeAtividades); }

const atualizarLista = (array) => {
    let data = '';

    array.map( (atv, index) => {
        data += 
        `
        <li class="card">  
            <div class="card-actions">
                <p class="atv-id">#${atv.id}</p>
                <button class="btn-editar" onclick="editarDescricaoAtividade(${atv.id})"><img src="img/edit.svg" alt="Editar Tarefa" width="20px" height="20px"></button>
                <button class="btn-remover" onclick="removerAtividadePorID(${atv.id})"><img src="img/delete.svg" alt="Deletar Tarefa" width="20px" height="20px"></button>
            </div>
            <div>
                <h3 class="atv-nome">${atv.nome}</h3>
                <p class="atv-desc">${atv.descricao}</p>
                <p class="atv-resp"><b>${atv.responsavel}</b></p>
            </div>
        </li>
        `
    });
    document.getElementById('List').innerHTML = data;
}

//ADICIONAR UMA ATIVIDADE
const adicionarAtividade = () => {
    //logica de adicionar uma nova atividade
    let nome = prompt('Informe o nome:');
    let descricao = prompt('Informe a descricao:');
    let responsavel = prompt('Informe o responsavel:');
    let novaAtividade = new Atividade(nome, descricao, responsavel);

    listaDeAtividades.push(novaAtividade);
    exibirLista();
}

//REMOVER UMA ATIVIDADE
const removerAtividadePorID= (IDaSerRemovido) => {
    //logica de remover atividade
    listaDeAtividades = listaDeAtividades.filter(item => item.id != IDaSerRemovido);
    exibirLista();
    // atualizarLista(aa)
}

//PESQUISAR UMA ATIVIDADE
const buscarAtividadePorID = () => {
    //logica de buscar atividade
    let termoBuscado = prompt("Informe a ID da atividade a ser buscada:")
    let resultadoBusca = listaDeAtividades.filter(item => item.id == termoBuscado);
    atualizarLista(resultadoBusca);
}

//EDITAR DESCRICAO DE UMA ATIVIDADE
const editarDescricaoAtividade = (index) => {
    //logica para editar descricao da atividade
    let atv = listaDeAtividades.filter(item => item.id == termoBuscado).length;
    atv.descricao = prompt('Informe a nova descricao:');
    exibirLista();
}