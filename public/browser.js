// Lesson 13 (for thursday)
console.log("Starting Frontend JS ");

let createField = document.getElementById("create-field");
function itemTemplate(item) {
    return `<li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
    >
        <span class="item-text">${item.reja}</span>
        <div>
            <button
                data-id="${item._id}"
                class="edit-me btn btn-secondary btn-sm mr-1"
            >
                Edit
            </button>
            <button
                data-id="${item._id}"
                class="delete-me btn btn-danger btn-sm"
            >
                Delete
            </button>
        </div>
    </li>`;
}
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    axios
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            document
                .getElementById("item-list")
                .insertAdjacentHTML("beforeend", itemTemplate(response.data));
            createField.value = "";
            createField.focus();
        })
        .catch((err) => {
            console.log("Please, Try one more.!");
        });
});

document.addEventListener("click", function (e) {
    // console.log(e);

    // delete operations =========================================================================
    console.log(e.target);

    if (e.target.classList.contains("delete-me")) {
        // alert("You clicked 'delete' button.");

        // if (confirm("Are you sure to delete? ")) {
        //     alert("You said: Yes.");
        // } else {
        //     alert("You said: No.");
        // }

        if (confirm("Are you sure to delete? ")) {
            axios
                .post("/delete-item", { id: e.target.getAttribute("data-id") })
                .then((response) => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.remove();
                })
                .catch((err) => {
                    console.log("Please, Try one more.");
                });
        }
    }

    // edit operations =========================================================================
    if (e.target.classList.contains("edit-me")) {
        // alert("You clicked 'edit' button.");

        let userInput = prompt(
            "Edit the changes",
            e.target.parentElement.parentElement.querySelector(".item-text")
                .innerHTML
        );
        if (userInput) {
            // console.log(userInput);
            axios
                .post("/edit-item", {
                    id: e.target.getAttribute("data-id"),
                    new_input: userInput,
                })
                .then((response) => {
                    console.log(response);
                    e.target.parentElement.parentElement.querySelector(
                        ".item-text"
                    ).innerHTML = userInput;
                })
                .catch((err) => {
                    console.log("Please, Try one more.");
                });
        }
    }
});

// delete all operations =========================================================================

document.getElementById("clean-all").addEventListener("click", function () {
    axios.post("/delete-all", { delete_all: true }).then((response) => {
        alert(response.data.state);
        document.location.reload();
    });
});
