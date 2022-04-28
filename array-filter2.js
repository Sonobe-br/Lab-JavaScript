const users = [

    { name: 'Ada Lovelance', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Bill Gates', premium: true },
    { name: 'Margaret Hamilton', premium: false }

]

const premiumUsers = users.filter (user => user.premium)
console.log (premiumUsers);
