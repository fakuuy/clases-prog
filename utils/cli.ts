import crearUsuario from "./crearUsuario";
import mostrarInformacionUsuario from "./mostrarInformacion";
import { indexarPorNombreApellido } from "./indexarUsuario";

let usuarios: Usuario[] = [];

function cli() {

    while (true) {
        console.log("Seleccione una opción:");
        console.log("1. Crear un usuario");
        console.log("2. Mostrar información de un usuario");
        console.log("3. Salir");

        const opcion = prompt("Ingrese el número de la opción deseada: ");

        switch (opcion) {
            case "1":
                usuarios.push(crearUsuario());
                break;
            case "2":
                const key = prompt("Ingrese el nombre y apellido del usuario a buscar: ") || "";
                const mapa = indexarPorNombreApellido(usuarios);
                const usuario = mapa.get(key);
                mostrarInformacionUsuario(usuario);
                break;
            case "3":
                console.clear();
                console.log("Saliendo del programa...");
                console.log("A U R A ");
                return;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
        }
    }

}

export default cli;