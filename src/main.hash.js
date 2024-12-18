// import "./main.js";
import { HomePage } from "./page/home.js";
import { HashRouter } from "./router/router.js";

const hashRouter = new HashRouter();
// let isLogin = !!JSON.parse(localStorage.getItem("user"));
const root = document.getElementById("root");

hashRouter.addRoute("/index.hash.html", () => {
  root.innerHTML = HomePage();

  const login = document.querySelector("#login-link");
  if (login) {
    login.addEventListener("click", (e) => {
      e.preventDefault();
      hashRouter.navigateTo("/login");
    });
  }

  // 로그아웃
  // logout();
});

// 처음 들어왔을때? 기본 url 찾아가기..?
hashRouter.handleRoute(window.location.pathname);
