class Main {
    constructor() {
        //imprimir tu vector con los datos
        console.log(localStorage.getItem("credenciales"));

        //declarar el boton para mostrar la función
        document.querySelector("#btn").addEventListener("click", () => {

            //declarar nuestras variables
            let email = document.querySelector("#email").value;
            let password = document.querySelector("#password").value;

            //imprimir los datos y verificar si funciona
            /*console.log(`${email} ${password}`);*/


            //debemos declarar un objeto para poder usarlo al local storage
            let user = {
                email: email,
                password: password
            };

            let users = JSON.parse(localStorage.getItem("credenciales"));

            //Agregar un vector para ir guardando los registros
            if (users === null) {
                users = [];
            }

            //debemos decirle que vaya agregando al final ada nuevo usuario
            users.push(user);

            //guardar en local storage como string
            localStorage.setItem("credenciales", JSON.stringify(users));

            //imprimir el local storage en consola
            /*console.log(localStorage.getItem("credencial"));*/

            //imprimir el vector
            console.log(localStorage.getItem("credenciales"));


        });
    }
}

let m = new Main();c