function carregarDestaques() {
    const conteudo = document.querySelector('.conteudoDestaque')

    fetch('http://10.26.45.33:4000/api/restaurante/listardestaque')
        .then((response) => response.json())
        .then((data) => {
            data.payload.map((rs) => {
                let card = `<div class = "alinharDestaque"><div class="card" style="width: 18rem;">
                <a href="detalhes.html?idrestaurante=${rs.idrestaurante}">
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

function carregarRestaurante() {
    const pathName = window.location.pathname.split("/")
    const url = pathName[3]
    const categoria = url.split(".")
    const categoriaUrl = categoria[0]
    const conteudo = document.querySelector('.conteudoDestaque')

    fetch('http://10.26.45.33:4000/api/restaurante/listar/' + categoriaUrl)
        .then((response) => response.json())
        .then((data) => {
            data.payload.map((rs) => {
                let card = `<div class = "alinharDestaque"><div class="card" style="width: 18rem;">
                <a href="detalhes.html?idrestaurante=${rs.idrestaurante}">
            <img src="${rs.fotocapa}" class="card-img-top" alt="Foto">
            </a>
            <div class="card-body">
    <h5 class="card-title">${rs.nomerestaurante}</h5>
    <p class="card-text">${rs.descricao}</p>
  </div>
</div> </div>`

                conteudo.innerHTML += card
            })
        })
        .catch((error) => console.log(error))
}


function carregarBusca() {
    const searchValue = localStorage.getItem('searchValue')
    const conteudo = document.querySelector('.conteudoDestaque')
    const title = document.querySelector('.alinharTexto')

    fetch('http://10.26.45.33:4000/api/restaurante/buscar/' + searchValue)
        .then((response) => response.json())
        .then((data) => {
            data.payload.map((rs) => {
                let card = `<div class = "alinharDestaque"><div class="card" style="width: 18rem;">
                <a href="detalhes.html?idrestaurante=${rs.idrestaurante}">
            <img src="${rs.fotocapa}" class="card-img-top" alt="Foto">
            </a>
            <div class="card-body">
    <h5 class="card-title">${rs.nomerestaurante}</h5>
    <p class="card-text">${rs.descricao}</p>
  </div>
</div> </div>`

                conteudo.innerHTML += card
            })
        })
        .catch((error) => console.log(error))

    title.innerHTML = `<h2>Resultados por ${searchValue}</h2>`
}

function carregarDetalhes() {
    const idUrl = window.location.search.split("=")
    console.log(idUrl)
    const conteudo = document.querySelector('.conteudoDestaque')
    const conteudoFeedback = document.querySelector('.cardFeedback')    


    fetch('http://10.26.45.33:4000/api/restaurante/detalhes/' + idUrl[1])
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            data.payload.map((rs) => {
                let card = `<section class="alinharDetalhes">
                    <h2 class="title">${rs.nomerestaurante}</h2>
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${rs.fotocapa}" class="d-block w-100" alt="..." id="imgCarrossel">
                            </div>
                            <div class="carousel-item">
                                <img src="${rs.foto1}" class="d-block w-100" alt="..." id="imgCarrossel">
                            </div>
                            <div class="carousel-item">
                                <img src="${rs.foto2}" class="d-block w-100" alt="..." id="imgCarrossel">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <br>
                    <div class="card-body">
                        <p class="card-text">${rs.descricao}</p>
                    </div>
            </section>
            <section class="arrumarDetalhes">
            <div class="card" style="width: 600px;">
                <div class="card-body">
                    <h3>Detalhes</h3>
                    <p class="card-text">A partir de: R$${rs.faixadepreco}</p>
                    <p class="card-text">Culinária ${rs.categoria}</p>
                    <p class="card-text">Funcionamento: ${rs.horariofuncionamento}</p>
                </div>
            </div>
            </section>
            <section class="arrumarDetalhes">
            <div class="card" style="width: 600px;">
                <div class="card-body">
                    <h3>Localização e contato</h3>
                    <a href="mailto:${rs.emailcontato}" style="text-decoration: none; color: #000; cursor: pointer;"><img src="../public/img/mail.png" style="width: 20px; margin-right:10px;">${rs.emailcontato}</a>
                    <br><br>
                    <a href="https://api.whatsapp.com/send?phone=${rs.telefonecelular}" style="text-decoration: none; color: #000; cursor: pointer;">Telefone celular: ${rs.telefonecelular}</a>
                    <br><br>
                    <p class="card-text">Telefone residencial: ${rs.telefoneresidencial}</p>
                    <a href="${rs.website}" style="text-decoration: none; color: #000;"><img src="../public/img/site.png" style="width: 20px; margin-right:10px;">${rs.website}</a>
                    <br><br>
                    <p class="card-text"><img src="../public/img/localization.png" style="width: 20px; margin-right:10px;">${rs.logradouro}, ${rs.numero}, ${rs.complemento}. ${rs.cep}</p>
                    <p class="card-text"><img src="../public/img/home.png" style="width: 20px; margin-right:10px;">${rs.bairro}</p>
                </div>
            </div>
            </section>`

                conteudo.innerHTML = card

                let cardFeedback = `
                <section class="arrumarDetalhes">
                <div class="card" style="width: 100%; padding: 1em; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                    <div class="card-body">
                        <h5 class="card-title" style="font-weight: bold;">${rs.nome}</h5>
                        <p class="card-subtitle text-muted" style="margin-bottom: 1em;">Postado em: ${rs.datapostagem}</p>
                        <p class="card-text">${rs.opiniao}</p>
                        <p class="card-text"> ${'⭐'.repeat(rs.nota)}</p>
                    </div>
                </div>
            </section> `

                conteudoFeedback.innerHTML += cardFeedback           
        
            })
        })

        .catch((error) => console.log(error))
} 

