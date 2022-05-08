let operador = prompt();

function tabuada () {

    for (let i = 0; i < 11; i++) {

        console.log ('Tabuada do ' + i);

        for (let j = 0; j < 11; j++) {

            console.log (operador + ' x ' + i + ' = ' + (j * i));
            
        }
        
        
    }
    if (operador === 2) {

        console.log ("Essa é a tabuada do pato") 
    
    } else {

        console.log ("Tente novamente")
    }
    
}
tabuada();
