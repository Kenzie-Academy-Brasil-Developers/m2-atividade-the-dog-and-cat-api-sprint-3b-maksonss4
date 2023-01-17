function criarFigure(url, fig) {
  const img = document.createElement("img");
  img.alt = "Imagem";
  img.src = url;

  fig.appendChild(img);
}

const buttonGetCat = document.querySelector(".buttonGetCat");
const buttonGetDog = document.querySelector(".buttonGetDog");

buttonGetCat.addEventListener("click", async () => {
  const fig = document.querySelector(".figCat");
  fig.innerHTML = "";
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const bodyDaRequisicao = await response.json();
  const url = bodyDaRequisicao[0].url;

  criarFigure(url, fig);
});

buttonGetDog.addEventListener("click", async () => {
  const fig = document.querySelector(".figDog");
  fig.innerHTML = "";
  const response = await fetch("https://api.thedogapi.com/v1/images/search");
  const bodyDaRequisicao = await response.json();
  const url = bodyDaRequisicao[0].url;

  criarFigure(url, fig);
});
