import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"



let botonRegistro = document.getElementById("botonRegistro")
let modalregistro=new bootstrap.Modal(document.getElementById('mensaje'))
let textomodal=document.getElementById("mensajemodal")

botonRegistro.addEventListener("click",function(event){
event.preventDefault()

let email= document.getElementById("Email").value
let password = document.getElementById("password").value



const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("Exito en el registro")
    textomodal.textContent="Exito en el registro"
        modalregistro.show()
        let formulario=document.getElementById("formregister")
        formulario.reset() 
        setTimeout(function(){
            modalregistro.hide()
        },4000)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Fallo"+errorMessage)
    textomodal.textContent="Error en el registro"+errorMessage
        modalregistro.show()

        setTimeout(function(){
            modalregistro.hide()
        },4000)
    });
    // ..
  });

