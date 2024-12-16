import { HomePage } from "./page/home.js";
import { LoginPage } from "./page/login.js";
import { ProfilePage } from "./page/profile.js";
import { ErrorPage } from "./page/error.js";
import { Router } from "./router/router.js";

const router = new Router();

// Main Page
router.addRoute("/", () => {
  document.body.innerHTML = HomePage();
});

// Login Page
router.addRoute("/login", () => {
  document.body.innerHTML = LoginPage();
});

// Profile Page
router.addRoute("/profile", () => {
  document.body.innerHTML = ProfilePage();
});

// 404 Page
router.addRoute("/404", () => {
  document.body.innerHTML = ErrorPage();
});

router.handleRoute(window.location.pathname);

// const MainPage = () => `
//   <div class="bg-gray-100 min-h-screen flex justify-center">
//     <div class="max-w-md w-full">
//       <header class="bg-blue-600 text-white p-4 sticky top-0">
//         <h1 class="text-2xl font-bold">항해플러스</h1>
//       </header>

//       <nav class="bg-white shadow-md p-2 sticky top-14">
//         <ul class="flex justify-around">
//           <li><a href="/" class="text-blue-600">홈</a></li>
//           <li><a href="/profile" class="text-gray-600">프로필</a></li>
//           <li><a href="#" class="text-gray-600">로그아웃</a></li>
//         </ul>
//       </nav>

//       <main class="p-4">
//         <div class="mb-4 bg-white rounded-lg shadow p-4">
//           <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
//           <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
//         </div>

//         <div class="space-y-4">

//           <div class="bg-white rounded-lg shadow p-4">
//             <div class="flex items-center mb-2">
//               <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
//               <div>
//                 <p class="font-bold">홍길동</p>
//                 <p class="text-sm text-gray-500">5분 전</p>
//               </div>
//             </div>
//             <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
//             <div class="mt-2 flex justify-between text-gray-500">
//               <button>좋아요</button>
//               <button>댓글</button>
//               <button>공유</button>
//             </div>
//           </div>

//           <div class="bg-white rounded-lg shadow p-4">
//             <div class="flex items-center mb-2">
//               <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
//               <div>
//                 <p class="font-bold">김철수</p>
//                 <p class="text-sm text-gray-500">15분 전</p>
//               </div>
//             </div>
//             <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
//             <div class="mt-2 flex justify-between text-gray-500">
//               <button>좋아요</button>
//               <button>댓글</button>
//               <button>공유</button>
//             </div>
//           </div>

//           <div class="bg-white rounded-lg shadow p-4">
//             <div class="flex items-center mb-2">
//               <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
//               <div>
//                 <p class="font-bold">이영희</p>
//                 <p class="text-sm text-gray-500">30분 전</p>
//               </div>
//             </div>
//             <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
//             <div class="mt-2 flex justify-between text-gray-500">
//               <button>좋아요</button>
//               <button>댓글</button>
//               <button>공유</button>
//             </div>
//           </div>

//           <div class="bg-white rounded-lg shadow p-4">
//             <div class="flex items-center mb-2">
//               <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
//               <div>
//                 <p class="font-bold">박민수</p>
//                 <p class="text-sm text-gray-500">1시간 전</p>
//               </div>
//             </div>
//             <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
//             <div class="mt-2 flex justify-between text-gray-500">
//               <button>좋아요</button>
//               <button>댓글</button>
//               <button>공유</button>
//             </div>
//           </div>

//           <div class="bg-white rounded-lg shadow p-4">
//             <div class="flex items-center mb-2">
//               <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
//               <div>
//                 <p class="font-bold">정수연</p>
//                 <p class="text-sm text-gray-500">2시간 전</p>
//               </div>
//             </div>
//             <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
//             <div class="mt-2 flex justify-between text-gray-500">
//               <button>좋아요</button>
//               <button>댓글</button>
//               <button>공유</button>
//             </div>
//           </div>
//         </div>
//       </main>

//       <footer class="bg-gray-200 p-4 text-center">
//         <p>&copy; 2024 항해플러스. All rights reserved.</p>
//       </footer>
//     </div>
//   </div>
// `;

// const ErrorPage = () => `
//   <main class="bg-gray-100 flex items-center justify-center min-h-screen">
//     <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
//       <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
//       <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
//       <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
//       <p class="text-gray-600 mb-8">
//         요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
//       </p>
//       <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
//         홈으로 돌아가기
//       </a>
//     </div>
//   </main>
// `;

// const LoginPage = () => `
//   <main class="bg-gray-100 flex items-center justify-center min-h-screen">
//     <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//       <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
//       <form>
//         <div class="mb-4">
//           <input type="text" id="username" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded">
//         </div>
//         <div class="mb-6">
//           <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
//         </div>
//         <button id="login-form" type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
//       </form>
//       <div class="mt-4 text-center">
//         <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
//       </div>
//       <hr class="my-6">
//       <div class="text-center">
//         <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
//       </div>
//     </div>
//   </main>
// `;

// const ProfilePage = () => `
//   <div id="root">
//     <div class="bg-gray-100 min-h-screen flex justify-center">
//       <div class="max-w-md w-full">
//         <header class="bg-blue-600 text-white p-4 sticky top-0">
//           <h1 class="text-2xl font-bold">항해플러스</h1>
//         </header>

//         <nav class="bg-white shadow-md p-2 sticky top-14">
//           <ul class="flex justify-around">
//             <li><a href="/" class="text-gray-600">홈</a></li>
//             <li><a href="/profile" class="text-blue-600">프로필</a></li>
//             <li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>
//           </ul>
//         </nav>

