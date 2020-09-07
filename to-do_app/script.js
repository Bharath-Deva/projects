let todo_arr = [];
let data = document.querySelector(".data");
let index = 0;

data.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        todo_arr.push(data.value);
        let(data.value, index)
        data.value = ""
        console.log(`${todo_arr},${index}`)
        index += 1;
    }
})

let = (data, index) => {
    let displayContainer = document.querySelector(".display-container")

    displayContainer.insertAdjacentHTML("beforeend", `<li class="display" id="${index}">${data}<button class="close" onclick = update(${index})>&times;</button></li>`)

}

let update = (index) => {
    let del_data = document.getElementById(index)
    console.log(`deleted:`)
    console.log(del_data)
    del_data.style.display = "none";

}

