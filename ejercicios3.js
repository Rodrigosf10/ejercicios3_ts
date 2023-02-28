// Ejercicios 3 de TS
var Ejercicios3 = /** @class */ (function () {
    function Ejercicios3() {
    }
    /**
     * Ejercicio 1
     *
     * La asociación de vinicultores tiene como política fijar un precio inicial al kilo de uva, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2.
     * Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por la uva que entrega en un embarque, considerando lo siguiente:
     * Si es de tipo A, se le cargan 20 céntimos al precio inicial cuando es de tamaño 1; y 30 céntimos si es de tamaño 2.
     * Si es de tipo B, se rebajan 30 céntimos cuando es de tamaño 1, y 50 céntimos cuando es detamaño 2.
     * Realice un algoritmo para determinar la ganancia obtenida.
     */
    Ejercicios3.prototype.ejercicio1 = function () {
        var precioInicial = parseFloat(prompt("Precio inicial a fijar del kilo de uvas: "));
        var peso = parseFloat(prompt("Ingrese la cantidad de kilos de uvas a vender: "));
        var tipo = prompt("Seleccione el tipo de uva a vender (A o B): ");
        var tamaño = parseFloat(prompt("Seleccione el tamaño de uva a vender (1 o 2): "));
        var precioFinal = 0;
        var ganancia = 0;
        if (tipo == "A" || tipo == "a") {
            // Aqui se indica el tamano 2 de forma indiscreta por que solo hay 2 tamaños
            if (tamaño == 1) {
                precioFinal = precioInicial + 0.20;
            }
            else {
                precioFinal = precioInicial + 0.30;
            }
            // Aqui se indica el tipo B de forma indiscreta por solo hay 2 tipos
        }
        else {
            if (tamaño == 1) {
                precioFinal = precioInicial - 0.30;
            }
            else {
                precioFinal = precioInicial - 0.50;
            }
        }
        // Inicializar aqui
        ganancia = precioFinal * peso;
        // La funcion: "toFixed(); sirve para especificar la cantidad de decimales que se mostrarán después del punto decimal."
        console.log("La ganancia obtenida de ".concat(peso, " Kg de uvas es de ").concat(ganancia.toFixed(2), " euros."));
        return ganancia;
    };
    /**
     * Ejercicio 2
     *
     * El director de una escuela está organizando un viaje de estudios, y requiere determinar cuánto debe cobrar a
     * cada alumno y cuánto debe pagar a la compañía de viajes por el servicio. La forma de cobrar es la siguiente:
     * si son 100 alumnos o más, el costo por cada alumno es de 65 euros;
     * de 50 a 99 alumnos, el costo es de 70 euros,
     * de 30 a 49, de 95 euros,
     * y si son menos de 30, el costo de la renta del autobús es de 4000 euros, sin importar el número de alumnos.
     * Realice un algoritmo que permita determinar el pago a la compañía de autobuses y lo que debe pagar cada alumno por el viaje.
     */
    Ejercicios3.prototype.ejercicio2 = function () {
        // Ingresar el numero de alumnos que iran al viaje primero para calcular el costo
        var numeroAlumnos = parseFloat(prompt("Ingrese la cantidad de alumnos para calcular el viaje: "));
        var costoAlumno = 0;
        if (numeroAlumnos >= 100) { // 100 o mas
            costoAlumno = 65;
        }
        else if (numeroAlumnos >= 50 && numeroAlumnos <= 99) { // 50 a 99
            costoAlumno = 70;
        }
        else if (numeroAlumnos >= 30 && numeroAlumnos <= 49) { // 30 a 49
            costoAlumno = 95;
        }
        else if (numeroAlumnos > 0 && numeroAlumnos < 30) { // 1 a 29
            costoAlumno = 4000 / numeroAlumnos;
        }
        else {
            costoAlumno = 4000 / numeroAlumnos;
        }
        // Inicilaizar aqui el costo final del servicio
        var costoTotal = costoAlumno * numeroAlumnos;
        console.log("El costo por alumno es de ".concat(costoAlumno.toFixed(2), " euros.\nEl costo total del viaje es de ").concat(costoTotal.toFixed(2), " euros."));
    };
    /**
     * Ejercicio 3
     *
     * La política de cobro de una compañía telefónica es:
     * cuando se realiza una llamada, el cobro es por el tiempo que ésta dura,
     * de tal forma que los primeros cinco minutos cuestan 1 euro,
     * los siguientes tres, 80 céntimos, los siguientes dos minutos, 70 céntimos, y a partir del décimo minuto, 50 céntimos.
     * Además, se carga un impuesto de 3 % cuando es domingo, y si es otro día, en turno de mañana, 15 %, y en turno de tarde, 10 %.
     * Realice un algoritmo para determinar cuánto debe pagar por cada concepto una persona que realiza una llamada.
     */
    Ejercicios3.prototype.ejercicio3 = function () {
        var duracionLlamada = parseFloat(prompt("Ingrese la cantidad de minutos de la llamada por cobrar: "));
        var dia = prompt("Ingrese el dia que se realizo la llamada por cobrar: ");
        var llamadaCosto;
        var impuesto = 0;
        // Calcular el costo de la llamada según la política de cobro de la compañía telefónica.
        if (duracionLlamada <= 5) {
            llamadaCosto = 1; //  5 minutos o menos (1,2,3,4,5)
        }
        else if (duracionLlamada <= 8) {
            llamadaCosto = (1 + 0.80) * (duracionLlamada - 5); // 5 minutos + 3 minutos = 8 minutos o menos
        }
        else if (duracionLlamada <= 10) {
            llamadaCosto = ((1 + 0.80) * (3 + 0.70)) * (duracionLlamada - 8); // 5 minutos + 3 minutos + 2 minutos = 10 minutos o menos
        }
        else {
            llamadaCosto = ((1 + 0.80) * (3 + 0.70) * (2 + 0.50)) * (duracionLlamada - 10); // 5 minutos + 3 minutos + 2 minutos = 10 minutos, es decir, mas de 10 minutos
        }
        // Calcular el impuesto correspondiente según el día y turno en que se realizó la llamada.
        if (dia === "domingo" || dia === "Domingo") {
            impuesto = llamadaCosto * 0.03;
        }
        else { // Un else basta para decir e indicar cualquier dia excepto domingo
            // Aqui se debe preguntar por el turno en que se se realizo la llamada
            var turno = prompt("Ingrese el turno en que se realizo el cobro de la llamada: ");
            if (turno === "mañana" || turno === "Mañana") {
                impuesto = llamadaCosto * 0.15;
            }
            else if (turno === "tarde" || turno === "Tarde") {
                impuesto = llamadaCosto * 0.10;
            }
        }
        var total = (llamadaCosto + impuesto);
        console.log("Costo total de la llamada: ".concat(total.toFixed(2), " euros"));
    };
    return Ejercicios3;
}());
var objeto = new Ejercicios3();
objeto.ejercicio1();
objeto.ejercicio2();
objeto.ejercicio3();
