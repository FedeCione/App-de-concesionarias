let concesionaria = require('./concesionarias.js');
let funcionUsada = process.argv[2];
let parametro1 = process.argv[3];
let parametro2 = process.argv[4];

switch (funcionUsada) {
    case "buscarAuto":
        console.log(concesionaria.buscarAuto(parametro1));
        break;
    case "venderAuto":
        console.log(concesionaria.venderAuto(parametro1));
        break;
    case "autosParaLaVenta":
        console.log(concesionaria.autosParaLaVenta());
        break;
    case "autosNuevos":
        console.log(concesionaria.autosNuevos());
        break;
    case "listaDeVentas":
        console.log(concesionaria.listaDeVentas());
        break;
    case "totalDeVentas":
        console.log(concesionaria.totalDeVentas());
        break;
    case "puedeComprar":
        console.log(concesionaria.puedeComprar(parametro1, parametro2));
        break;
}