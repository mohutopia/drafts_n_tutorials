// to normalize the input
const toArray = (string) => {
 if (string.length !== 7*7) throw new Error('String in wrong size')
 string.split('').map(toNumber)
}

const toNumber = (char) => {
 return char ===  '#' ? 1 : 0
}

//what the neural net will learn
const zero = toArray(
 '#######' +
 '#     #' +
 '#     #' +
 '#     #' +
 '#     #' +
 '#     #' +
 '#######'
);
const one = toArray(
 '   #   ' +
 '   #   ' +
 '   #   ' +
 '   #   ' +
 '   #   ' +
 '   #   ' +
 '   #   '
);
const two = toArray(
 '#######' +
 '#     #' +
 '      #' +
 '     # ' +
 '   #   ' +
 ' #     ' +
 '#######'
);
const three = toArray(
 '#######' +
 '      #' +
 '      #' +
 ' ######' +
 '      #' +
 '      #' +
 '#######'
);
const four = toArray(
 '#     #' +
 '#     #' +
 '#     #' +
 '#######' +
 '      #' +
 '      #' +
 '      #'
);
const five = toArray(
 '#######' +
 '#      ' +
 '#      ' +
 '#######' +
 '      #' +
 '      #' +
 '#######'
);
const six = toArray(
 '      #' +
 '    #  ' +
 '  #    ' +
 ' ######' +
 '#     #' +
 '#     #' +
 '#######'
);
const seven = toArray(
 '#######' +
 '     # ' +
 '    #  ' +
 '   #   ' +
 '  #    ' +
 ' #     ' +
 '#      '
);
const eight = toArray(
 '#######' +
 '#     #' +
 '#     #' +
 '#######' +
 '#     #' +
 '#     #' +
 '#######'
);
const nine = toArray(
 '#######' +
 '#     #' +
 '#     #' +
 '###### ' +
 '    #  ' +
 '   #   ' +
 ' #     '
);

// import the neural net
const brain = require("brain.js")
const net = new brain.NeuralNetwork()

// build the training data
const trainingData = [
 {
  input: zero,
  output: { zero: 1}
 },
 {
  input: one,
  output: { one: 1}
 },
 {
  input: two,
  output: { two: 1}
 },
 {
  input: three,
  output: { three: 1}
 },
 {
  input: four,
  output: { four: 1}
 },
 {
  input: five,
  output: { five: 1}
 },
 {
  input: six,
  output: { six: 1}
 },
 {
  input: seven,
  output: { seven: 1}
 },
 {
  input: eight,
  output: { eight: 1}
 },
 {
  input: nine,
  output: { nine: 1}
 }
]

net.train(trainingData)
// D:\programming\javascript\brain\node_modules\brain.js\dist\neural-network.js:1244
//   if (value.buffer instanceof ArrayBuffer) {
//             ^
// TypeError: Cannot read property 'buffer' of undefined

net.run(toArray( // doesn't work because of the error above
 '#######' +
 '#     #' +
 '#     #' +
 '#######' +
 '#     #' +
 '#     #' +
 '#######'
))

const result = brain.likely(toArray(
 '#######' +
 '#     #' +
 '#     #' +
 '#######' +
 '#     #' +
 '#     #' +
 '#######'
), net) // a built in tool to output the most likely outcome
console.log(result)