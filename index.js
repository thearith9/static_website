const navigation = document.getElementById("navigation");
const pages = navigation.getElementsByClassName("nav");

for (let i = 0; i < pages.length; i++) {
  pages[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
