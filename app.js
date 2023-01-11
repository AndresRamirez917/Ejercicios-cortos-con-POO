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
// ASOSIACIÓN (RELACIÓN POR PROPIEDAD EN ESTE EJEMPLO), UNIR OBJETOS INDEPENDIENTES QUE PUEDEN
// FUNCIONAR SIN DEPENDER DEL OTRO, EN ESTE CASO SE UNIERON LAS CLASES CAROLINA Y JOSE, PERO LA UNA NO DEPENDE 
// DE LA OTRA PARA FUNCIONAR

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
// const company = {
//     name: "CP Company",
//     employees: []
// }

// class Person{
//     constructor(name, lastname){
//         this.name = name;
//         this.lastname = lastname;
//     }
// }

// const andres = new Person("Andres", "Ramirez");
// const carolina = new Person("Carolina", "Del Rio")

// company.employees.push(andres, carolina)
// console.log(company)




// EJEMPLO 10 COMPOSICIÓN, UN COMPONENTE NO TIENE VIDA INDEPENDIENTE CUANDO PERTENECE 
// A OTRO, SI SE SACARA EL OBJETO ADDRESS DE PERSON, ADDRES NO SERVIRÍA PARA NADA
// ADDRESS DEPENDE LITERALMENTE DE PERSON
// const Person = {
//     name: "soldado",
//     lastname: "ryan",
//     address:{
//         street: "123 concha e su madre",
//         city: "london",
//         country: "united kingdom"
//     }
// }



// EJEMPLO 11 ENCAPSULACIÓN, EVITA QUE POR EJEMPLO SE HAGA UN LLAMADO A UNA FUNCIÓN Y SE LE ASIGNE
// UN VALOR QUE REESCRIBA LA FUNCIÓN Y POR ENDE TODA SU FUNCIONALIDAD,  EN ESTE EJEMPLO NO SE PUEDE
// ACCEDER A EMPLOYEES POR QUE ESTA DECLARADO SIN EL THIS, POR ESO ES INALCANZABLE DESDE AFUERA, PUEDO
// ACCEDER AL MÉTODO QUE MUESTRA SU CONTENIDO, PERO AL OBJETO COMO TAL NO
// function Company(name){
//  // OBJETO ENCAPSULADO
// let employees = [] 
//  this.name = name,

//  // MÉTODO QUE LO ACCEDE (EMPLOYEES)
//  this.getEmployees = function(){
//     return employees;
//  }

//   // MÉTODO QUE LO ACCEDE (EMPLOYEES)
//  this.addEmployees = function(employee){
//    employees.push(employee)
//  }
// }

// const company = new Company("coca cola")
// const company2 = new Company("pepsi")

// console.log(company)
// console.log(company2)

// // PUEDO ACCEDER AL OBJETO EMPLOYEES PEEEEEERO ÚNICAMENTE A TRAVÉS DEL MÉTODO QUE LO LLAMA
// company.addEmployees({name: "Carolina"})
// company2.addEmployees({name: "Andres"})

// console.log(company.getEmployees())
// console.log(company2.getEmployees()) 
// console.log(company.employees)//=UNDEFINED




/**
 * EJEMPLO 12 HERENCIA CON ECMA 5 Y ECMA 6
 */

// ECMA 5
// function Person() {
//     this.name = "",
//     this.lastname = ""
// }

// function Programmer(){
//     this.language = ""
// }

// Programmer.prototype = new Person()

// console.log(Programmer)
// console.log(Person)

// const person = new Person();
// person.name = "Carolina",
// person.lastname = "Del Rio"
// console.log(person)

// const programmer = new Programmer();
// programmer.language = "Javascript",
// programmer.name = "Andres",
// programmer.lastname = "Ramirez"
// console.log(programmer)

// ECMA 6
// class Person{
//     constructor(name, lastname, age){
//         this.name = name,
//         this.lastname = lastname,
//         // SI AGREGO ESTA PROPIEDAD, TODOS LOS OBJETOS QUE HEREDEN DE PERSON TENDRAN LA PROPIEDAD AGE
//         this.age = 0
//     }
// }

// class Programmer extends Person{
//     constructor(name, lastname, language){
//         super(name, lastname);
//         this.language = language
       
//     }
// }

// // COMO ESTE OBJETO LLAMA A PERSON ACEPTA LOS VALORES PASADOS POR EL CONSTRUCTOR
// const person = new Person("Carolina", "Del Rio");
// console.log(person)

// // COMO ESTE OBJETO HEREDA DE PERSON NO RECIBE POR CONSTRUCTOR LOS PARAMETROS COMO PERSON
// // DEBO EN SUPER() INGRESAR LOS OTROS PARÁMETROS QUE VA A HEREDAR DE PERSON, EN ESTE CASO
// // NAME Y LASTNAME Y EN SU CONSRUCTOR TAMBIÉN
// const programmer = new Programmer("Andres", "Ramirez", "Javascript",);
// console.log(programmer)




/**
 *  EJEMPLO 14 POLIMORFISMO
 *  SOBRECARGA - UN MÉTODO PUEDE RECIBIR DIFERENTES TIPOS DE DATOS Y DAR UNA RESPUESTA
 *  DE ACUERDO A LO QUE SE NECESITE, POR EJEMPLO, UN MÉTODO CON EL MISMO NOMBRE QUE 
 *  DEVUELVA EL NÚMERO DE CARACTERES DE UN ENTERO O DE UN STRING, ES EL MISMO MÉTODO, 
 *  PERO HACE DIFERENTES COSAS
 */

// SE USA LA SOBRE CARGA EN EL MÉTODO GRACIAS A QUE SE CONVIERTE A CADENA EL PARÁMETRO 
function countItems(x){
    return x.toString().length
}

console.log("Número de letras de la palabra madre " + countItems("madre"))
console.log("Número de enteros del número 1000 " + countItems(1000))

// PARA QUE LA SOBRECARGA FUNCIONE EN ESTE MÉTODO SE TIENEN QUE INICIALIZAR LOS PARÁMETROS A 0
// Y ASÍ PUEDA RECIBIR 1, 2 O 3 PARÁMETROS
function sum(x = 0, y = 0, z = 0){
    return x + y + z
}

console.log(sum(6))
console.log(sum(6, 5))
console.log(sum(6,7,9))