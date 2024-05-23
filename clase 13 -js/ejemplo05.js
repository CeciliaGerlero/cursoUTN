const num1 = parseInt(prompt(`Ingrese primer nro`, ``));
const num2 = parseInt(prompt(`Ingrese segundo nro`, ``));
const num3 = parseInt(prompt(`Ingrese tercer nro`, ``));

console.log(num1, num2, num3)


if (num1 > num2 && num1 > num3)
    document.write(`el mayor es ${num1}`)
else if (num2 > num3)
    document.write(`el mayor es ${num2}`);
else
    document.write(`el mayor es ${num3}`);
