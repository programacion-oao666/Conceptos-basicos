export default class Employee{
    constructor(name, email, birthday){
        this._name = name.toUpperCase();
        this._email = email;
        this._birthday = birthday;
    }
    get name(){
        return this._name;
    }
    
    get email(){
        return this._email;
    }
    
    get birthday(){
        return this._birthday;
    }
    getBirthdayAsString(){
        let date = (this._birthday.getDate() + 1) + "/" + (this._birthday.getMonth() + 1) + "/" + this._birthday.getFullYear();

        return date;
    }
    getAge(){
        let oneDay = 24 * 60 * 60 * 1000;
        let oneYear = oneDay * 365;
        let differenceMs = new Date() - this._birthday;
        let age = Math.trunc(differenceMs / oneYear);

        return age;
    }
}

