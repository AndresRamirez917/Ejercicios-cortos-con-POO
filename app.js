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
//     deposit(quantity){
//        this.amount = this.amount + quantity
//     }, 
//     witdraw(quantity){
//         this.amount = this.amount - quantity
//     }
// }

// account.deposit(300)
// console.log("Saldo después del depósito " + account.amount)
// account.witdraw(50)
// console.log("Saldo después del retiro " + account.amount)




// EJEMPLO 4 CONSTRUCTOR "GENERADOR DE OBJETOS"
// const user = {
//     name : "andres",
//     lastname : "ramirez",
//     age : 43,
//     showName(){
//         return "Nombre " + this.name + " Apellido " + this.lastname + " Edad " + this.age
//         // O return `${this.name} ${this.lastname}`
//     }
// }

// function Person() {
//         this.name = "",
//         this.lastname = "", 
//         this.age = 0,
//         // LA FUNCIÓN SHOWNAME OBLIGATORIAMENTE SE DEBE DECLARAR DE ESTA MANERA
//         this.showName = function(){
//             return `Nombre: ${this.name} Apellido: ${this.lastname} Edad: ${this.age}`
//         }
//     }

// const user2 = new Person();
// user2.name = "Jose"
// user2.lastname = "Repelin"
// user2.age = 50
// console.log(user2.showName())
    

// EJEMPLO 5 USO DE LA PALABRA NEW
// function Person(){
//     // CON LA LÍNEA "USE ESTRICT" EVITO QUE LAS PROPIEDADES DE ESTE OBJETO SE LE ASIGNEN A UN OBJETO 
//     // QUE ESTE EN UN NIVEL JERARQUICO MAYOR AL DE PERSON, (EN ESTE CASO SE LE ASIGNARIAN
//     // ESAS PROPIEDADES AL OBJETO WINDOWS) EN CASO TAL DE QUE LA INSTANCIA DE UN NUEVO
//     // OBJETO PERSON NO SE HAGA CON LA PALABRA NEW
//     "use estrict"
//     this.name = "",
//     this.lastname = ""
// }

// // SI OMITO LA PALABRA NEW, LAS PROPIEDADES SE SE ASIGNARAN AL OBJETO WINDOWS EN ESTE CASO EN PARTICULAR
// const person = new Person()
// person.name = "Diego"
// console.log(person.name)




// EJEMPLO 6 PROTOTYPE
// function Person(name, lastname){
//     this.name = name,
//     this.lastname = lastname,
//     this.displayName = function(){
//         return `${this.name} ${this.lastname}`
//     }
// }

// const luigi = new Person("Luigi", "Bros");
// // CAMBIO DINAMICAMENTE DE PROPIEDADES EN OBJETOS
// luigi.lastname = "Bronx"
// const mario = new Person("Mario", "Bros");
// console.log(luigi.displayName());
// console.log(mario.displayName())

// // CAMBIO DINAMICAMENTE DE FUNCIONES EN OBJETOS
// luigi.greet = function(){
//     console.log(`Hola ${this.name}, este método solo lo puedes usar tú`)
// }

// luigi.greet()

// // SI QUIERO USAR EL MÉTODO GREET PARA MARIO PUEDO AGREGAR EL MÉTODO EN LA FUNCIÓN PERSON
// // PERO LO MAS RECOMENDADO ES HACERLO CON LA PROPIEDAD PROTOTYPE DE LA FUNCIÓN PERSON
// // QUE ALTERA EL CONSTRUCTOR AGREGANDO FUNCIONALIDADES QUE NOSOTROS NECESITEMOS
//  Person.prototype.greet = function(){
//     return `Ahora gracias a prototype ${this.name} puede usar también el método greet`
//  }

//  console.log(mario.greet())




// EJEMPLO 7 CLASS (LAS CLASES SON CONJUNTOS DE MÉTODOS QUE PERMITEN DEFINIR UN OBJETO)
// class Person{
//     constructor(name, lastname){
//         this.name = name,
//         this.lastname = lastname
//     }

//     greet(){
//         return `Hola ${this.name}`
//     }
// }

// const person1 = new Person("Marco", "polo");
// console.log(person1)
// const person2 = new Person("largo", "Se cierra")
// console.log(person2)
// console.log(person1.greet())



// EJEMPLO 8 PRINCIPIOS DE LA POO 
// ASOSIACIÓN (RELACIÓN POR PROPIEDAD EN ESTE EJEMPLO), UNIR OBJETOS INDEPENDIENTES

// class Person{
//     constructor(name, lastname){
//         this.name = name,
//         this.lastname = lastname
//     }
// }

// const jose = new Person("jose", "perez");
// const carolina = new Person("carolina", "del rio")
// carolina.parent = jose
// console.log(jose)
// console.log(carolina)

// EJEMPLO 9 AGREGACIÓN
const company = {
    name: "CP Company",
    employees: []
}

class Person{
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }
}

const andres = new Person("Andres", "Ramirez");
const carolina = new Person("Carolina", "Del Rio")

company.employees.push(andres, carolina)
console.log(company)