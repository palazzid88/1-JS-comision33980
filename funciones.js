alert(" codigo en  funciones.js");
function probarCodigo()
{
  
  
  /*ESPECIALISTA CARTILLA MÉDICA OBRA SOCIAL MÉDICO*/




let plan=prompt("ingrese plan 210 o 310");
console.log(plan);
let especialista=prompt("ingrese especialista");
let medico;
let error;
//inicio plan 210
while(error!="error")
{
  if(plan==210)
  {
    while(especialista!="esc")
  {
    switch(especialista)
    {
      case "clinico":
        medico= "Marcelo Gómez";
        console.log(medico);
        console.log("Su especialista según su plan es " +medico);
        break;
      case "traumatologo":
        medico= "Estefanía Rossi";
        console.log("Su especialista según su plan es " +medico);
        break;
      case "cardiologo":
        medico= "José María Blanco";
        console.log("Su especialista según su plan es " +medico);
        break;
      case "desmatologo":
        medico= "Josefina Bayer";
        console.log("Su especialista según su plan es " +medico);
        break;
      default:
        console.log("no es un especialista válido validad");
        break;
    }//fin del switch
     especialista=prompt("reingrese un especialista o escriba esc para salir");
  }//fin del while
    console.log("Gracias por utilizar nuestra cartilla online!");
    error="error";
  }
  else
  {
  //inicio plan 310 
  if(plan==310)
  {
    while(especialista!="esc")
  {
    switch(especialista)
    {
      case "clinico":
        medico= "Claudio Sosa";
        console.log(medico);
        console.log("Su especialista según su plan es " +medico);
        break;
      case "traumatologo":
        medico= "Marcela Chavarria";
        console.log("Su especialista según su plan es " +medico);
        break;
      case "cardiologo":
        medico= "Carlos Alberto Giacchio";
        console.log("Su especialista según su plan es " +medico);
        break;
      case "desmatologo":
        medico= "Claudia Díaz";
        console.log("Su especialista según su plan es " +medico);
        break;
      default:
        console.log("no es un especialista válido validad");
        break;
    }//fin del switch
     especialista=prompt("reingrese un especialista o escriba esc para salir");
  }//fin del while
   console.log("Gracias por utilizar nuestra cartilla online!");
   error="error"
  }
  else /*plan no válido*/
  {
    console.log("plan no válido");
    plan=prompt("reingrese plan válido");
    especialista=prompt("ingrese especialista");
    error="continue";
  }
  }
}
}