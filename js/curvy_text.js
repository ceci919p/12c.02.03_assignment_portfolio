/* let title = document.querySelector(".title");
let p = document.querySelector(".small_title");

window.addEventListener("DOMContentLoaded", loaded);

function loaded() {
  title.innerHTML = wrapLetter(title.textContent);
  p.innerHTML = wrapLetter(p.textContent);

  gsap.from("span", {
    x: 400,
    opacity: 0,
    duration: 3,
    stagger: { amount: 1 },
  });
}

function wrapLetter(text) {
  const splitWord = text.split("");

  splitWord.forEach((word, i, arr) => {
    arr[i] = `<span>${word}</span>`;
  });
  return splitWord.join(" ");
} */

const textPath = document.querySelector("textPath");

const h = document.documentElement,
  b = document.body,
  st = "scrollTop",
  sh = "scrollHeight";

document.addEventListener("scroll", (e) => {
  let percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  textPath.setAttribute("startOffset", -percent * 40 + 1200);
});
