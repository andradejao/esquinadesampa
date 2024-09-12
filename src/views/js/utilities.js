// Função responsável por capturar e enviar o valor digitado
// pelo usuário a página de busca
function capturarValor() {
    const inputSearch = document.getElementById('inputSearch').value
    localStorage.setItem('searchValue', inputSearch)
    window.location.href = 'busca.html'
}

// Função responsável por ocultar e mostrar a senha digitada
function ocultarSenha() {
    const eye = document.querySelector('.icon')
    const input = document.querySelector('#inputPassword')

    if (input.type === 'password') {
        input.type = 'text'
        eye.src = "../public/img/eyeclosed.png"
    } else {
        input.type = 'password'
        eye.src = "../public/img/eyeopen.png"
    }
}

// Função responsável por automatizar o endereço pela busca do CEP através de API
// ativar função com blur
const input = document.getElementById('inputCep')
input.addEventListener('blur', () => {
    let cep = document.querySelector('#inputCep').value
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
    // uso de promisse para recuperar os dados do webservices (API)
    fetch(urlAPI)
        .then((response) => { //obter os dados
            return response.json()
        })
        .then((dados) => { //manipular os dados obtidos
            document.getElementById('')
        })
        .catch((error) => {
            console.log(`Erro ao obter o endereço: ${error}`)
        })
})