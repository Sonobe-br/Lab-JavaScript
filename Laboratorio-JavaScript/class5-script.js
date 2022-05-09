/* Objeto */
/* For-in */
const departamentos = {

    nome: 'RH',
    colaboradores: 10
    
}

for (let chave in departamentos) {

    console.log (chave, departamentos.colaboradores); 
    
}

const paletaDeCores = ['Verde', 'Amarelo', 'Azul', 'Branco'];

for (let indice in paletaDeCores) {

    console.log (indice, paletaDeCores[indice]);
}

/* For-of */

for (let paletaDeCor in paletaDeCores) {

    console.log (paletaDeCor);

}