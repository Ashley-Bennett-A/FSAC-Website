const displayNav = () => {
  let links = document.getElementById("myLinks");
  let burger = document.getElementById("button")
  if (links.style.display === "block") {
    links.style.display = "none";
    links.classList.remove("animation")
    burger.classList.remove("is-active")

  } else {
    links.style.display = "block";
    burger.classList.add("is-active")
    links.classList.add("animation")
  }
}