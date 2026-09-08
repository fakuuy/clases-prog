class Usuario {
    nombre: string;
    edad: number;
    mail: string;
    apellido: string;

    constructor(nombre: string, apellido: string, edad: number, mail: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mail = mail;


        if (this.edad < 18) {
            console.error("Error: El usuario debe ser mayor de edad.");
            return;
        }

        if (!this.mail.includes("@")) {
            console.error("Error: El correo electrónico no es válido.");
            return;
        }

        if (this.apellido.trim() == "") {
            console.error("Error: El apellido no puede estar vacío.");
            return;
        }

        if (this.nombre.trim() == "") {
            console.error("Error: El nombre no puede estar vacío.");
            return;
        }

    }

    public getNombre(): string {
        return this.nombre; 
    }

    public getEdad(): number {
        return this.edad;
    }

    public getMail(): string {
        return this.mail;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setNombre(nombre: string): void {
        if (nombre.length < 0) {
            console.error("Error: El nombre no puede estar vacío.");
            return;
        }
        this.nombre = nombre;
        console.log(`El nombre de ${this.getNombre()} se ha actualizado a: ${nombre}`);
    }

    public setEdad(edad: number): void {
        if (edad < 18) {
            console.error("Error: El usuario debe ser mayor de edad.");
            return;
        }
        this.edad = edad;
        console.log(`La edad de ${this.getNombre()} se ha actualizado a: ${edad}`);
    }

    public setMail(mail: string): void {
        if (!mail.includes("@")) {
            console.error("Error: El correo electrónico no es válido.");
            return;
        }
        this.mail = mail;
        console.log(`El correo electrónico de ${this.getNombre()} se ha actualizado a: ${mail}`);
    }

    public setApellido(apellido: string): void {
        if (apellido.length < 0) {
            console.error("Error: El apellido no puede estar vacío.");
            return;
        }
        this.apellido = apellido;
        console.log(`El apellido de ${this.getNombre()} se ha actualizado a: ${apellido}`);
    }

    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Correo electrónico: ${this.mail}`);
        console.log(`Apellido: ${this.apellido}`);
    }

}

export default Usuario;