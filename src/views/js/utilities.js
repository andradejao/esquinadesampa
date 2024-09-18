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
    fetch(urlAPI)
        .then((response) => {
            return response.json()
        })
        .then((dados) => {
            document.getElementById('inputLogradouro').value = dados.logradouro
            document.getElementById('inputBairro').value = dados.bairro
        })
        .catch((error) => {
            console.log(`Erro ao obter o endereço: ${error}`)
        })
})

// Limitar tamanho do input de CNPJ
const inputCnpj = document.getElementById('inputCnpj')

inputCnpj.addEventListener('input', () => {
    let cnpjValue = inputCnpj.value

    if (cnpjValue.length > 14) {
        inputCnpj.value = cnpjValue.slice(0, 14)
    }
})

// Impedir uso de caracteres não numéricos
const inputTelefone = document.getElementById('inputTelefoneResidencial')
const inputCelular = document.getElementById('inputTelefoneCelular')

inputTelefone.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/\D/g, '')
})

inputCelular.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/\D/g, '')
})

// Formatar input de preço, adicionando vírgula automaticamente
const inputPreco = document.getElementById('inputPreco')

inputPreco.addEventListener('input', (event) => {
    let valor = event.target.value.replace(/\D/g, '')

    if (valor.length > 4) {
        valor = valor.slice(0, 4)
    }
    if (valor.length >= 3) {
        valor = valor.slice(0, -2) + '.' + valor.slice(-2)
    }

    event.target.value = valor
})