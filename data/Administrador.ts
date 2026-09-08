import Usuario from "./Usuario";

const niveles = ["Coordinador", "Administrador"];


class Administrador extends Usuario {

    nivel: string;


    constructor(nombre: string, apellido: string, edad: number, mail: string, nivel: string) {
        super(nombre, apellido, edad, mail);
        this.nivel = nivel;

        if (!niveles.includes(this.nivel)) {
            throw new Error("El nivel no es válido.");
        }
    }

    public getNivel(): string {
        return this.nivel;
    }

    public setNivel(nivel: string): void {
        if (!niveles.includes(nivel)) {
            throw new Error("El nivel no es válido.");
        }
        this.nivel = nivel;
    }

    public mostrarNivel(): void {
        console.log(`Nivel: ${this.getNivel()}`);
    }

    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.getNombre()}`);
        console.log(`Edad: ${this.getEdad()}`);
        console.log(`Correo electrónico: ${this.getMail()}`);
        console.log(`Apellido: ${this.getApellido()}`);
    }
}

function nivelesValidos() {
    return niveles;
}

export default Administrador;

export { nivelesValidos };