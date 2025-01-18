import { Header } from "./components/Header.js";
import { HomePage } from "./pages/Home.js";
import { RegisterPage } from "./pages/Register.js";
import { SigninPage } from "./pages/Siginin.js";
import { parseRequestUrl, setParseUrl } from "./utils.js";

const routes = {
  "/": HomePage,
  "/signin": SigninPage,
  "/register": RegisterPage,
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl = setParseUrl(request);

  const currentPage = routes[parseUrl];
  const { after_render } = currentPage;

  const header = document.getElementById("header-container");
  const main = document.getElementById("main-container");

  header.innerHTML = await Header.render();
  main.innerHTML = await currentPage.render();

  if (after_render) {
    await after_render();
  }
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
