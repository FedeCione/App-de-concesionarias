let autos = require('./autos');

let concesionaria = {
    autos : autos,
    buscarAuto : function (patente) {
        let autoEncontrado = autos.find(auto => auto.patente == patente);
        if(autoEncontrado){
            return autoEncontrado;
        } else{
            return null;
        }
    },
    venderAuto : function(patente) {
        let auto = this.buscarAuto(patente);
        if(auto.vendido == false){
            auto.vendido = true;
            return auto;
        }
    },
    autos : autos,
    autosParaLaVenta : function () {
        return autos.filter(auto => auto.vendido == false);
    },
    autosNuevos : function () {
        let autosParaLaVenta = this.autosParaLaVenta();
        return autosParaLaVenta.filter(auto => auto.km <= 100);
    },
    listaDeVentas: function (){
        let autosVendidos = autos.filter(auto => auto.vendido == true);
        return autosVendidos.map(auto => auto.precio);
    },
    totalDeVentas : function (){
        let vendidos = this.listaDeVentas();
        let total = vendidos.length !== 0 ? vendidos.reduce((acum, num) => acum + num) : 0;
        return total;
    },
    puedeComprar: function (auto, capacidadDePago){
        let capacidadDePagoEnCuotas = capacidadDePago / auto.cuotas;
        let montoCuota = auto.precio / auto.cuotas;
        if(auto.precio <= capacidadDePago && capacidadDePagoEnCuotas >= montoCuota){
            return "Puedes comprar este auto";
        } else{
            return "No puedes comprar este auto";
         }
    },
    autosQuePuedeComprar: function (persona){
        let autosDisponibles = this.autosParaLaVenta();
        let autosQuePuedeComprar = [];
        autosDisponibles.forEach(auto => {
            if(this.puedeComprar(auto, persona)){
                autosQuePuedeComprar.push(auto);
            }
        });
        return autosQuePuedeComprar;
    }
}

module.exports = concesionaria;