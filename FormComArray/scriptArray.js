let frutas = ['Abacate', 'Abacaxi', 'Amora', 'Açai', 'Cereja', 'Figo'];

console.log(frutas);

/* Contando a quantidade de frutas */
document.getElementById("qnt-frutas").innerHTML = "<p>" + frutas.length + "</p>";

/* Acessando o primreiro item da lista de frutas */
document.getElementById("primeiro-itemFruta").innerHTML = "<p>" + frutas[0] + "</p>";

/* Acessando qualquer item da lista de frutas */
document.getElementById("terceiro-itemFruta").innerHTML = "<p>" + frutas[2] + "</p>";

/* Acessando o último item da lista de frutas */
document.getElementById("ultimo-itemFrutas").innerHTML = "<p>" + frutas[frutas.length -1] + "</p>";

/* Adicionando um item no final da lista de frutas */
frutas.push("Maçã");

/* Adicionando um item no início da lista de frutas */
frutas.unshift("Kiwi");
console.log(frutas);

/* Removendo um item da lista de frutas (no caso o ÚLTIMO item )*/
frutas.pop();
console.log(frutas);

/* Removendo um item da lista de frutas (no caso o PRIMEIRO item )*/
frutas.shift();
console.log(frutas);

/* 
* Remover um item pela posição do índice; 
* frutas.splice (pos, n);
* A partir da posição (pos) em direção ao fim da array;
* (n) define o número de itens a ser removido;
*/
frutas.splice(2, 3);
console.log(frutas);

/* Ler a array */
frutas.forEach(function(item, indice) {

    console.log(item, indice);
    document.getElementById("listar-frutas").insertAdjacentHTML("beforeend", indice + " - " + item + "<br>");

});

let carros = ["Voyage", "Virtus", "Jetta", "Land Rover", "Audi A1", "BMW X5"];
console.log(carros);

/* Adicionar um item na lista de carros */
document.getElementById("listar-carros").innerHTML = carros.push("Mercedes Benz Classe GLC");
console.log(carros);

/* Remover um item pela posição do indice */
carros.splice(2, 1);
console.log(carros);

/* Ler a array de carros */
carros.forEach(function(item, indice) {

    console.log(item, indice);
    document.getElementById("listar-nomeCarros").insertAdjacentHTML("beforeend", indice + " - " + item + "<br>");

});
