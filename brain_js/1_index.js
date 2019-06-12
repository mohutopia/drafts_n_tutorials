// introduction and working with numbers


// import and configure the neural network
const brain = require("brain.js")

const config = {
 hiddenLayers :  [3] // a single layer with three neurones
}

const net = new brain.NeuralNetwork(config)

// defining the data set of colors and brightnesses
const colors = [
 { green: 0.2, blue: 0.4 },
 { green: 0.4, blue: 0.6 },
 { red: 0.2, green: 0.8, blue:0.8 },
 { green: 1, blue: 1 },
 { red: 0.8, green: 1, blue: 1 },
 { red: 1, green: 1, blue: 1 },
 { red: 1, green: 0.8, blue: 0.8 },
 { red: 1, green: 0.6, blue: 0.6 },
 { red: 1, green: 0.4, blue: 0.4 },
 { red: 1, green: 0.31, blue: 0.31 },
 { red: 0.8 },
 { red: 0.6, green: 0.2, blue: 0.2 }
]

const brightness = [
 { dark: 0.8 },
 { neutral: 0.8 },
 { light: 0.7 },
 { light: 0.8 },
 { light: 0.9 },
 { light: 1 },
 { light: 0.8 },
 { neutral: 0.7, light: 0.5 },
 { dark: 0.5, neutral: 0.5 },
 { dark: 0.6, neutral: 0.3 },
 { dark: 0.85 },
 { dark: 0.9 }
]

// pushing the data in the form of an object
const trainingData = []
for (let i = 0; i < colors.length; i++) {
 trainingData.push({
  input: colors[i],
  output: brightness[i]
 })
}

// train the defined neural net by entering the data set
// for now, rather than logging out what happens in the neural net
// we want to get the stats our stats of what happens at the very end
const stats = net.train(trainingData
 // we can log out what's happening in the neural net, like iterations and training error
 // , {
 //  log: (error) => console.log(error),
 //  logPeriod: 100
 // } 
 )

console.log(stats) //= { error: 0.004994662563372902, iterations: 1286 }

// try to input some data in the form of an object {red, green, blue} to see the output {dark, neutral, light}
console.log(net.run({
 red: 0.9
}))
//= { dark: 0.9453088641166687,
//= neutral: 0.019635265693068504,
//= light: 0.004293675068765879 }
