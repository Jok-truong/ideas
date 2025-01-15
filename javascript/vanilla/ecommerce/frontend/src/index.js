import Header from "./components/Header.js";

const router = async () => {
  const header = document.getElementById("header-container");
  console.log({ header });

  header.innerHTML = await Header.render();
};

window.addEventListener("load", router);
