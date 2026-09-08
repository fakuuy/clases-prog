import Usuario from "./Usuario";

const especialidades: string[] = ["Redes", "Hardware", "Software"];

class Tecnico extends Usuario {

    especialidad: string;

    constructor(nombre: string, apellido: string, edad: number, mail: string, especialidad: string) {
        super(nombre, apellido, edad, mail);
        this.especialidad = especialidad;

        if (this.especialidad) {
            if (!especialidades.includes(this.especialidad)) {
                console.error(`Error: La especialidad "${this.especialidad}" no es válida. Las especialidades válidas son: ${especialidades.join(", ")}`);
            }
        } else {
            console.error("Error: La especialidad no puede estar vacía.");
        }

    }

    public getEspecialidad(): string {
        console.log(`La especialidad de ${this.getNombre()} es: ${this.especialidad}`);
        return this.especialidad;
    }
    
    public setEspecialidad(especialidad: string): void {
        if (!especialidades.includes(especialidad)) {
            console.error(`Error: La especialidad "${especialidad}" no es válida. Las especialidades válidas son: ${especialidades.join(", ")}`);
            return;
        }
        console.log(`La especialidad de ${this.getNombre()} se ha actualizado a: ${especialidad}`);
        this.especialidad = especialidad;
    }

    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.getNombre()}`);
        console.log(`Edad: ${this.getEdad()}`);
        console.log(`Correo electrónico: ${this.getMail()}`);
        console.log(`Apellido: ${this.getApellido()}`);
        console.log(`Especialidad: ${this.getEspecialidad()}`);
    }

    public mostrarEspecialidad(): void {
        console.log(`Especialidad: ${this.getEspecialidad()}`);
    }

}

export default Tecnico;

function mostrarEspecialidades() {
    console.log("Especialidades disponibles:");
    especialidades.forEach((especialidad, index) => {
        console.log(`${index + 1}. ${especialidad}`);
    });
}
export { mostrarEspecialidades };