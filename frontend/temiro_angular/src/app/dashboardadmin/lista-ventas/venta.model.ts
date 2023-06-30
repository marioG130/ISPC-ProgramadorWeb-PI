
export class Venta {

    idventa : number;
    idvendedor : number;
    idcliente : number;
    idfactura : number;
    fecha : Date;
    descripcion : string;
    estado : string;

    constructor() {
        this.idventa = 0;
        this.idvendedor = 0;
        this.idcliente = 0;
        this.idfactura = 0;
        this.fecha = new Date();
        this.descripcion = "?";
        this.estado = "?";
    }

}
