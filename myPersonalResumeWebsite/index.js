function openTab(tabname) {
  let tablinks = document.getElementsByClassName("tab-links");
  let tabcontents = document.getElementsByClassName("tab-contents");

  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openMenu() {
  let sideMenu = document.getElementById("sideMenu");

  sideMenu.style.right = "0";
}

function closeMenu() {
  let sideMenu = document.getElementById("sideMenu");

  sideMenu.style.right = "-200px";
}
