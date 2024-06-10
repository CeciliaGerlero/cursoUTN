const datosUsuarios = [
    {
        nombre: "Flavia",
        password: "1234"
    },
    {
        nombre: "Sandra",
        password: "1344"
    },
    {
        nombre: "Virginia",
        password: "1233"
    },
    {
        nombre: "Clara",
        password: "7844"
    },
]

console.log(datosUsuarios)

const soloPassword = datosUsuarios.map(function(p){
    return p.password
})

console.log(soloPassword)