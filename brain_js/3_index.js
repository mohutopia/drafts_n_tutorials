// learn to count to 5 : recurrent neural network

const trainingData = [
 [1, 2, 3, 4, 5],
 [5, 4, 3, 2, 1]
]

const brain = require("brain.js")
// initiate the "long short time memory time step" class
const net = new brain.recurrent.LSTMTimeStep()

// train the neural net and log out the outcome
net.train(trainingData, { log: (status) => console.log(status) })
console.log("\nThe neural network is done learning\n")

console.log(net.run([1, 2, 3, 4])) // output 5
console.log(net.run([5, 4, 3, 2])) // output 1