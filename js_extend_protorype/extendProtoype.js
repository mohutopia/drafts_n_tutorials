// extending the prototype of number
Number.prototype.toCelcius = function() {return (this - 32)*(5/9)}
// don't use the arrow function because of the weird proprety of 'this' that makes it global or something

let roundNumber = num => {return Math.floor(num*100)/100}

let inFahrenheit = 100
console.log("A " + inFahrenheit + "° temperature in Fahrenheit.")
console.log("Conversion...")
// to simulate calculation
setTimeout(() => { console.log("It is " + roundNumber(inFahrenheit.toCelcius()) + "°C") }, 1000)