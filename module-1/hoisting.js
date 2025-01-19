// Variable and function declarations are moved to the top of their containing scope during the compilation phase, before code execution.

// Variable and function declarations are moved to the top of their containing scope during the compilation phase, before code execution.

function getWeather() {
  return "Today's weather is warm and sunny"
}

console.log(getWeather()) // What will this log?

console.log(getNews()) // What will this log?

function getNews() {
  return "A new swimming pool has opened in the town centre..."
}

console.log(trafficInfo) // What will this log?

let trafficInfo = 'All roads are busy right now'

//? Temporal dead zone
