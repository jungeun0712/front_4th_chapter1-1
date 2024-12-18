export class Router {
  constructor() {
    this.routes = {};
    window.addEventListener("popstate", () => {
      this.handleRoute(window.location.pathname);
    });
  }
  addRoute(path, handler) {
    this.routes[path] = handler;
  }
  navigateTo(path) {
    history.pushState(null, "", path);
    this.handleRoute(path);
  }
  handleRoute(path) {
    const handler = this.routes[path];
    if (handler) {
      handler();
    } else {
      this.navigateTo("/404");
    }

    const nav = document.querySelector("nav");
    // 주소값이 다르다..
    if (nav) {
      nav.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          e.preventDefault();
          this.navigateTo(e.target.pathname);
        }
      });
    }
  }
}

export class HashRouter {
  constructor() {
    this.routes = {};
    window.addEventListener("hashchange", () => {
      console.log(window.location.pathname);
      this.handleRoute(window.location.pathname);
    });
  }
  addRoute(path, handler) {
    this.routes[path] = handler;
  }
  navigateTo(path) {
    history.pushState(null, "", path);
    this.handleRoute(path);
  }
  handleRoute(path) {
    console.log(path);
    const handler = this.routes[path];
    if (handler) {
      handler();
    }
    // else {
    //   this.navigateTo("/404");
    // }

    const nav = document.querySelector("nav");
    // 주소값이 다르다..
    if (nav) {
      nav.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          e.preventDefault();
          this.navigateTo(e.target.pathname);
        }
      });
    }
  }
}
