class Consultorio{
    constructor(nombre, paciente){
        this.nombre   = nombre;
        this.paciente = paciente;
    }
    agregarPaciente(nuevoPaciente){
        this.paciente.push(nuevoPaciente )
    }
}

class Paciente{
    #diagnostico;
    constructor(nombre, apellido,edad, rut, diagnostico){
        this.nombre      = nombre;
        this.apellido    = apellido;
        this.edad        = edad;
        this.rut         = rut;
        //Propiedades Privadas
        this.#diagnostico = diagnostico;
        
        //
        this.bRut  = rut.split("-")[0];
        this.dvRut = rut.split("-")[1];
    
    }

    //Accesors
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }

    set nombreCompleto(nuevoNombreCompleto){
        this.nombre   = nuevoNombreCompleto.split(" ")[0];
        this.apellido = nuevoNombreCompleto.split(" ")[1];
    }

    //Metodos
    imprimirDiagnostico(){
        console.log(`${this.nombre}: ${this.#diagnostico}`)
    }

}

const PacienteUno = new Paciente("Daniel","Rebolledo","29", "12345678-9", "esta loco")
const PacienteDos = new Paciente("Ariel","Abarca ","25", "12345678-9", "esta sano y bueno")

const ConsultorioN = new Consultorio("Peñablanca", [PacienteUno, PacienteDos] )

//Getter
PacienteUno.nombreCompleto;

//Setter
PacienteUno.nombreCompleto = "Ismael Gomez"

//error: la propiedad es privada
//Paciente.#diagnostico

