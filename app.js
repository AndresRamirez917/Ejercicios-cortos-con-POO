// EJEMPLO 1 
// function showName(){
//     return (user.name + " " + user.lastname)
// }

// const user = {
//     name : "andres",
//     lastname : "ramirez",
//     age: 43,
//     fullname : showName
// }

// console.log(user.fullname())


// EJEMPLO 2 USANDO THIS. PARA LLAMAR LAS PROPIEDADES DEL OBJETO DENTRO DE UN MÉTODO
// const user = {
//     name : "andres",
//     lastname : "ramirez",
//     age : 43,
//     showName(){
//         return "Nombre " + this.name + " Apellido " + this.lastname + " Edad " + this.age
//     }
// }

// console.log(user.showName())

// const account = {
//     number : "123412341234123412",
//     amount : 100,
//     deposit(){
//        this.amount = this.amount + 100
//     }, 
//     witdraw(){
//         this.amount = this.amount - 200
//     }
// }

// account.deposit()
// console.log("Saldo después del depósito " + account.amount)
// account.witdraw()
// console.log("Saldo después del retiro " + account.amount)

// EJEMPLO 3 PASANDO LA CANTIDAD A DEPOSITAR Y RETIRAR A TRAVÉS DE SUS MÉTODOS
const user = {
    name : "andres",
    lastname : "ramirez",
    age : 43,
    showName(){
        return "Nombre " + this.name + " Apellido " + this.lastname + " Edad " + this.age
    }
}

console.log(user.showName())

const account = {
    number : "123412341234123412",
    amount : 100,
    deposit(quantity){
       this.amount = this.amount + quantity
    }, 
    witdraw(quantity){
        this.amount = this.amount - quantity
    }
}

account.deposit(300)
console.log("Saldo después del depósito " + account.amount)
account.witdraw(50)
console.log("Saldo después del retiro " + account.amount)