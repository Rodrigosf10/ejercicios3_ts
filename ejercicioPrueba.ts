class Anios{
    public  siglos(){
        let anioSolicitado : number = parseFloat(prompt("Ingresa el año a saber: "));
        let siglos : number = ((anioSolicitado/100)+1);
        if (anioSolicitado > 2000) {
            console.log(`El año ${anioSolicitado} esta en el siglo ${siglos.toFixed(0)}`);
        } else {
            console.log(`El año ${anioSolicitado} esta en el siglo ${siglos.toFixed(0)-1}`);
        }
        
    }
}

let objeto = new Anios;
objeto.siglos();