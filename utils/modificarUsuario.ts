import Usuario from "../data/Usuario";
import Administrador from "../data/Administrador";
import Solicitante from "../data/Solicitante";
import Tecnico from "../data/Tecnico";
import { indexarPorNombreApellido } from "./indexarUsuario";
import { addOriginalUser, addModifiedUser, getOriginalsUsersList, getModifiedUsersList, getOriginalUsers, getModifiedUsers } from "../data/StorageUsers";

const confirmaciones: string[] = ["s", "si", "yes", "y", "ok", "okay", "sure", "affirmative"];

function confirmarModificacion(usuario: Usuario): boolean {
    const confirmacion = prompt("¿Desea confirmar la modificación? (s/n): ") || "";
    
    if (confirmaciones.includes(confirmacion.toLowerCase())) {
        addModifiedUser(usuario);
        console.log("Modificación confirmada.");
        return true;
    } else {
        console.log("Modificación cancelada.");
        return false;
    }

}

function mostrarUsuariosYModificaciones(): void {
    console.log("Usuarios originales:");
    getOriginalsUsersList();

    console.log("");

    console.log("Usuarios modificados:");
    getModifiedUsersList();
}



function modificarUsuario(usuario: Usuario): void { 

    addOriginalUser(usuario);

    usuario.mostrarInformacion();
    console.log("");

    console.log("Que datos queres modificar?");
    console.log("1. Nombre");
    console.log("2. Apellido");
    console.log("3. Edad");
    console.log("4. Correo electrónico");
    console.log("6. Cancelar modificación");
    console.log("7. Salir");

    if (usuario instanceof Administrador) {
        console.log("5. Nivel");
    }

    if (usuario instanceof Solicitante) {
        console.log("5. Sector");
    }

    if (usuario instanceof Tecnico) {
        console.log("5. Especialidad");
    }

    const opcion: number = parseInt(prompt("Ingrese el número de la opción que desea modificar: ") || "0");


    switch (opcion) {

        case 1: {
            const nuevoNombre: string = prompt("Ingrese el nuevo nombre: ") || "";

            if(confirmarModificacion(usuario)) {
            } else {
                return;
            }
            usuario.setNombre(nuevoNombre);

            return;
        }
        case 2: {
            const nuevoApellido: string = prompt("Ingrese el nuevo apellido: ") || "";

            if(confirmarModificacion(usuario)) {
                return;
            }
            usuario.setApellido(nuevoApellido);

            return;
        }
        case 3: {
            const nuevaEdad: number = parseInt(prompt("Ingrese la nueva edad: ") || "0");

            if(confirmarModificacion(usuario)) {
                return;
            }
            usuario.setEdad(nuevaEdad);

            return;
        }
        case 4: {
            const nuevoMail: string = prompt("Ingrese el nuevo correo electrónico: ") || "";

            if(confirmarModificacion(usuario)) {
                return;
            }
            usuario.setMail(nuevoMail);

            return;
        }
        case 5: {
            if (usuario instanceof Administrador) {
                const nuevoNivel: string = prompt("Ingrese el nuevo nivel: ") || "";
                
                if(confirmarModificacion(usuario)) {
                    return;
                }
                usuario.setNivel(nuevoNivel);

                return;
            } else if (usuario instanceof Solicitante) {
                const nuevoSector: string = prompt("Ingrese el nuevo sector: ") || "";

                                
                if(confirmarModificacion(usuario)) {
                    return;
                }
                usuario.setSector(nuevoSector);

                return;
            } else if (usuario instanceof Tecnico) {
                const nuevaEspecialidad: string = prompt("Ingrese la nueva especialidad: ") || "";
                
                if(confirmarModificacion(usuario)) {
                    return;
                }
                usuario.setEspecialidad(nuevaEspecialidad);
                
                return;
            }
            break;
        }
        case 6: {
            console.log("Modificación cancelada.");
            return;
        }
        case 7: {
            break;
        }
        default: {
            console.error("Opción no válida.");
            return;
        }

    }



}

export default modificarUsuario;