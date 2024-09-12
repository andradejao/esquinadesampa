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

function cadastrarRestaurante() {
    // let array = []
    // let radio = document.querySelector('#flexCheckDefault').value
    // let radio2 = document.querySelector('#flexCheckDefault2').value
    // let radio3 = document.querySelector('#flexCheckDefault3').value
    // if(radio2 == ""){
    //     array.push(radio,radio3)
    //     console.log(array)
    // }
    // array.push(radio, radio2, radio3)
    // console.log(array); 
}