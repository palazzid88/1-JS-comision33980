
let plan;
let planElegido;
let especialistaPlan;
let elegirEspecialista;
let medicoEspecialista;
let plan210;
let planResultado;
let especialistaResultado;
let mensaje ='';

class especialista {
    constructor(nombre, apellido, contacto, direccion, plan, especialidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.contacto = contacto
        this.direccion = direccion;
        this.plan = plan;
        this.especialidad = especialidad;
    }


}
const clinico1 = new especialista ("Gustavo", "Cerati", "1143089111", "Av Libertador 1001", "210", "clinico" );
const clinico2 = new especialista ("Charly", "García", "1145566778", "Cabildo 1001", "310", "clinico" );

const dermatologo1 = new especialista ("Mercedes", "Sosa", "299445898", "Av La Paz 125", "210", "dermatologo" );
const dermatologo2 = new especialista ("Ciro", "martinez", "3442456778", "Bartolomé Mitre 1550", "310", "dermatologo");

const cardiologo1 =new especialista ("Leon", "Giecco", "113345675", "Av La Paz 125", "210", "cardiologo" );
const cardiologo2 = new especialista ("Patricio", "Rey", "119876543", "San Martin 102", "310", "cardiologo");

const traumatologo1 = new especialista ("Fabiana", "Cantilo", "119873423", "JM Belgrano 543", "210", "traumatologo");
const traumatologo2 = new especialista ("Andrés", "Calamaro", "114567890", "Corrientes 421", "310", "traumatologo");

console.log(clinico1, clinico2, dermatologo1, dermatologo2, cardiologo1, cardiologo2, traumatologo1, traumatologo2);


const cartilla = [];

cartilla.push(clinico1, clinico2, dermatologo1, dermatologo2, cardiologo1, cardiologo2, traumatologo1, traumatologo2);


console.log(cartilla);



planElegido = prompt ("ingrese plan 210 - 310 o escriba esc");
while (planElegido!="esc") {
    if (planElegido =="210" || planElegido =="310") {
        planResultado = cartilla.filter(medic => medic.plan === planElegido);
        console.log (planElegido);
        planResultado.forEach(item=> {mensaje +='\n' + item.especialidad})
        console.log (planResultado);
        planElegido = "esc";
    }
    else{
        planElegido = prompt("reingrese un plan válido (210 o 310) para salir escriba esc")       
    }
}
alert('especialidades son: \n ' + mensaje)
let especialistaElegido = prompt ("Que especialidad necesita? " + mensaje)
        especialistaResultado = planResultado.find(medic => medic.especialidad === especialistaElegido);
        console.log (especialistaElegido);
        console.log(especialistaResultado);    
alert('El Especialista elegido es \n nombre: ' + especialistaResultado.nombre + '\n apellido: ' + especialistaResultado.apellido + '\n direccion: ' + especialistaResultado.direccion)
