const switchElement = document.querySelector(".theme-switch"),
  iconMoon = document.querySelector(".switch-icon-moon"),
  iconSun = document.querySelector(".switch-icon-sun");

switchElement.addEventListener("click", themeSwitch);

function themeSwitch() {
  if (switchElement.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconMoon.style.display = "none";
    iconSun.style.display = "unset";
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconMoon.style.display = "unset";
    iconSun.style.display = "none";
  }
}

function setThemeOnLoad() {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    switchElement.checked = true;
    document.body.classList.add(currentTheme);
    iconMoon.style.display = "none";
    iconSun.style.display = "unset";
  }
}

setThemeOnLoad();
