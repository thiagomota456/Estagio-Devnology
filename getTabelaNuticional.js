/*****************************************
 * E preciso ter os objetos DadoNutricional
 * e DadosNutricionais declarados antes
 * de usar o codigo abaixo no console
 **********************************/

let tabelaDeDadosnuticionais = new DadosNutricionais();

// Selecionando a tabela
let table = document.querySelector("#panel_nutrition_facts_table_content > div > table");

//Seleciona e salva lbals da coluna
let comoVendidoLabel = table.querySelector("thead > tr > th:nth-child(2)").innerHTML
let porProporcaoLabel = table.querySelector("thead > tr > th:nth-child(3)").innerHTML
let comparadoALabel = table.querySelector("thead > tr > th:nth-child(4)").innerHTML

tabelaDeDadosnuticionais.setDadoNutricional('labels', comoVendidoLabel, porProporcaoLabel, comparadoALabel);

// Percorrendo todas as linhas da tabela e extraindo os dados
let linhas = table.querySelectorAll("tbody > tr");
linhas.forEach(function (linha, index) {
    let nomeDado = linha.querySelector("td:first-child").textContent.trim();
    let comoVendido = linha.querySelector("td:nth-child(2) > span").textContent.trim();
    let porPorcao = linha.querySelector("td:nth-child(3) > span").textContent.trim();
    let comparadoA = linha.querySelector("td:nth-child(4) > span").textContent.trim();

    tabelaDeDadosnuticionais.setDadoNutricional(nomeDado, comoVendido, porPorcao, comparadoA);
});

