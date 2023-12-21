const scrollupBtn = document.querySelector(".scrollup");

const handlerScrollEvent = function () {
  window.scrollY < 300
    ? scrollupBtn.classList.add("visually-hidden")
    : scrollupBtn.classList.remove("visually-hidden");
};

window.addEventListener("scroll", handlerScrollEvent);

scrollupBtn.addEventListener("click", handlerScrollupBtnClick);

function handlerScrollupBtnClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
