var alunos = document.querySelectorAll(".aluno");
var tabela = document.querySelector("table");
const linhas = document.querySelectorAll('table tbody tr');
const colunas = document.querySelectorAll('table tbody tr td');
const cabecalho = document.querySelectorAll('table thead tr th');
tabela.addEventListener("dblclick", function(event) {
    const elementoClicado = event.target
    if(elementoClicado != linhas && elementoClicado != colunas && elementoClicado != cabecalho){
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500);
    }
});
