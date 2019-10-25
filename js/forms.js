function inputEmailFocus() {
    const element = document.getElementById("placeholder-input-email");
    const input = document.getElementById("input-email");

    if (input.value != "") {
        element.classList.remove("meu-placeholder");
        element.classList.add("meu-placeholder-after");
    } else {
        element.classList.remove("meu-placeholder-after");
        element.classList.add("meu-placeholder");
    }
}

function inputSenhaFocus() {
    const element = document.getElementById("placeholder-input-senha");
    const input = document.getElementById("input-senha");

    if (input.value != "") {
        element.classList.remove("meu-placeholder");
        element.classList.add("meu-placeholder-after");
    } else {
        element.classList.remove("meu-placeholder-after");
        element.classList.add("meu-placeholder");
    }
}

