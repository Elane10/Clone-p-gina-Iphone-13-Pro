const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Clicou em:", btn.id);

    // Remove a classe 'selected' de todos os círculos de cor
    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    // Adiciona a classe 'selected' no botão clicado
    btn.querySelector(".color").classList.add("selected");

    // Atualiza a imagem
    image.classList.add("changing");

    // Define o novo src (baseado no id do botão)
    image.setAttribute("src", `img/iphone_${btn.id}.jpg`);

    // Remove a classe 'changing' após 200ms (para dar tempo da transição)
    setTimeout(() => {
      image.classList.remove("changing");
    }, 200);
  });
});
