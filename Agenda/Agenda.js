export default class Agenda{
    constructor(tableAgenda){
        this._tableAgenda = tableAgenda;
    }
    addEmployee(employee){
        let row = this._tableAgenda.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellBirthday = row.insertCell(2);
        let cellAge = row.insertCell(3);

        cellName.innerHTML = employee.name;
        cellEmail.innerHTML = employee.email;
        cellBirthday.innerHTML = employee.getBirthdayAsString();
        cellAge.innerHTML = employee.getAge();
    }
}