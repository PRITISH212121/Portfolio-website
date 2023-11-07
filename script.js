var tabcontents = document.getElementsByClassName("tab-contents");
var tablinks = document.getElementsByClassName("tab-links");
var sm = document.getElementById("sidemenu");
var openbtn = document.getElementById("openbtn");
var dog = document.getElementById("dog");
var dogpara = document.getElementById("dog-para");

function opentab(tabname) {
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
    tablink.style.fontSize = "18px";
    tablink.style.color = "	#B0B0B0";
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  document.querySelector(".active-link").style.fontSize = "22px";
  document.querySelector(".active-link").style.color = "white";
}
function openmenu() {
  sm.style.opacity = "1";
  openbtn.style.display = "none";
}
function closemenu() {
  sm.style.opacity = "0";
  openbtn.style.display = "block";
}
