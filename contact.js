const errormsg = document.getElementById("error-msg");

const submit = document.getElementById("submit");
submit.addEventListener("click", function validate(event) {
    event.preventDefault();

    let arr = document.querySelectorAll("input, textarea");

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!element.value) {
            element.classList.add("error");
        } else {
            element.classList.remove("error");
        }
    }

    let errors = document.getElementsByClassName("error");
    errormsg.style.visibility = errors.length > 1 ? "visible" : "hidden";
});
