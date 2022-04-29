/* 
Algoritmo para verificar se um número é ímpar

Passo 1: Solicitar ao console do portão o número que será verificado.
Passo 2: Verifique se o console do portão imprimiu o número.
  Se imprimiu guarde o número.
  Senão volte um passo.

Passo 3: Verifique se o número dividido por 2 tem resto diferente de 0
Passo 4: Imprima o valor do número e o texto "é ímpar".
*/

const randomNumbers = [10, 25, 30, 45, 50, 65, 70];

const oddNumbers = randomNumbers.filter (randomNumber => randomNumber % 2 === 1 ) 
/* console.log(oddNumbers); */
