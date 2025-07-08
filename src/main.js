import "./main.css";

// 外链新窗口打开
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("a[href^='https://']")
    .forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });
});

// 返回顶部按钮激活
window.addEventListener("scroll", () => {
  const btn = document.querySelector(".to-top");
  if (!btn) return;
  btn.classList.toggle("active", window.scrollY >= window.innerHeight / 2);
});
