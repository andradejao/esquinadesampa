// Função responsável pelo login do usuário
function autenticar() {
    const emailLogin = document.querySelector('#inputEmail')
    const passwordLogin = document.querySelector('#inputPassword')
    const banner = document.querySelector('.alertBanner')
    if (passwordLogin.value.length < 8) {
        return
    }

    fetch('http://127.0.0.1:4000/api/login/autenticar', {
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
            if (result.msg === "Usuário ou senha incorreto") {
                banner.innerHTML = `<div class="alert-error">
                <p>Usuário ou senha incorreto</p>
                </div>`
                document.getElementById('inputEmail').focus
                setTimeout(() => {
                    banner.innerHTML = ""
                }, 4000)
            }
            else {
                const token = result.token
                localStorage.setItem('token', token)
                window.location.replace('./trabalheconosco.html')
            }

        })
        .catch((error) => console.error("Erro ao acessar a api" + error))
}

// Função responsável pelo cadastro do usuário
function cadastrar() {
    const emailLogin = document.querySelector('#inputEmail')
    const passwordLogin = document.querySelector('#inputPassword')
    const banner = document.querySelector('.alertBanner')
    if (passwordLogin.value.length < 8) {
        return
    }

    fetch('http://127.0.0.1:4000/api/login/cadastrar', {
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
            if (result.msg === "Cadastrado") {
                banner.innerHTML = `<div class="alert-success">
                <p>Usuário cadastrado com sucesso!</p>
                </div>`
                setTimeout(() => {
                    window.location.replace('./login.html')
                }, 2000)
            }
            else if (result.error.code === 'ER_DUP_ENTRY') {
                banner.innerHTML = `<div class="alert-error">
                <p>Email já cadastrado, verifique e tente novamente</p>
                </div>`
                document.getElementById('inputEmail').focus
                setTimeout(() => {
                    banner.innerHTML = ""
                }, 4000)
            }
        })
        .catch((error) => console.error("Erro ao acessar a api" + error))
}