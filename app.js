
//alert("hola");

function main() {
    const inputEmail = document.querySelector("#email");
    const inputNombre = document.querySelector("#nombre");
    const h1Titulo = document.querySelector("h1");
    const spanTexto = document.querySelector("#texto");

    
    console.log(inputEmail.value);
    console.log(inputNombre.value);

    console.log(spanTexto);
    spanTexto.innerHTML = `Mi nombre es ${inputNombre.value}, mi mail es ${inputEmail.value}. Vivo en 308 Negra Arroyo Lane, Albuquerque, Nuevo México, 87104. Esta es mi confesión. Si estás viendo esta cinta, probablemente esté muerto, asesinado por mi cuñado Hank Schrader. Hank ha estado construyendo un imperio de metanfetamina durante más de un año y me utiliza como su químico. Poco después de cumplir 50 años, Hank vino a mí con una propuesta bastante impactante. Me pidió que usara mis conocimientos de química para cocinar metanfetamina, que luego vendería utilizando sus conexiones en el mundo de las drogas. Conexiones que hizo a lo largo de su carrera con la DEA.`
    
    spanTexto.style.color = `rgb(${Math.floor(Math.random()*256)},0,0)`;
    spanTexto.style.border = "2px solid black";
    spanTexto.style.background = "white"
    spanTexto.style.fontSize = "20px"

    h1Titulo.style.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`

    document.querySelector("body").style.background = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`

}

