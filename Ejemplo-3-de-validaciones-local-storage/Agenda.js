import Employee from "./Employee.js";

export default class Agenda {
  constructor(tableAgenda, tableInfo) {
    this._tableAgenda = tableAgenda;
    this._tableInfo = tableInfo;
    this._numEmployees = 0;
    this._sumAge = 0;
    this._employees = [];

    this._initTables();
  }

  _initTables() {
    let lsEmployees = JSON.parse(localStorage.getItem("employees"));

    if (lsEmployees === null) {
      return;
    }

    lsEmployees.forEach((employee, index) => {
      this._addToTable(new Employee(employee));
    })

  }

  _editEmployee(row, employee){
    let iName = document.createElement("input");
    iName.type = "text";
    iName.value = employee.name;

    row.cells[0].innerHTML = "";
    row.cells[0].appendChild(iName);

    let iEmail = document.createElement("input");
    iEmail.type ="text";
    iEmail.value = employee.email;

    row.cells[1].innerHTML = "";
    row.cells[1].appendChild(iEmail);

    let iBirthday = document.createElement("input");
    iBirthday.type = "date";
    iBirthday.value = employee.getBirthdayAsUSString();

    row.cells[2].innerHTML = "";
    row.cells[2].appendChild(iBirthday);
  }


  _addToTable(employee) {
    let row = this._tableAgenda.insertRow(-1);

    let cellName = row.insertCell(0);
    let cellEmail = row.insertCell(1);
    let cellBirthday = row.insertCell(2);
    let cellAge = row.insertCell(3);
    let cellEdit = row.insertCell(4);
    let cellDelete = row.insertCell(5);

    let btnEdit = document.createElement("input");
    btnEdit.type = "button";
    btnEdit.value = "editar";
    btnEdit.className = "btn btn-success";
    btnEdit.addEventListener("click", () =>{
      this._editEmployee(row, employee);
    })

    let btnDelete = document.createElement("input");
    btnDelete.type ="button";
    btnDelete.value = "eliminar";
    btnDelete.className = "btn btn-danger";
    btnDelete.addEventListener("click", () =>{
      this._editEmployee(row, employee);
    })

    cellName.innerHTML = employee.name;
    cellEmail.innerHTML = employee.email;
    cellBirthday.innerHTML = employee.getBirthdayAsString();
    cellAge.innerHTML = employee.getAge();
    cellEdit.appendChild(btnEdit);
    cellDelete.appendChild(btnDelete);

    this._numEmployees++; // this._numEmployees = this._numEmployees + 1
    this._sumAge += employee.getAge(); // this._sumAge = this._sumAge + employee.getAge()

    this._tableInfo.rows[0].cells[1].innerHTML = this._numEmployees;

    this._tableInfo.rows[1].cells[1].innerHTML =
      this._sumAge / this._numEmployees;

    let objEmployee = {
      name: employee.name,
      email: employee.email,
      birthday: employee.birthday
    };

    this._employees.push(objEmployee);
  }

  _findEmployee(email){
    let result = -1;
    this._employees.forEach((employee, index) =>{
      if(employee.email === email){
        result = index;
        return;
      }
    });
    return result;
  }

  addEmployee(employee) {
  if(this._findEmployee(employee.email) >= 0){
    Swal.fire({
      type: "error",
      title: "Error",
      text: "Este usuario ya existe"
    });
    return;
  }
    

    this._addToTable(employee);
    localStorage.setItem("employees", JSON.stringify(this._employees));

    if(this._findEmployee(employee.email) >= 0){
      Swal.fire({
        type: "success",
        title: "¡EXITO!",
        text: "Registro de empleado exitoso"
      });
    }
  }
}