//         <main class="p-4">
//           <div class="bg-white p-8 rounded-lg shadow-md">
//             <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
//               내 프로필
//             </h2>
//             <form>
//               <div class="mb-4">
//                 <label
//                   for="username"
//                   class="block text-gray-700 text-sm font-bold mb-2"
//                   >사용자 이름</label
//                 >
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value="홍길동"
//                   class="w-full p-2 border rounded"
//                 />
//               </div>
//               <div class="mb-4">
//                 <label
//                   for="email"
//                   class="block text-gray-700 text-sm font-bold mb-2"
//                   >이메일</label
//                 >
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value="hong@example.com"
//                   class="w-full p-2 border rounded"
//                 />
//               </div>
//               <div class="mb-6">
//                 <label
//                   for="bio"
//                   class="block text-gray-700 text-sm font-bold mb-2"
//                   >자기소개</label
//                 >
//                 <textarea
//                   id="bio"
//                   name="bio"
//                   rows="4"
//                   class="w-full p-2 border rounded"
//                 >
// 안녕하세요, 항해플러스에서 열심히 공부하고 있는 홍길동입니다.</textarea
//                 >
//               </div>
//               <button
//                 type="submit"
//                 class="w-full bg-blue-600 text-white p-2 rounded font-bold"
//               >
//                 프로필 업데이트
//               </button>
//             </form>
//           </div>
//         </main>

//         <footer class="bg-gray-200 p-4 text-center">
//           <p>&copy; 2024 항해플러스. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   </div>
// `;

// document.body.innerHTML = `
//   ${home}
// `;

// let isLogin = false;

// const renderNavMenu = () => {
//   const nav = document.querySelector("nav");
//   console.log(isLogin);
//   if (isLogin) {
//     nav.innerHTML = `
//       <ul class="flex justify-around">
//         <li><a href="/" class="text-gray-600">홈</a></li>
//         <li><a href="/profile" class="text-blue-600">프로필</a></li>
//         <li><a href="#" class="text-gray-600">로그아웃</a></li>
//       </ul>
//     `;
//   } else {
//     nav.innerHTML = `
//       <ul class="flex justify-around">
//         <li><a href="/" class="text-blue-600">홈</a></li>
//         <li><a href="/login" class="text-gray-600">로그인</a></li>
//       </ul>
//     `;
//   }
// };

// class Router {
//   constructor() {
//     this.routes = {};
//     window.addEventListener("DOMContentLoaded", () => {
//       this.handleRoute(window.location.pathname);
//     });
//     window.addEventListener("popstate", () => {
//       this.handleRoute(window.location.pathname);
//     });
//   }
//   addRoute(path, handler) {
//     this.routes[path] = handler;
//   }
//   navigateToRoute(path) {
//     history.pushState(null, "", path);
//     this.handleRoute(path);
//   }
//   handleRoute(path) {
//     const handler = this.routes[path];
//     if (handler) {
//       handler();
//     } else {
//       router.navigateToRoute("/404");
//     }
//   }
// }

// const router = new Router();

// // Main Page
// router.addRoute("/", () => {
//   document.body.innerHTML = MainPage();
// });
// // Login Page
// router.addRoute("/login", () => {
//   document.body.innerHTML = LoginPage();
//   // profile 페이지로 이동 => 이부분 힘들었음...
//   // const form = document.querySelector("form");
//   // const username = document.getElementById("username");
//   // form.addEventListener("submit", (e) => {
//   //   e.preventDefault();
//   //   localStorage.setItem("username", username.value);
//   //   localStorage.setItem("email", "");
//   //   localStorage.setItem("bio", "");
//   //   router.navigateToRoute("/profile");
//   // });
// });
// // Profile Page
// // 로그인이 되어있는 경우 => profile page로 이동
// // 로그인이 되어있지 않은 경우 => login page로 이동
// router.addRoute("/profile", () => {
//   document.body.innerHTML = ProfilePage();

//   // 로그아웃
//   const logoutButton = document.getElementById("logout");
//   logoutButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     localStorage.removeItem("username");
//     router.navigateToRoute("/login");
//   });

//   const form = document.querySelector("form");
//   const username = document.getElementById("username");
//   const email = document.getElementById("email");
//   const bio = document.getElementById("bio");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     localStorage.setItem("email", email.value);
//     localStorage.setItem("bio", bio.value);
//     alert("프로필이 업데이트되었습니다.");
//   });

//   username.value = localStorage.getItem("username");
//   email.value = localStorage.getItem("email");
//   bio.value = localStorage.getItem("bio");
// });
// // 404 Page
// router.addRoute("/404", () => {
//   document.body.innerHTML = ErrorPage();
// });

// // event는 먹히나,, 다른 이벤트들을 새로 생성하는 느낌이 있어서..
// document.querySelector("nav").addEventListener("click", (e) => {
//   const url = e.target.closest("a");
//   console.log(url);
//   if (localStorage.getItem("username")) {
//     isLogin = true;
//   } else {
//     isLogin = false;
//   }
//   renderNavMenu();
//   if (url) {
//     console.log("if url", url);
//     // 새로고침 막기
//     e.preventDefault();
//     // 해당 url로 라우트 이동시키기
//     router.navigateToRoute(url.getAttribute("href"));
//   }
// });

// // document.addEventListener("DOMContentLoaded", renderNavMenu);

// // 다시 이해해보기 => 주소창에 직접 url을 입력하면 라우팅이 되어야하는데.. 이부분 어려움..
// router.handleRoute(window.location.pathname);
