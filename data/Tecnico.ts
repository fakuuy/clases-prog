import Usuario from "./Usuario";

class Tecnico extends Usuario {
    especialidad: string;

    especialidades = ["Redes", "Hardware", "Software"];
    
    constructor(nombre: string, apellido: string, edad: number, mail: string, especialidad: string) {
        super(nombre, apellido, edad, mail);
        this.especialidad = especialidad;

        if (this.especialidad) {
            if (!this.especialidades.includes(this.especialidad)) {
                throw new Error("La especialidad no es válida.");
            }
        } else {
            throw new Error("La especialidad no puede estar vacía.");
        }

    }

    public getEspecialidad(): string {
        return this.especialidad;
    }
    
    public setEspecialidad(especialidad: string): void {
        if (!this.especialidades.includes(especialidad)) {
            throw new Error("La especialidad no es válida.");
        }
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