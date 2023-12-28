let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addItam() {
  if (inputBox.value === "") {
    alert("You must write somthing input fild.!")
  } else {
    let li = document.createElement("LI");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span =  document.createElement("SPAN");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""
  saveTask()
}

listContainer.addEventListener("click", function(addOrRemove) {
  if(addOrRemove.target.tagName === "LI"){
    addOrRemove.target.classList.toggle("checked");
    saveTask()

  } else if(addOrRemove.target.tagName === "SPAN") {
    addOrRemove.target.parentElement.remove();
    saveTask()

  }
});

function saveTask() {
  localStorage.setItem("yourTask", listContainer.innerHTML);
}

function viewTask() {
  listContainer.innerHTML = localStorage.getItem("yourTask");
}

viewTask();



