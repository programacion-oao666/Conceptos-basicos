export default class Empleado{
    constructor(name, email, birthday){
        this._name = name.toUpperCase();
        this._email = email;
        this._birthday = birthday;
    }

    getAge(_birthday){
        let hoy = new Date();
        let cumpleaños = new Date(_birthday);
        let edad = hoy.getFullYear() - cumpleaños.getFullYear();
        let m = hoy.getMonth() - cumpleaños.getMonth();
        if(m < 0 || (m === 0 && hoy.getDate < cumpleaños.getDate())){
            edad--;
        }
        return edad;
    }
}

