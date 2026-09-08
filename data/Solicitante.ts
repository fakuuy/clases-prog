import Usuario from "./Usuario";

const sectores: string[] = ["Docencia", "Administracion", "Direccion"];

class Solicitante extends Usuario {
    
    sector: string = "";
    
    constructor(nombre: string, apellido: string, edad: number, mail: string, sector: string) {
        super(nombre, apellido, edad, mail);
        
        if (!sectores.includes(sector)) {
            console.error(`Error: El sector "${sector}" no es válido. Los sectores válidos son: ${sectores.join(", ")}`);
            return;
        } {
            this.sector = sector;
        }


    }

    public getSector(): string {
        console.log(`El sector de ${this.getNombre()} es: ${this.sector}`);
        return this.sector;
    }

    public setSector(sector: string): void {

        if (!sectores.includes(sector)) {
            console.error(`Error: El sector "${sector}" no es válido. Los sectores válidos son: ${sectores.join(", ")}`);
            return;
        } {
            console.log(`El sector de ${this.getNombre()} se ha actualizado a: ${sector}`);
            this.sector = sector;
        }

    }

    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.getNombre()}`);
        console.log(`Edad: ${this.getEdad()}`);
        console.log(`Correo electrónico: ${this.getMail()}`);
        console.log(`Apellido: ${this.getApellido()}`);
        console.log(`Sector: ${this.getSector()}`);
    }

    public mostrarSector(): void {
        console.log(`Sector: ${this.getSector()}`);
    }

}

export default Solicitante;

function mostrarSectores() {
    return sectores;
}

export { mostrarSectores };