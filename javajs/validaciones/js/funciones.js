const validarContacto = () =>{
    //validar campos vacios
    
    let documento = document.querySelector('#documento')
    let nombres = document.querySelector('#nombres')
    if (documento.value.length == 0 ) {
        alert('El documento esta vacio. Verifique')
        
    }else if (nombres.value.length == 0) {
        alert('El nombre esta vacio. Verifique')
    }else{
        alert('Datos enviados correctamente')
    }
}

//Capturar el objeto al cual se le dara clic.
const boton = document.querySelector('#btnEnviar')
boton.addEventListener('click',validarContacto)
