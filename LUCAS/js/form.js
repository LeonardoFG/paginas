var botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var aluno = obtemAlunoDoFormulario(form);
    var alunoTr = montaTr(aluno);
    alunoTr.classList.add("aluno");
    var erros = validaAluno(aluno);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
    if (!validaAluno(aluno)) {
        console.log("aluno inválido");
        return;
    }
    adicionaAlunoNaTabela(aluno);
    form.reset();
    focusNome();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});
function adicionaAlunoNaTabela(aluno) {
    var alunoTr = montaTr(aluno);
    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
}
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
function obtemAlunoDoFormulario(form) {

    var aluno = {
        dataIni: form.dataIni.value,
        nome: form.nome.value,
        exercicio: form.exercicio.value,
        repeticoes: form.repeticoes.value,
        carga: form.carga.value,
        cargaIni: form.cargaIni.value,
        descanso: form.descanso.value,
        descansoSec: form.descansoSec.value,
        dataFinal: form.dataFinal.value,
    }
    return aluno;
}
function montaTr(aluno){
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    alunoTr.appendChild(montaTd(aluno.dataIni, "info-data-ini"));
    alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(montaTd(aluno.exercicio, "info-exercicio"));
    alunoTr.appendChild(montaTd(aluno.repeticoes, "info-repeticoes"));
    alunoTr.appendChild(montaTd(aluno.carga, "info-carga"));
    alunoTr.appendChild(montaTd(aluno.cargaIni, "info-carga-ini"));
    alunoTr.appendChild(montaTd(aluno.descanso, "info-descanso"));
    alunoTr.appendChild(montaTd(aluno.descansoSec, "info-descanso-entre-secoes"));
    alunoTr.appendChild(montaTd(aluno.dataFinal, "info-data-fim"));

    return alunoTr;
}
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
function validaAluno(aluno){
    var erros = [];

    if(aluno.dataIni == "") erros.push("Data de início não preenchida");
    if(aluno.nome.length == 0) erros.push("O nome do Aluno não pode ser em branco");
    if(aluno.exercicio.length == 0) erros.push("O exercício não pode ser em branco");
    if(aluno.repeticoes.length == 0) erros.push("A quantidade de repetições não pode ser Zero");
    if(aluno.carga.length == 0) erros.push("A carga não pode ser Zero");
    if(aluno.cargaIni.length == 0) erros.push("A carga inicial Zero");
    if(aluno.descanso.length == 0) erros.push("O descanso não pode ser Zero");
    if(aluno.descansoSec.length == 0) erros.push("O descanso entre seções não pode ser Zero");
    if(aluno.dataFinal == "") erros.push("Data de final não preenchida");

    return erros;
}
focusNome = function getFocus() {
    document.getElementById("nome").focus();
}