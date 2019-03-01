import Employee from "./Employee.js"
import Agenda from "./Agenda.js"

class Main{
    constructor(){
        let agenda = new Agenda(document.querySelector("#agenda"));
        document.querySelector("#btnAdd").addEventListener("click", () =>{
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let birthday = new Date(document.querySelector("#birthday").value);
        
        let employee = new Employee(name, email, birthday);

        agenda.addEmployee(employee);
        });
    }
}

let m = new Main();