alert(" codigo en  funciones.js");
function probarCodigo()
{
  
  
  /*ESPECIALISTA CARTILLA MÉDICA OBRA SOCIAL MÉDICO*/


///funcion plan 210/310
function menu() {
    plan=prompt("ingrese plan 210 o 310");
    console.log(plan);
    switch (plan) {
        case "210":
            plan210()
            break;

        case "310":
            plan310()
            break;

        default:
            alert("plan no existente")
            break;
    }


}



///funcion entrada de especialista
function especialistas() {
    especialista = prompt("ingrese especialidad: \n clinico \n traumatologo \n cardiologo \n dermatologo");
    console.log(especialista)
}

///funcion resultado
function resultado() {
    console.log("su especialista según su plan es " +medico);
}

///funcion reingresar
function reingrese() {
    especialista = prompt("Re-ingrese especialidad:\n clinico, \n traumatologo, \n cardiologo, \n dermatologo \n o escriba esc para salir");
}

///Funcion no valido
function error() {
    console.log ("especialista ingresado invalido")
}


menu()



///funcion plan 210
function plan210() {
    especialistas()
///inicio while especialidad
    while(especialista!="esc") {
///inicio switch especialista
    switch(especialista) {
      case "clinico":
        medico= "Marcelo Gómez";
        console.log(medico);
        resultado()
        break;
      case "traumatologo":
        medico= "Estefanía Rossi";
        resultado()
        break;
      case "cardiologo":
        medico= "José María Blanco";
        resultado()
        break;
      case "desmatologo":
        medico= "Josefina Bayer";
        resultado()
        break;
      default:
        error()
        break;
    }
    ///fin del switch
reingrese()  
}
  //fin del while
  console.log("Gracias por utilizar nuestra cartilla online!");
}




  ///funcion plan 310 
function plan310() {
    especialistas()
///inicio while especialidad
    while(especialista!="esc") {
///inicio switch especialista
    switch(especialista) {
      case "clinico":
        medico= "Claudio Sosa";
        console.log(medico);
        resultado()
        break;
      case "traumatologo":
        medico= "Marcela Chavarria";
        resultado()
        break;
      case "cardiologo":
        medico= "Carlos Alberto Giacchio";
        resultado()
        break;
      case "desmatologo":
        medico= "Claudia Díaz";
        resultado()
        break;
      default:
        error()
        break;
    }
    //fin del switch
    reingrese()  
}
  //fin del while
   console.log("Gracias por utilizar nuestra cartilla online!");
}
}

