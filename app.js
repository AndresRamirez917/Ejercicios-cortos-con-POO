function showName(){
    return (user.name + " " + user.lastname)
}

const user = {
    name : "andres",
    lastname : "ramirez",
    age: 43,
    fullname : showName
}

console.log(user.fullname())