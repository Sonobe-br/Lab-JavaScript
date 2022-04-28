const products = [

    { name: 'Mouse sem fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de sinal wi-fi', price: 44 }
    
]

const saleProducts = products.map (product => {

    if (product.price >= 30) {

        return {
            name: product.name,
            price: product.price / 2 
        }

    } 

    return product;

})

console.log(saleProducts);