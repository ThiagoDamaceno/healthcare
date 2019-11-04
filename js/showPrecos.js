var isCheckedCurativos = false;

function showPrecos(divId) {
    const element = document.getElementById(divId);

    isCheckedCurativos = !isCheckedCurativos;

    if(isCheckedCurativos) {
        element.classList.remove("precos-itens-none");
        element.classList.add("precos-itens-ativo");    
    } else {
        element.classList.remove("precos-itens-ativo");
        element.classList.add("precos-itens-none");    
    }   
}