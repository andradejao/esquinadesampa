// Impedir uso da tecla enter
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
    }
})

// Função responsável por postar um feedback
function publicarFeedback() {
    const id = window.location.search.split('=')
    let nomeFeedback = document.querySelector('#recipient-name')
    let opiniaoFeedback = document.querySelector('#message-text')
    let notaFeedback = document.querySelector('.form-select')
    if (opiniaoFeedback.value == "") {
        return
    } else {
        fetch('http://127.0.0.1:4000/api/feedback/cadastrar', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nome: nomeFeedback.value,
                opiniao: opiniaoFeedback.value,
                nota: notaFeedback.value,
                idrestaurante: id[1]
            })
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                window.location.reload()
            })
            .catch((error) => console.error("Erro ao acessar a api" + error))
    }
}

// Função responsável pelo cadastro do restaurante
function cadastrarRestaurante() {
    const token = localStorage.getItem('token')
    const nomeRestaurante = document.getElementById('inputName').value.trim()
    const cnpjRestaurante = document.getElementById('inputCnpj').value
    const categoriaRestaurante = document.getElementById('selectCategoria').value
    const precoRestaurante = document.getElementById('inputPreco').value.replace(',', '.')
    const descricaoRestaurante = document.getElementById('inputDescricao').value.trim()
    const cepRestaurante = document.getElementById('inputCep').value
    const logradouroRestaurante = document.getElementById('inputLogradouro').value
    const numeroRestaurante = document.getElementById('inputNumero').value
    const complementoRestaurante = document.getElementById('inputComplemento').value
    const bairroRestaurante = document.getElementById('inputBairro').value
    const telefoneRestaurante = document.getElementById('inputTelefoneResidencial').value
    const celularRestaurante = document.getElementById('inputTelefoneCelular').value
    const emailRestaurante = document.getElementById('inputAddress').value
    const websiteRestaurante = document.getElementById('inputWebSite').value
    const fotoCapaRestaurante = document.getElementById('inputCapa').value
    const foto1Restaurante = document.getElementById('inputFoto1').value
    const foto2Restaurante = document.getElementById('inputFoto2').value
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    const hour = document.getElementById('inputHour').value
    const hour2 = document.getElementById('inputHour2').value
    const horario = hour + hour2
    let valorSelecionado = []

    checkboxes.forEach((checkbox) => {
        valorSelecionado.push(checkbox.value)
    })

    let diasFuncionamento = valorSelecionado.join(', ');
    let horarioFuncionamento = `${hour} - ${hour2}`;

    let funcionamento = `${diasFuncionamento}: ${horarioFuncionamento}`

    fetch('http://127.0.0.1:4000/api/restaurante/cadastrar', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'token': token
        },
        body: JSON.stringify({
            telefoneresidencial: telefoneRestaurante,
            emailcontato: emailRestaurante,
            telefonecelular: celularRestaurante,
            website: websiteRestaurante,

            logradouro: logradouroRestaurante,
            numero: numeroRestaurante,
            complemento: complementoRestaurante,
            bairro: bairroRestaurante,
            cep: cepRestaurante,

            fotocapa: fotoCapaRestaurante,
            foto1: foto1Restaurante,
            foto2: foto2Restaurante,

            nomerestaurante: nomeRestaurante,
            categoria: categoriaRestaurante,
            cnpj: cnpjRestaurante,
            descricao: descricaoRestaurante,
            faixadepreco: precoRestaurante,
            horariofuncionamento: funcionamento,
            situacao: "ativo"
        })
    })
        .then((res) => res.json())
        .then((result) => {
            console.log(result.error)
            if (result.msg === "Autorização negada para este conteúdo") {
                window.location.replace('./login.html')
            }
            else if (result.msg === "Cadastrado") {
                window.location.replace('./success.html')
            } else if (result.error.code === 'ER_DUP_ENTRY') {
                document.querySelector('.alertBanner').innerHTML = `<div class="alert alert-warning" role="alert">
                CNPJ já cadastrado, revise o dado digitado.</div>`
                document.getElementById('inputCnpj').focus()
            } else {
                document.querySelector('.alertBanner').innerHTML = `<div class="alert alert-warning" role="alert">
                Ocorreu um erro ao processar os dados. Revise os dados e tente novamente.</div>`
            }
        })
        .catch((error) => console.error("Erro ao acessar a api" + error))

}