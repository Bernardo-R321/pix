let buttonEnviar = document.getElementById("button");
let remetente = document.getElementById("remetente");
let destinatario = document.getElementById("destinatario");
let valor = document.getElementById("valor");

async function enviarPix() {
  let payload = {
    sender: remetente.value,
    recipient: destinatario.value,
    value: valor.value,
  };

  let resposta = await fetch("http://localhost:3000/enviarPix", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  let dados = await resposta.json();
  alert("Pix enviado com sucesso!");
  remetente.value = "";
  destinatario.value = "";
  valor.value = "";
}

buttonEnviar.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  enviarPix();
});
