function darkTheme() {
  let styleTag = document.getElementById("theme");
  console.log(styleTag);
  styleTag.href = "./style/dark.css";
}

function lightTheme() {
  let styleTag = document.getElementById("theme");
  styleTag.href = "./style/light.css";
}

function defaultTheme() {
  let styleTag = document.getElementById("theme");
  styleTag.href = "";
}
