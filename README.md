
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)




# Esquina de Sampa

O Esquina de Sampa é uma plataforma fullstack dedicada a promover a visibilidade de restaurantes pequenos e locais do estado de São Paulo. Nosso objetivo é conectar amantes da gastronomia a essas joias escondidas, permitindo que descubram e valorizem a culinária local.


## Design da Aplicação

![Screenshot](https://github.com/andradejao/esquinadesampa/blob/main/doc/img/home-readme.png?raw=true)
ㅤ
![Screenshot](https://github.com/andradejao/esquinadesampa/blob/main/doc/img/restaurantes-readme.png?raw=true)
ㅤ
![Screenshot](https://github.com/andradejao/esquinadesampa/blob/main/doc/img/detalhes-readme.png?raw=true)
ㅤ
![Screenshot](https://github.com/andradejao/esquinadesampa/blob/main/doc/img/login-readme.png?raw=true)


## Ferramentas Utilizadas

**• Front-end:** JavaScript, HTML5, CSS3, Bootstrap

**• Back-end:** NodeJS, Express, MySQL, JWT, Bcrypt

## Documentação de Cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Marrom Escuro| ![#4b3621](https://encycolorpedia.pt/4b3621.svg)|
| Bege Claro| ![#f5f5dc](https://encycolorpedia.pt/f5f5dc.svg)|
| Marrom Médio| ![#00b48a](https://encycolorpedia.pt/8b5e3c.svg)|
| Marrom Avermelhado| ![#00d1a0](https://encycolorpedia.pt/a0522d.svg)|
| Branco Amarelado| ![#00d1a0](https://encycolorpedia.pt/fffaf0.svg)|


## Funcionalidades

- Cadastro de restaurantes
- Cadastro e autenticação de usuários
- Sistema de avaliações
- Filtragem por categoria
- Busca por bairro
- Listagem dos restaurantes melhores avaliados


## Instalação

### Pré-requisitos
- [NodeJS](https://nodejs.org/en/download/package-manager)
- [Fedora](https://fedoraproject.org/server/download) ou [Ubuntu](https://ubuntu.com/download/server)
- [MySQL](https://www.mysql.com/)

Clone o repositório

```bash
  git clone https://github.com/andradejao/esquinadesampa.git
```

Entre no diretório do projeto

```bash
  cd esquinadesampa
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`HOST_NAME`= Endereço IP do seu servidor

`HOST_DATABASE`= Endereço IP do banco de dados

`USER_NAME`= Nome de usuário do banco de dados

`PASSWORD`= Senha do banco de dados

`DATABASE_PORT`= Porta do banco de dados

`HOST_PORT`= Porta que rodará a api

`SALT`= Quantidade de hash para o Bcrypt

`JWT_KEY`= Chave para o JWT

`DATABASE_NAME`= "dbesquinadesampa"




## Autores

- [@andradejao](https://github.com/andradejao)
- [@camilajodai](https://github.com/camilajodai)
- [@pedrohs01](https://github.com/pedrohs01)

