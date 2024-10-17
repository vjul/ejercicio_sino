const getInfo = async () => {
  try {
    const response = await fetch("https://yesno.wtf/api");
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

document.querySelector("#boton").addEventListener("click", async () => {
  let input = document.querySelector("input").value;
  if (input.trim() == "") {
    alert("Debes escribir una pregunta!");
    return;
  }
  let respuesta = await getInfo();
  let sino =
    respuesta.answer == "yes"
      ? "SI"
      : respuesta.answer == "no"
      ? "NO"
      : "TAL VEZ";
  let gif = respuesta.image;

  document.querySelector("#respuesta").innerHTML = sino;
  document.querySelector("#gif").innerHTML = `<img src="${gif}" alt="gif" style="max-width: 30rem;">`;
});
