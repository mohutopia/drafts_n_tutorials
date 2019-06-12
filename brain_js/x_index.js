// recommendation engine

// color preference
const trainingData = [
 { input: { blue: 1 }, output: [1] },
 { input: { red: 1 }, output: [1] },
 { input: { black: 1 }, output: [0] },
 { input: { green: 1 }, output: [0] },
 { input: { brown: 1 }, output: [0] }
]

const brain = require("brain.js")
const net = new brain.NeuralNetwork()
net.train(trainingData)

// it will output if it likes that color (1) or not (0)
console.log(Array.from(net.run({blue: 1})))
console.log(Array.from(net.run({brown: 1})))

trainingData.pop() // to remove that last item before pushing a new one
trainingData.push(
 { input: { brown: 1 }, output: [1] } // it changed its mind and now it likes brown
)
net.train(trainingData)