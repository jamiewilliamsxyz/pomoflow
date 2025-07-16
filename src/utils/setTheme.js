const savedTheme = localStorage.getItem("theme");
const defaultTheme = "dark";

if (!savedTheme) {
  localStorage.setItem("theme", defaultTheme);
  document.documentElement.setAttribute("data-theme", defaultTheme);
} else {
  document.documentElement.setAttribute("data-theme", savedTheme);
}
