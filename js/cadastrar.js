function toIconPaciente() {
    const iconPaciente = document.getElementById("icon-paciente");

    iconPaciente.classList.remove("icon-inativo");
    iconPaciente.classList.add("icon-ativo");

    const iconProfissional = document.getElementById("icon-profissional");

    iconProfissional.classList.remove("icon-ativo");
    iconProfissional.classList.add("icon-inativo");

    const formPaciente = document.getElementById("form-cadastre-se-paciente");
    formPaciente.style.display = "block";

    const formProfissional = document.getElementById("form-cadastre-se-profissional");
    formProfissional.style.display = "none";

}

function toIconProfissional() {
    const iconPaciente = document.getElementById("icon-paciente");

    iconPaciente.classList.remove("icon-ativo");
    iconPaciente.classList.add("icon-inativo");

    const iconProfissional = document.getElementById("icon-profissional");

    iconProfissional.classList.remove("icon-inativo");
    iconProfissional.classList.add("icon-ativo");

    const formPaciente = document.getElementById("form-cadastre-se-paciente");
    formPaciente.style.display = "none";

    const formProfissional = document.getElementById("form-cadastre-se-profissional");
    formProfissional.style.display = "block";
}