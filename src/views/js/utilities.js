// Função responsável por capturar e enviar o valor digitado
// pelo usuário a página de busca
function capturarValor() {
    const inputSearch = document.getElementById('inputSearch').value
    localStorage.setItem('searchValue', inputSearch)
    window.location.href = 'busca.html'
}