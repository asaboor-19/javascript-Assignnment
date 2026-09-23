
let count = 0;

let timer = setInterval(function () {
    count++;
    document.getElementById("timer").innerText = count;
}, 1000);

document.getElementById("stop-btn").addEventListener("click", function () {
    clearInterval(timer);
});


function fakeFetchUser() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                name: "Alex",
                age: 22
            });
        }, 1000);
    });
}

document.getElementById("load-user-btn").addEventListener("click", async function () {
    let user = await fakeFetchUser();

    document.getElementById("user-display").innerText =
        "Name: " + user.name + " | Age: " + user.age;
});


document.getElementById("item-list").addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});

