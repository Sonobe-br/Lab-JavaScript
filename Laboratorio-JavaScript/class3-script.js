/* Relógio */
let guardaDistancia = 42.195;
let guardaTempoPercorrido = 2.55; /* horas */

let novoRecordePessoal = 3.00; /* horas */

/* Lógica para transformação dos dados recebidops */
let calculaVelocidadeMedia = (guardaDistancia) / (guardaTempoPercorrido).toFixed(2);
let calculaPaceMedio = parseFloat(guardaTempoPercorrido * 60 / guardaDistancia).toFixed(2); 
/* horas convertido para minutos */

function souCorredor () {

    if (guardaTempoPercorrido <= novoRecordePessoal ) {

        console.log (`Parabéns! Você tem um novo recorde pessoal`)
        
    } else {
        
        console.log ('Parabéns pela prova')

    }

}
souCorredor();

/* Entrega */
console.log (`A sua velocidade média foi de ${calculaVelocidadeMedia} km/h`);
console.log (`O seu pace médio foi de ${calculaPaceMedio} min/km`);


