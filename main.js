const form = document.getElementById('form-atividade');
const imgaprovado = '<img scr="./aprovado.png" alt="emoji celebrando">';
const imgreprovado = '<img scr="./reprovado.png" alt="emoji pensativo">';
const atividade = []; // Array para armazenar as atividades
const notas = []; // Array para armazenar as notas
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima para aprovação: "));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarLinha();
    atualizaTabela();
    atualizaMédiaFinal();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`A atividade: $(inputNomeAtividade.value) já foi adicionada!`);
    } else { 
    atividade.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;  
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgaprovado : imgreprovado}</td>`;
    linha += '</tr>';

    linhas += linha; 

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
};

function atualizaMédiaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
};

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
};
