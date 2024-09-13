// Função responsável por postar um feedback
function publicarFeedback() {
    const id = window.location.search.split('=')
    let nomeFeedback = document.querySelector('#recipient-name')
    let opiniaoFeedback = document.querySelector('#message-text')
    let notaFeedback = document.querySelector('.form-select')
    fetch('http://10.26.45.33:4000/api/feedback/cadastrar', {
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

// Função responsável pelo cadastro do restaurante
function cadastrarRestaurante() {
    const nomeRestaurante = document.getElementById('inputName').value
    const cnpjRestaurante = document.getElementById('inputCnpj').value
    const categoriaRestaurante = document.getElementById('selectCategoria').value
    const precoRestaurante = document.getElementById('inputPreco').value
    const descricaoRestaurante = document.getElementById('inputDescricao').value
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

    let funcionamento = valorSelecionado + horario

    fetch('http://10.26.45.33:4000/api/restaurante/cadastrar', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
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
        .then((response) => {
            if (response.status === 201) {
                return response.json()
            } else {
                throw new Error({ msg: "Erro no cadastro" })
            }
        })
        .then((result) => {
            console.log(result.msg)
            window.location.replace("./index.html")
        })
        .catch((error) => console.error("Erro ao acessar a api" + error))

}