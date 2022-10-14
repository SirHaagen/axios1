
//!EJECUTAR EL CONJUNTO DE ARCHIVOS EN HTDOCS !!!!!!!!!!!!!!

//Ejemplo petición GET

axios("039_axios.txt")
.then(respuesta=>console.log(respuesta.data))
.catch(error=>console.log(error));


//Ejemplo petición POST

axios.post("039_axios.txt")
.then(respuesta=>console.log(respuesta))
.catch(error=>console.log(error));


//Otro ejemplo con petición POST, haciendo lo mismo que en 037_ajax2

axios.post("https://reqres.in/api/users",{
  "nombre": "Gordor",
  "apellido": "Mido"
})
.then(respuesta=>console.log(respuesta.data))
.catch(error=>console.log(error));


