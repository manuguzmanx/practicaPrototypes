function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const manu = new Cliente('Manuu', 180000);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría de ${categoria}`;
}

console.log(formatearCliente(manu));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 1800000, 'Cursos en línea');

console.log(formatearEmpresa(CCJ));