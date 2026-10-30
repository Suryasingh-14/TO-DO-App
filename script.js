// Input box
const inputBox = document.getElementById("input-box");

// Add button
let addButton = document.querySelector(".row button");

// List container
let listContainer = document.getElementById("list-container");

function updateCount() {
    const total = listContainer.querySelectorAll("li").length;
    document.getElementById("task-count").textContent = total + " task" + (total !== 1 ? "s" : "");
}
function addTask()
{
    if (inputBox.value === "") {
    // ✅ NEW - shake instead of alert
    const row = document.querySelector(".row");
    row.classList.add("shake");
    setTimeout(() => row.classList.remove("shake"), 300);
    return; // stop the function here
}
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
    updateCount();
}
inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
        updateCount();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
        updateCount();
    }
},false);

function saveData()
{
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();