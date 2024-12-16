export class Router {
  constructor() {
    this.routes = {};
    // window.addEventListener("DOMContentLoaded", () => {
    //   this.handleRoute(window.location.pathname);
    // });
    window.addEventListener("popstate", () => {
      this.handleRoute(window.location.pathname);
    });
  }
  addRoute(path, handler) {
    this.routes[path] = handler;
  }
  navigateToRoute(path) {
    history.pushState(null, "", path);
    this.handleRoute(path);
  }
  handleRoute(path) {
    const handler = this.routes[path];
    if (handler) {
      handler();
    } else {
      this.navigateToRoute("/404");
    }
  }
}
