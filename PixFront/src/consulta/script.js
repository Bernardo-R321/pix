let corpoTable = document.getElementById("corpo-table");
let buttonConsultar = document.getElementById("consultar");
let radioButtons = document.getElementsByName("opcao");
let campoId = document.getElementById("id");

async function buscarPix() {
  let tipoRadio = "";

  for (i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      tipoRadio = radioButtons[i].value;
    }
  }

  let payload = {
    id: campoId.value,
    tipo: tipoRadio,
  };

  console.log("Estou aqui!");
  console.log(payload);

  let resposta = await fetch("http://localhost:3000/pixEspecifico", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!resposta.ok) {
    alert("Ops! Algo deu errado!");
  } else {
    let pixes = await resposta.json();

    for (let pix of pixes) {
      let tableRow = document.createElement("tr");
      let tdId = document.createElement("td");
      let tdRemetente = document.createElement("td");
      let tdDestinatario = document.createElement("td");
      let tdData = document.createElement("td");
      let tdValor = document.createElement("td");

      tdId.innerText = pix.id;
      tdRemetente.innerText = pix.sender.name;
      tdDestinatario.innerText = pix.recipient.name;
      tdData.innerText = pix.createdAt;
      tdValor.innerText = `R$ ${pix.value}`;

      tableRow.appendChild(tdId);
      tableRow.appendChild(tdRemetente);
      tableRow.appendChild(tdDestinatario);
      tableRow.appendChild(tdData);
      tableRow.appendChild(tdValor);

      corpoTable.appendChild(tableRow);
    }
  }
}

buttonConsultar.addEventListener("click", (event) => {
  console.log("Entrei no event listener");
  event.stopPropagation();
  event.preventDefault();
  buscarPix();
});
