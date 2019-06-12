// start working with other data types : strings

// where we can eat freely in any day of the week
const restaurants = {
 "Brilliant Yellow Corral": "Monday",
 "Penny's": "Tuesday",
 "Right Coast Wings": "Wednesday",
 "The Deslusion Last Railway Car": "Thursday",
 "Fun Day Inn": "Friday",
 "JHOP": "Saturday",
 "Owls": "Sunday"
}

// input { monday, tuesday, ...}
// output { penny's, fun day inn, ...}

const trainingData = []
for (let restaurant in restaurants) {
 const dayOfWeek = restaurants[restaurant]
 trainingData.push({
  input: {[dayOfWeek] : 1},
  output: {[restaurant] : 1}
 })
}

const brain = require("brain.js")
const net = new brain.NeuralNetwork({hiddenLayers: [3]})

const stats = net.train(trainingData)
console.log(stats)
// console.log(net.run({"Monday": 1}))

// take in the day of the week as argument, put it in the neural net
// the neural net gives us a list of predictions for each restaurant
// we iterate over the values given and save the highest prediction
// return the restaurant that has the highest prediction
let restaurantForDay = (dayOfWeek) => {
 const result = net.run({[dayOfWeek] : 1})
 let highestValue = 0
 let highestRestaurantName = ''

 for (let restaurant in result) {
  if (result[restaurant] > highestValue) {
   highestValue = result[restaurant]
   highestRestaurantName = restaurant
  }
 }

 return highestRestaurantName
}

console.log(restaurantForDay("Saturday")) // JHOP