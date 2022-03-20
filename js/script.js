window.addEventListener("DOMContentLoaded", loaded);

let h1 = document.querySelector("h1");
let title = document.querySelector(".title");
let p = document.querySelector(".small_title");
const sections = document.querySelectorAll("section");

function loaded() {
  revealAnimation();
  revealHeader();
}

function revealAnimation() {
  gsap.utils.toArray("article").forEach((article) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: article,
        toggleActions: "restart none none none",
        start: "top 95%",
      },
    });

    tl.to(article, {
      duration: 1.5,
      opacity: 1,
    });
  });
}

function revealHeader() {
  if (h1.classList.contains("title") && p.classList.contains("small_title")) {
    h1.innerHTML = wrapLetter(h1.textContent);
    p.innerHTML = wrapLetter(p.textContent);
  } else {
    h1.innerHTML = wrapWord(h1.textContent);
  }

  gsap.from("span", {
    x: 400,
    opacity: 0,
    duration: 3,
    stagger: { amount: 1 },
  });
}

function wrapWord(text) {
  const splitWord = text.split(" ");

  splitWord.forEach((word, i, arr) => {
    arr[i] = `<span>${word}</span>`;
  });
  return splitWord.join(" ");
}

function wrapLetter(text) {
  const splitWord = text.split("");

  splitWord.forEach((word, i, arr) => {
    arr[i] = `<span>${word}</span>`;
  });
  return splitWord.join(" ");
}
