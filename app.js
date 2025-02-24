// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//1. Crear un array para almacenar los nombres
let listaCinco = []
//2. Implementar una función para agregar amigos.
        //2.1 Capturar el valor del campo de entrada
        function agregarAmigo() {
            let nombreAmigo = document.getElementById("amigo").value;
            let amigoInput = document.getElementById("amigo");
            // 2.2 Entradas Vacias
            if (nombreAmigo.trim() === "") {
                alert("Por Favor, inserte un nombre")
                return;
            }               
            //2.3 Entradas Repetidas
            if(listaCinco.includes(nombreAmigo)) {
                alert("Este nombre esta repetido")
                return;
            }           
            listaCinco.push(nombreAmigo);
            //2.4 Actualizar el array de amigos
            amigoInput.value = "";
            //2.5 Restablecer el campo de texto a una cadena vacía.
            amigoInput.placeholder = "Escribe un nombre";
            //2.6 Actualizar la lista en el DOM
            actualizarLista()
        }                
//3. implementar una función para sortear amigos
function actualizarLista() {
    //3.1 Obtener el elemento de la lista
    let elementoLista = document.getElementById("listaAmigos")
    //3.2 Limpiar la lista existente:
    if (elementoLista) {
        elementoLista.innerHTML = ""
        //3.3 Iterar sobre el arreglo
        listaCinco.forEach(amigo =>{
            let elemento = document.createElement("li")
            elemento.textContent = amigo
            elementoLista.appendChild(elemento)
        });   
    } else {
        console.error("El elemento no existe")
    }
}
//4. Validar entradas vacías y sortear
function sortearAmigo() {
    if (listaCinco.length === 0) {
        alert("Aún no hay amigos registrados!");
        return;
    }
    //4.1 Generar un índice aleatorio
    let indexRandom = Math.floor(Math.random()*listaCinco.length);
    //4.2 Obtener el nombre sorteado
    let amigoSecreto = listaCinco[indexRandom];
    //4.3 Mostrar resultado
    publicarNombre(amigoSecreto)
} 
//5. Mostrar el resultado
function publicarNombre(nombre){
    let resultadoLista = document.getElementById("resultado")
    if (resultadoLista) {
        resultadoLista.innerHTML = ""
        let elemento = document.createElement("li")
        elemento.textContent = nombre
        resultadoLista.appendChild(elemento);
    }  else {
        console.error("El elemento no existe")
    }   
}

//se llaman las funciones
agregarAmigo()
sortearAmigo()

    //LISTA DE FUNCIONES
    //agregarAmigo
    //actualizarLista
    //sortearAmigo
    //publicarNombre

    //LISTA DE VARIABLES
    //amigo: input box
    //amigoInput: variable para el mensaje en la input box
    //listaCinco: array para los nombres
    //amigosMaximo: tamaño del array
    //nombreAmigo: tagID de los nombres de los Amigos
    //listaAmigos: tagID del display de los nombres de los amigos
    //elementoLista: variable para el display de la lista
    //elemento: variables para el contenedor ul para para cada nombre
    //amigo: variable creada para cada iteración
    //indexRandom: seleccionador de nombre
    //amigoSecreto: su nombre lo dice ;)
    //resultadoLista: variable para publicar el amigo Secreto
    //nombre: parámetro para la función
