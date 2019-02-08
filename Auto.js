export default class Auto{
    constructor(marca, modelo, color = "Blanco", kilometraje = "0")    {
        this._marca = marca;
        this._color = color;
        this._kilometraje = kilometraje;
        this._modelo = modelo;
        this._estado = "Apagado";
    }

    get color(){
        return this._color;
    }

    set color(color){
        this._color = color.toUpperCase();
    }

    mostrarEstado(){
        console.log(`El auto ${this._marca} ${this.color} del año ${this._modelo} tiene un kilometraje de ${this._kilometraje}kms y está ${this._estado}`);
    }

    encender(){
        this._estado = "Encendido";
        this.mostrarEstado();
    }

    apagar(){
        this._estado = "Apagado";
        this.mostrarEstado();
    }

    avanzar(velocidad, tiempo){
        if(this._estado === "Apagado"){
            console.log('El auto no puede avanzar porque esta apagado')
        }
        else {
            let distancia = velocidad * tiempo;
            this._kilometraje = this._kilometraje + distancia;
            this.mostrarEstado();
        }
    }
}