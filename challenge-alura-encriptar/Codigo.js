// Este es el codigo de mi Challenge encriptador Alura, mi nobmre es Hector Rubalcava Arias

const textoIngresado = document.querySelector("#mensajeAqui")
const mensajeResultado = document.querySelector("#mensajeResultado")
console.log(textoIngresado,mensajeResultado)

function resultado(elemento, contenido) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = contenido;
  return;
}


const matriz_code = [

      ["e","enter"], // indice 0
      ["i","imes"],  // indice 1
      ["a","ai"],    // indice 2
      ["o","ober"],  // indice 3
      ["u","ufat"],  // indice 4

];

const matriz_code_des = [

    ["enter","e"], // indice 0
    ["imes","i"],  // indice 1
    ["ai","a"],    // indice 2
    ["ober","o"],  // indice 3
    ["ufat","u"],  // indice 4

];


function encriptar()
{
    const texto = encriptarAccion(textoIngresado.value);
    console.log(texto);
    resultado("p",`Codificacion: ${texto}`);
    
}


function encriptarAccion(textoEncriptado){

     for(let i=0; i < matriz_code.length; i++){
     if(textoEncriptado.includes(matriz_code[i][0])){
     textoEncriptado = textoEncriptado.replaceAll(
            
            matriz_code[i][0],
            matriz_code[i][1]
        
            )
     
        }

     }

   return textoEncriptado;
   
   

}



/*
const resultadoEncriptado = document.querySelector("#mensajeResultado")
resultadoEncriptado.innerHTML = `Encriptacion ${texto}'}`;
*/
function desencriptar()
{

   let textoDes = desencriptacion(mensajeResultado.value);
   console.log(textoDes)  
   resultado("#desParrafo",`Descodificacion: ${textoDes}`);
   
    
}

function desencriptacion(textoDesencriptado){

         for(let i=0; i < matriz_code_des.length; i++){

           if(textoDesencriptado.includes(matriz_code_des[i][0])){

            textoDesencriptado = textoDesencriptado.replaceAll(

              matriz_code_des[i][0],
              matriz_code_des[i][1]

            )

           }

         }
 
         return textoDesencriptado;
         

}

