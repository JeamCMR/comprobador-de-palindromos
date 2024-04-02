/**VARIABLES */

const textCadena = document.getElementById("text-input");
const buttonValidar = document.getElementById("check-btn");
const result = document.getElementById("result");


//Limpiar input
const convertToLower = (input) =>
  input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

// Validar si la cadena de texto es polindroma
const isPolindromo = (input) => {
  if (input.trim() === "") {
    const hidden = result.classList.contains("hidden");
    if (!hidden) {
      result.classList.add("hidden");
    }
    alert("Please input a value");
  } else {
    const textOrigi = input;
    result.replaceChildren(); //vaciar el texto

    //limpiar el input
    const textChage = convertToLower(input);
    const resultShow = `<Strong>${textOrigi}</strong>
            ${
              textChage === [...textChage].reverse().join("") ? "es" : "no es"
            } un Polindromo `;

    const pTag = document.createElement("p");
    pTag.className = "user-input";
    pTag.innerHTML = resultShow;
    result.appendChild(pTag);

    //Mostrar resultado
    result.classList.remove("hidden");
  }
};

buttonValidar.addEventListener("click", () => {
  isPolindromo(textCadena.value);
  textCadena.value = "";
});

textCadena.addEventListener("keydown", e =>{
    if (e.key === 'Enter') {
        isPolindromo(textCadena.value);
        textCadena.value = "";
      }
});
