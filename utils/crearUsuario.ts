import Administrador from "../data/Administrador";
import { nivelesValidos } from "../data/Administrador";
import Solicitante from "../data/Solicitante";
import { mostrarSectores } from "../data/Solicitante";
import Tecnico from "../data/Tecnico";

const tipos_usuario = ["Administrador", "Solicitante", "Tecnico"];

function crearUsuario(){

    const tipoUsuario: string = prompt("Tipo de usuario: " + tipos_usuario.join(", ") + ":") || "";
    const nombre: string = prompt("Nombre del usuario: ") || "";
    const apellido: string = prompt("Apellido del usuario: ") || "";
    const edad: number = parseInt(prompt("Edad del usuario: ") || "0");
    const mail: string = prompt("Correo electrónico del usuario: ") || "";

    if (isNaN(edad) || edad <= 0) {
        console.error("Edad no válida. Por favor, ingrese un número mayor a 0.");
        return;
    }
    let usuario: any;

    switch (tipoUsuario) {
        case "Administrador":
            console.log("Necesitas asignar un nivel al administrador. Los niveles válidos son: " + nivelesValidos().join(", "));
            const nivel: string = prompt("Nivel del administrador: ") || "";

            if (!nivelesValidos().includes(nivel)) {
                console.error("Nivel no válido. Los niveles válidos son: " + nivelesValidos().join(", "));
                return;
            }

            usuario = new Administrador(nombre, apellido, edad, mail, nivel);
            break;
        case "Solicitante":
            const sector: string = prompt("Sector del solicitante: ") || "";

            if (!mostrarSectores().includes(sector)) {
                console.error("Sector no válido. Los sectores válidos son: " + mostrarSectores().join(", "));
                return;
            }
            usuario = new Solicitante(nombre, apellido, edad, mail, sector);
            break;
        case "Tecnico":
            const especialidad: string = prompt("Especialidad del técnico: ") || "";
            if (!especialidad) {
                console.error("Error: La especialidad no puede estar vacía.");
                return;
            }
            usuario = new Tecnico(nombre, apellido, edad, mail, especialidad);
            break;
        default:
            console.error("Tipo de usuario no válido. Los tipos válidos son: " + tipos_usuario.join(", "));
            return;
    }

    console.clear();
    console.log("Usuario creado exitosamente:");
    usuario.mostrarInformacion();
    console.log("");
    return usuario;
}

export default crearUsuario;