console.log("Starting my first Node JS application")

const finance = require("./PangTehWee_PersonalFinanaceManagement.js")

console.log(finance.setName("Pang Teh Wee"))


console.log(finance.addIncome("Software","30000"))
console.log(finance.addIncome("Cleaning","300"))
console.log(finance.addIncome("Bitcoin","400"))
console.log(finance.addIncome("Bodyguard","12000"))
console.log(finance.addIncome("YouTuber","12000"))

console.log(finance.addExpenses("YouTube","900"))
console.log(finance.addExpenses("Karting","10000"))
console.log(finance.addExpenses("Dentist","400"))

console.log(finance.setBudget(30000))

console.log(finance.deleteIncome("Cleaning"))

console.log(finance.deleteExpenses("Dentist"))

console.log(finance.updateExpenses("Karting","15000"))
console.log(finance.updateIncome("Hello","1000000"))


console.log(finance.displayAllInfo())