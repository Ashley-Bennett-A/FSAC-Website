const displayNav = () => {
  let x = document.getElementById("myLinks");
  let burger = document.getElementById("button")
  if (x.style.display === "block") {
    x.style.display = "none";
    burger.classList.remove("is-active")
    
  } else {
    x.style.display = "block";
    burger.classList.add("is-active")
    x.classList.add("is-active")
  }
}
