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
    const conteudo = document.querySelector('.conteudoDestaque')
    fetch('http://10.26.45.33:4000/api/restaurante/detalhes/' + 5)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            data.payload.map((rs) => {
                let card = `<div class = "alinharDestaque"><div class="card" style="width: 18rem;">
                <h4 class="card-title">${rs.nomerestaurante}</h4>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${rs.fotocapa}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${rs.foto1}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${rs.foto2}" class="d-block w-100" alt="...">
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
                <div class="card-body">
                    <p class="card-text">${rs.descricao}</p>
                </div>
                <section class="content">
                    <p class="card-text">${rs.descricao}</p>
                </section>
            </div></div>`

                conteudo.innerHTML = card
            })
        })
        .catch((error) => console.log(error))
}   