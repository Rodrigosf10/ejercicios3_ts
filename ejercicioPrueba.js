var Anios = /** @class */ (function () {
    function Anios() {
    }
    Anios.prototype.siglos = function () {
        var anioSolicitado = parseFloat(prompt("Ingresa el año a saber: "));
        var siglos = ((anioSolicitado / 100) + 1);
        if (anioSolicitado > 2000) {
            console.log("El a\u00F1o ".concat(anioSolicitado, " esta en el siglo ").concat(siglos.toFixed(0)));
        }
        else {
            console.log("El a\u00F1o ".concat(anioSolicitado, " esta en el siglo ").concat(siglos.toFixed(0) - 1));
        }
    };
    return Anios;
}());
var objeto = new Anios;
objeto.siglos();
