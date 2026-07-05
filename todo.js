const text = document.querySelector("#input");
const add = document.querySelector("#add");
const list = document.querySelector("#list");
add.addEventListener("click", function () {
    if (text.value === "") {
        alert("Please enter a task");
    }
    else{
        const li=document.createElement("li");
        li.innerHTML = text.value + `<button class="delete">Delete</button>`;
        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            li.remove();
        });
        list.appendChild(li);
        text.value = "";
    }
});
text.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        add.click();
    }
});

