const cliente = {
    nombre: 'Juan',
    saldo: 18000
}

console.log(cliente);

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const manu = new Cliente('Manuu', 18000);

console.log(manu);