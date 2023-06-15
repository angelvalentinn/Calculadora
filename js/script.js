const botones = document.querySelectorAll(".btn");
const screen = document.getElementById("screen");

if(screen.value.length == 0) screen.value = "0"; //cuando el contenido de la pantalla tenga una 
//longitud de 0 la remplazamos por un "0", asi siempre se va a ver un 0 en la pantalla y no queda vacío

botones.forEach(btn => { 
    //Recorremos la node list de los botones y les agregamos un evento click
    btn.addEventListener("click",()=> {
        const valorBtn = btn.innerText; //capturamos el contenido del boton presionado

        if(valorBtn === "=") {
            try {   //Si el btn presionado es el "=" tratamos de resolverlo si no se puede capturamos el error y mostramos un mensaje
                screen.value = eval(screen.value); //eval es un método del objeto global window que recibe como parámetro un string y lo resuelve como código js
                return; //retornamos siempre al presionar un boton ya que  queremos que ejecute solo la función del operador
            } catch {
                screen.value = "Error..."
                return;
            }
        }

        if (valorBtn === "AC") {
            screen.value = "0"; //Operador para borrar todo 
            return;
        }

        if(valorBtn === "DEL") { //Operador que borra solo el ultimo número
            if(screen.value.length == 1 || screen.value === "Error...") {
                screen.value = "0"; //Si la longitud de los numeros que hay en la pantalla es de 1 o dice "Error... "y borramos pone un "0", asi no queda vacío    
                return;
            } else {
                screen.value = screen.value.slice(0,-1); //Recorremos el contenido de texto de la pantalla y devolvemos un array sin el ultimo elemento, -1 indica el ultimo elemento que es excluido
                return;
            }
        }

        screen.value === "0" || screen.value === "Error..." ? screen.value = valorBtn : screen.value += valorBtn;
        //Si el contenido de la pantalla es 0 o "Error..." y presionamos queremos que se sobreescriba asi no queda el 0 adelante de todo
        //sino que se acumulen los numeros
    })
})