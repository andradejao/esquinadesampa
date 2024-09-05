function carregarDestaques() {
    const conteudo = document.querySelector('.conteudoDestaque')

    fetch('http://10.26.45.33:4000/api/restaurante/listardestaque')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.payload.map((rs) => {
                let card = `<div class = "alinharDestaque"><div class="card" style="width: 18rem;">
                <a href="../detalhes.html?idrestaurante=${rs.idrestaurante}">
            <img src="${rs.fotocapa}" class="card-img-top" alt="...">
            </a>
            <div class="card-body">
    <h5 class="card-title">${rs.nomerestaurante}</h5>
  </div>
</div> </div>`

                conteudo.innerHTML += card
            })


        })
        .catch((error) => console.log(error))
}