import { indexarPorNombre, indexarPorApellido, indexarPorMail, indexarPorNombreApellido } from "./indexarUsuario";
import Administrador from "../data/Administrador";
import Solicitante from "../data/Solicitante";
import Tecnico from "../data/Tecnico";
import Usuario from "../data/Usuario";


function mostrarInformacion(usuario: Usuario | undefined): void {

    if (usuario instanceof Administrador) {
        usuario.mostrarInformacion();
        usuario.mostrarNivel();
        console.log("");
    } else if (usuario instanceof Solicitante) {
        usuario.mostrarInformacion();
        usuario.mostrarSector();
        console.log("");
    } else if (usuario instanceof Tecnico) {
        usuario.mostrarInformacion();
        usuario.mostrarEspecialidad();
        console.log("");
    } else {
        console.clear();
        console.log("No se encuentra información para el usuario proporcionado.");
        console.log("");
    }
}

export default mostrarInformacion;