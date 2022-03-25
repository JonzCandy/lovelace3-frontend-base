const apiUrl = "https://rickandmortyapi.com/api";

async function getCharacterById(num) {
  let recebe = await fetch(`${apiUrl}/character/${num}`);
  let pacote = await recebe.json();
  let nome = pacote.name;
  let resposta = await fetch(`${apiUrl}/character/?name=${nome}`);
  let caixa = await resposta.json();

  let infos = caixa.results.map((el) => {
    return `<img src="${el.image}"/>
            <a class="image-link" href="${el.image}">
              Image link: ${el.image}
            </a>
            <div>
              id: ${el.id}
            </div>
            <div>
              name: ${el.name}
            </div>`;
  });

  $("#pesquisado").append(infos);
}

$(document).on('click', "#recebechid",function(){
  let ident = $("#chid").val();
  getCharacterById(ident);
});