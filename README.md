# DESAFÍO AMIGO SECRETO
## Lógica de Programación

![Alura LATAM](https://img.shields.io/badge/Alura-LATAM-blue) ![Oracle ONE](https://img.shields.io/badge/Oracle-ONE-red)

---
# Índice
- [DESAFÍO AMIGO SECRETO](#desafío-amigo-secreto)
  - [Lógica de Programación](#lógica-de-programación)
- [Índice](#índice)
  - [1. Descripción del Proyecto](#1-descripción-del-proyecto)
  - [2. Funcionalidad](#2-funcionalidad)
  - [3. Uso de Código](#3-uso-de-código)
  - [4. Uso de Código](#4-uso-de-código)
  - [5. Estructura del código](#5-estructura-del-código)
  - [6. Limitaciones](#6-limitaciones)
  - [7. Autor y Contacto](#7-autor-y-contacto)

---

## 1. Descripción del Proyecto

Este projecto de programación es parte del curso de Lógica de Programación del programa Oracle ONE en colaboración con Alura LATAM.

El principal objetivo de este desafío es fortalecer las habilidades en lógica de programación. Se requiere desarrollar la lógica para resolver el problema.

---

## 2. Funcionalidad

Esta aplicación permite al usuario ingresar nombres de sus amigos y luego realizar un sorteo aleatorio para determinar, quién es el amigo secreto.

De esta manera, se aplican de manera práctica, conceptos fundamentales de lógica de programación como condicionales, arrays, funciones, entre otros.

Para lograrlo, esta aplicación debe permitir que se agreguen nombres a través de un campo de texo y un botón.

Puntos importantes:

- El programa deberá validar cuando se ingresan entrada vacía.

- El programa deberá identificar entradas dobles.
  
---

## 3. Uso de Código

Como base para el proyecto, se proporcionó un repositorio con el siguiente contenido:

a. style.css
b. index.html
c. assets folder
d. app.js (vacío)

También se nos proporcionó una plantilla en Trello, con tarjetas para facilitar la elaboración del projecto paso a paso.

Antes de comenzar el  código, fue indispensable el familiarizarme con estos documentos, entender los distintos objetos en ellos y sus funciones.

Ya familiarizado con las herramientas y recursos proporcionados se comenzó el código.

---

## 4. Uso de Código

Principalmente se uso el lenguaje de programación Java Script, y los lenguajes de marcado HTML y Markdown para la elaboración del documento que te encuentras leyendo en este momento.

---

## 5. Estructura del código

La Estructura del código sufrió muchas modificaciones, las cuales podrás verificar en los commits para el control de versiones. La estructura final del código se encuentra a continuación:

- Crear un array para almacenar los nombres
- Implementar una función para agregar amigos.
-         Capturar el valor del campo de entrada
-              Entradas Vacias
-              Entradas Repetidas
-              Actualizar el array de amigos
-              Restablecer el campo de texto a una cadena vacía.
-         Actualizar la lista en el DOM
- Implementar una función para sortear amigos
-         Obtener el elemento de la lista
-         Limpiar la lista existente:
-              Iterar sobre el arreglo
- Validar entradas vacías y sortear
-         Generar un índice aleatorio
-         Obtener el nombre sorteado
-         Mostrar resultado
- Mostrar el resultado
- Llamado de funciones

LISTA DE FUNCIONES

- agregarAmigo
- actualizarLista
- sortearAmigo
- publicarNombre

LISTA DE VARIABLES

- amigo: input box
- amigoInput: variable para el mensaje en la input box
- listaCinco: array para los nombres
- nombreAmigo: tagID de los nombres de los Amigos
- listaAmigos: tagID del display de los nombres de los amigos
- elementoLista: variable para el display de la lista
- elemento: variables para el contenedor ul para para cada nombre
- amigo: variable creada para cada iteración
- indexRandom: seleccionador de nombre
- amigoSecreto: su nombre lo dice
- resultadoLista: variable para publicar el amigo Secreto
- nombre: parámetro para la función
  
---

## 6. Limitaciones

El programa tiene las limitaciones del nivel de conocimiento del autor, que orgullosamente tiene solamente dos meses de estudio, pero el alcance de la aplicación puede ir hasta donde la imaginación de cualquier otro desarrollador con experiencia alcance.

---

## 7. Autor y Contacto

Para cualquier duda y/o comentario, puedes contactar al autor a través del correo electrónico: maurilorepina@gmail.com