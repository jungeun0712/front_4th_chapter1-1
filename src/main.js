import { HomePage } from "./page/home.js";
import { Router } from "./router/router.js";
import { LoginPage } from "./page/login.js";
import { ProfilePage } from "./page/profile.js";
import { ErrorPage } from "./page/error.js";

const router = new Router();
let isLogin = !!JSON.parse(localStorage.getItem("user"));

const root = document.getElementById("root");

HomePage();
// document.addEventListener("DOMContentLoaded", () => {
// });
router.addRoute("/", () => {
  root.innerHTML = HomePage();

  const login = document.querySelector("#login-link");
  if (login) {
    login.addEventListener("click", (e) => {
      e.preventDefault();
      router.navigateTo("/login");
    });
  }

  // 로그아웃
  logout();
});

// Login Page
router.addRoute("/login", () => {
  root.innerHTML = LoginPage();

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    const username = document.getElementById("username");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: username.value,
          email: "",
          bio: "",
        }),
      );
      isLogin = true;
      router.navigateTo("/profile");
    });
  }

  if (isLogin) {
    router.navigateTo("/");
  }
});

router.addRoute("/profile", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    router.navigateTo("/login");
    return;
  }

  root.innerHTML = ProfilePage(isLogin);

  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const bio = document.getElementById("bio");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: username.value,
        email: email.value,
        bio: bio.value,
      }),
    );
    router.navigateTo("/profile");
    alert("프로필이 업데이트되었습니다.");
  });

  username.value = user.username || "";
  email.value = user.email || "";
  bio.value = user.bio || "";

  // 로그아웃
  logout();
});

// 404 Page
router.addRoute("/404", () => {
  root.innerHTML = ErrorPage();
});

function logout() {
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "logout") {
      e.preventDefault();
      localStorage.clear();
      isLogin = false;
      router.navigateTo("/login");
    }
  });
}

router.handleRoute(window.location.pathname);
