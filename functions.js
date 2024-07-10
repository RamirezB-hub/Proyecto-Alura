function encriptar() {
    let mensaje = document.getElementById('mensaje_des').value;
    if (mensaje == '' || mensaje == null) {
        alert('No hay mensaje para desencriptar');
    }else{
        if (tiene_mayusculas(mensaje)==1) {
            alert('La cadena no puede contener letras mayúsculas');
        }else{
            // QUITAMOS LA IMAGEN Y EL MENSAJE
            document.getElementById('sin_resultado').style.display = 'none';
            document.getElementById('alerta_lbl').style.display = 'none';
            let i = 0;
            let encriptado = [];
            while (i < mensaje.length) {
                let letra = diccionario_encriptacion(mensaje[i]);
                encriptado.push(letra);
                i++;
            }
            document.getElementById('mensaje_en').value = encriptado.join('');
            document.getElementById('mensaje_des').value = '';
        }
    }
}

function diccionario_encriptacion(letra) {
    switch (letra) {
        case 'e':
            return 'enter';
        case 'i':
            return 'imes';
        case 'a':
            return 'ai';
        case 'o':
            return 'ober';
        case 'u':
            return 'ufat'
        default:
            return letra;
    }
}
function desencriptar() {
    let mensaje = document.getElementById('mensaje_en').value;
    if (mensaje == '' || mensaje == null) {
        alert('No hay mensaje para desencriptar');
    }else{
        let i = 0;
        let claves = ['enter','imes','ai','ober','ufat'];
        let letras = ['e','i','a','o','u'];
        while (i < claves.length) {        
            if (mensaje.includes(claves[i])) {
                while (mensaje.includes(claves[i])) {                
                    mensaje = mensaje.replace(claves[i],letras[i]);
                }
            }
            i++;
        }    
        document.getElementById('mensaje_des').value = mensaje;
    }
}

function copiar() {
    let encriptado = document.getElementById('mensaje_en').value;
    if (encriptado == '' || encriptado == null) {
        alert('No hay mensaje para copiar');
    }else{
        navigator.clipboard.writeText(encriptado);
        alert('Mensaje encriptado copiado al portapapeles');
    }
}


function tiene_mayusculas(texto){
var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
   for(let i=0; i<texto.length; i++){
      if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}
