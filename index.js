const inputBox = document.getElementById("input-box");
const listContainer = Document.getElementById("list-container");

function addTask() {
  if (input - box.value === '') {
    alert("you must write something!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = input - box.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("cheched");
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }

}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();