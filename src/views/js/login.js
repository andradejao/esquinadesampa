// Função responsável pelo login do usuário
function autenticar() {
    const emailLogin = document.querySelector('#inputEmail')
    const passwordLogin = document.querySelector('#inputPassword')

    fetch('http://10.26.45.33:4000/api/login/autenticar', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email: emailLogin.value,
            senha: passwordLogin.value
        })
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
        })
        .catch((error) => console.error("Erro ao acessar a api" + error))
}

// Função responsável pelo cadastro do usuário
function cadastrar() {
    const emailLogin = document.querySelector('#inputEmail')
    const passwordLogin = document.querySelector('#inputPassword')

    fetch('http://10.26.45.33:4000/api/login/cadastrar', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email: emailLogin.value,
            senha: passwordLogin.value
        })
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
        })
        .catch((error) => console.error("Erro ao acessar a api" + error))
}