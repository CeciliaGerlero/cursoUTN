const alumnos = [
    {
        nombre: "JUan1",
        nota: 10
    },
    {
        nombre: "JUan2",
        nota: 6
    },
    {
        nombre: "JUan2",
        nota: 2
    },
    {
        nombre: "JUan3",
        nota: 10
    },
    {
        nombre: "JUan4",
        nota: 7
    },
    {
        nombre: "JUan5",
        nota: 6
    },
    {
        nombre: "JUan6",
        nota: 8
    },
    {
        nombre: "JUan7",
        nota: 9
    }
];

console.log(alumnos)

const aprobados = alumnos.filter(function (alumno) {
    return alumno.nota >= 7;
})

console.log(aprobados)
