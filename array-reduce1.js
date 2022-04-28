const phasesScore = [ 

    { name: 'Daniel Sonobe', score: 220 },
    { name: 'Pedro Fratelli', score: 550 },
    { name: 'Thaís Sonobe', score: 450 },
    { name: 'Anita Fratelli', score: 350 },
    { name: 'Daniel Sonobe', score: 220 },
    { name: 'Thaís Sonobe', score: 150 },
    { name: 'Anita Fratelli', score: 550 },
    { name: 'Carolina Sonobe', score: 250 },
    { name: 'Pedro Fratelli', score: 390 },
    { name: 'Carolina Sonobe', score: 50 }

]

const danielScore = phasesScore ((accumulator, phaseScore) => {

    if (phaseScore.name === 'Daniel Sonobe') {

        return accumulator + phaseScore.score
    }

    return accumulator 

}, 0);

console.log (danielScore);