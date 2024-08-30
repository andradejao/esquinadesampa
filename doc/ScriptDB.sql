use dbesquinadesampa;

create table restaurante (
	idrestaurante int auto_increment primary key,
    nomerestaurante varchar(50) not null,
    categoria varchar(50) not null,
    cnpj varchar(20) not null unique,
    descricao text,
    faixadepreco decimal(4,2) not null,
    horariofuncionamento datetime not null,
    idcontato int not null,
    idendereco int not null,
    idfoto int not null,
    situacao int not null
);

create table contato (
	idcontato int auto_increment primary key,
    telefoneresidencial varchar(15),
    emailcontato varchar(100),
    telefonecelular varchar(15) not null,
    website varchar(50)
);

create table endereco (
	idendereco int auto_increment primary key,
    logradouro varchar(50) not null,
	numero varchar(10) not null,
    complemento varchar(50),
    bairro varchar(30) not null,
    cep varchar(10) not null
    );
    
create table foto (
	idfoto int auto_increment primary key,
    fotocapa varchar(255) not null,
    foto1 varchar(255),
    foto2 varchar(255)
);

create table login (
	idlogin int auto_increment primary key,
    email varchar(50) not null unique,
    senha varchar(255) not null,
    datacadastro datetime default current_timestamp()
);

create table feedback (
	idfeedback int auto_increment primary key,
    nome varchar(50) not null,
    opiniao varchar(50) not null,
    datapostagem datetime default current_timestamp(),
    nota int not null,
    idrestaurante int not null
);

alter table restaurante add constraint `fk.restaurante_pk.contato` foreign key restaurante(`idcontato`) 
references contato(`idcontato`);

alter table restaurante add constraint `fk.restaurante_pk.endereco` foreign key restaurante(`idendereco`) 
references endereco(`idendereco`);

alter table restaurante add constraint `fk.restaurante_pk.foto` foreign key restaurante(`idfoto`) 
references foto(`idfoto`);

alter table feedback add constraint `fk.feedback_pk.restaurante` foreign key feedback(`idrestaurante`) 
references restaurante(`idrestaurante`);



