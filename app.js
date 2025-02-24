// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//1. Crear un array para almacenar los nombres
let listaCinco = []
//4. Se declara el número maximo de amigos
let amigosMaximo = 5

//2. Implementar una función para agregar amigos. Se utilizan los elementos:
//input box amigo
//función "agregar amigo"
//elemento ul para el display de los nombres
//Tag ID nombreAmigo
        //2.1 Capturar el valor del campo de entrada: Utilizar document.getElementById o 
        // document.querySelector para obtener el texto ingresado por el usuario.
        function agregarAmigo() {
            let nombreAmigo = document.getElementById("amigo").value;
            let amigoInput = document.getElementById("amigo");
            let addButton = document.querySelector(".button-add");
            //4.1 Condicional para el maximo numero de amigos
            if (listaCinco.length < amigosMaximo) {                
                //2.2Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
                // Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
                if (nombreAmigo.trim() !=="") {
                    listaCinco.push(nombreAmigo);
                    //2.3 Actualizar el array de amigos: Si el valor es válido, 
                    // añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
                    amigoInput.value = "";
                    //2.4Limpiar el campo de entrada: Después de añadir el nombre, 
                    //restablecer el campo de texto a una cadena vacía.
                    amigoInput.placeholder = "Escribe un nombre";
                    //Cuando se han añadido los cinco nombres, el button se deshabilita    
                    //actualizar la lista en el DOM
                    actualizarLista()
                    
                    if (listaCinco.length === amigosMaximo) {
                            addButton.disabled = true;
                    } 
                        else {
                            alert("Por favor, inserte un nombre")
                        }
                }
            }
        }
        //3. implementar una función para sortear amigos
        function actualizarLista(amigo) {
            //3.1 Obtener el elemento de la lista: Utilizar document.getElementById() o 
            // document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
            let elementoLista = document.getElementById("listaAmigos")
            //3.2 Limpiar la lista existente: Establecer lista.innerHTML = "" 
            // para asegurarse de que no haya duplicados al actualizar.
            if (elementoiLista) {
                elementoLista.innerHTML = ""
                //3.3 Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos 
                // y crear elementos de lista (<li>) para cada título.
                listaCinco.forEach(amigo =>{
                    let elemento = document.createElement("li")
                    elemento.textContent = amigo
                    elementoLista.appendChild(elemento)
                })    
            }
        }
        //5.1 Validar que haya amigos disponibles: Antes de sortear, 
        // comprobar si el array amigos no está vacío.
        function sortearAmigo() {
            if (listaCinco === 0) {
                alert("Aún no hay amigos registrados!")
                return
            }
            //5.2 Generar un índice aleatorio: Usar Math.random() y Math.floor() 
            // para seleccionar un índice aleatorio del arreglo.
            let indexRandom = Math.floor(Math.random()*listaCinco.length);
            //5.3 Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder 
            // al nombre correspondiente en el arreglo.
            let amigoSecreto = listaCinco[indexRandom];
            publicarNombre(amigoSecreto)
        } 
       //5.4 Mostrar el resultado: Actualizar el contenido del elemento de resultado 
       // utilizando document.getElementById()e innerHTML para mostrar el amigo sorteado.
        function publicarNombre(nombre){
            let resultadoLista = document.getElementById("resultado")
            if (resultadoLista) {
                resultadoLista.innerHTML = ""
                let elemento = document.createElement("li")
                elemento.textContent = nombre
                resultadoLista.appendChild(elemento);
            }     
        }

//se llaman las funciones
agregarAmigo()

sortearAmigo()
publicarNombre()

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
