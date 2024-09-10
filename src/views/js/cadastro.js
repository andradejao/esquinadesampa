const button = document.getElementById('buttonFormFeedback')

button.addEventListener('click', () => {
    const id = window.location.search.split('=')
    const form = document.getElementById('form')
    let alert = document.querySelector('.alert')
    let nomeFeedback = document.querySelector('#recipient-name')
    let opiniaoFeedback = document.querySelector('#message-text')
    let notaFeedback = document.querySelector('.form-select')
    if (nomeFeedback.value == "") {
        alert.innerHTML = `<div class="alert alert-warning" role="alert">
        Preencha o campo requisitado
      </div>`
      console.log(id)
        nomeFeedback.focus()
    } else if (opiniaoFeedback.value == "") {
        alert.innerHTML = `<div class="alert alert-warning" role="alert">
        Preencha o campo requisitado
      </div>`
        opiniaoFeedback.focus()
    } else if (notaFeedback.value == "") {
        alert.innerHTML = `<div class="alert alert-warning" role="alert">
        Preencha o campo requisitado
      </div>`
        nomeFeedback.focus()
    }
    else {
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
                })
                .catch((error)=> console.error("Erro ao acessar a api"+error))
                
                alert.innerHTML = `<div class="alert alert-success" role="alert">
                Comentário adicionado
              </div>`
                form.reset()
                window.location.reload()

    }
})

