const cokie = document.querySelector(".cookieSvg");
const closeCokie = document.querySelector("#closeCookir");
const container = document.querySelector(".container");

const startAnim = () => {
  container.classList.add("openContainer");
  cokie.classList.add("openAnim");
  cokie.addEventListener("animationend", () => {
    cokie.classList.add("jumping");
    container.style.opacity = "1";
    container.classList.remove("openContainer");
  });
};
const closeCokieWindow = () => {
  container.classList.add("closeWin");
  cokie.classList.add("cokieEnd");
  closeCokie.style.background = "rgba(0, 0, 0, 0.5)";
  container.addEventListener("animationend", () => {
    container.style.display = "none";
  });
};
addEventListener("load", startAnim);
closeCokie.addEventListener("click", closeCokieWindow);
