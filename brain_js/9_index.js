// simple reinforcement learning
// start with half our set of data then teach our neural net
const trainingData = [
 { input: [0, 0], output: [0] },
 { input: [0, 1], output: [1] },
 // { input: [1, 0], output: [1] },
 // { input: [1, 1], output: [0] }
]

const brain = require("brain.js")
const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

net.train(trainingData)

console.log("Before reinforcement")
console.log(Array.from(net.run([0, 0]))) // output: 0.05 which is correct
console.log(Array.from(net.run([1, 0]))) // output: 0.06 it didn't learn it yet

trainingData.push(
 { input: [1, 0], output: [1] }
)

net.train(trainingData)
console.log("After reinforcement")
console.log(Array.from(net.run([0, 0]))) // output: 0.05 which is correct
console.log(Array.from(net.run([1, 0]))) // output: 0.91 which is correct