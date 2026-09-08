import crearUsuario from "./crearUsuario";
import mostrarInformacionUsuario from "./mostrarInformacion";
import { indexarPorNombreApellido } from "./indexarUsuario";
import Usuario from "../data/Usuario";
import modificarUsuario from "./modificarUsuario";

let usuarios: Usuario[] = [];

function cli() {

    while (true) {

        console.clear();

        console.log("Seleccione una opción:");
        console.log("1. Crear un usuario");
        console.log("2. Mostrar información de un usuario");
        console.log("3. Modificar información de un usuario");
        console.log("4. Salir");
        

        const opcion = prompt("Ingrese el número de la opción deseada: ");

        switch (opcion) {
            case "1":
                usuarios.push(crearUsuario());
                break;
            case "2":
                const key_buscar = prompt("Ingrese el nombre y apellido del usuario a buscar: ") || "";
                const mapa_buscar = indexarPorNombreApellido(usuarios);
                const usuario_buscar = mapa_buscar.get(key_buscar);
                mostrarInformacionUsuario(usuario_buscar);
                break;

            case "3":
                console.clear();
                const key_mod = prompt("Ingrese el nombre y apellido del usuario a modificar: ") || "";
                const mapa_mod = indexarPorNombreApellido(usuarios);
                const usuario_modificar = mapa_mod.get(key_mod);
                if (usuario_modificar) {
                    modificarUsuario(usuario_modificar);
                } else {
                    console.error("Usuario no encontrado.");
                }
                break;
            case "4":
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