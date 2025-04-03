/*VALIDAR FORMULARIO*/
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const form = document.getElementById('formulariocontacto')
const parrafo = document.getElementById('warnings')

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""

    if(nombre.value ===""){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }

    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
        
    }

})