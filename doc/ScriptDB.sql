CREATE DATABASE  IF NOT EXISTS `dbesquinadesampa`;
USE `dbesquinadesampa`;

--
-- Table structure for table `restaurante`
--

DROP TABLE IF EXISTS `restaurante`;

CREATE TABLE `restaurante` (
  `idrestaurante` int NOT NULL AUTO_INCREMENT,
  `nomerestaurante` varchar(50) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `cnpj` varchar(20) NOT NULL,
  `descricao` text,
  `faixadepreco` decimal(4,2) NOT NULL,
  `horariofuncionamento` varchar(50) NOT NULL,
  `datacadastro` datetime DEFAULT CURRENT_TIMESTAMP,
  `idcontato` int NOT NULL,
  `idendereco` int NOT NULL,
  `idfoto` int NOT NULL,
  `situacao` enum('ativo','inativo') NOT NULL,
  PRIMARY KEY (`idrestaurante`),
  UNIQUE KEY `cnpj` (`cnpj`),
  KEY `fk.restaurante_pk.contato` (`idcontato`),
  KEY `fk.restaurante_pk.endereco` (`idendereco`),
  KEY `fk.restaurante_pk.foto` (`idfoto`),
  CONSTRAINT `fk.restaurante_pk.contato` FOREIGN KEY (`idcontato`) REFERENCES `contato` (`idcontato`),
  CONSTRAINT `fk.restaurante_pk.endereco` FOREIGN KEY (`idendereco`) REFERENCES `endereco` (`idendereco`),
  CONSTRAINT `fk.restaurante_pk.foto` FOREIGN KEY (`idfoto`) REFERENCES `foto` (`idfoto`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- /////////////////////////////////////////////

CREATE DATABASE  IF NOT EXISTS `dbesquinadesampa`;
USE `dbesquinadesampa`;

--
-- Table structure for table `foto`
--

DROP TABLE IF EXISTS `foto`;

CREATE TABLE `foto` (
  `idfoto` int NOT NULL AUTO_INCREMENT,
  `fotocapa` varchar(255) NOT NULL,
  `foto1` varchar(255) DEFAULT NULL,
  `foto2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idfoto`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- /////////////////////////////////////////////

CREATE DATABASE  IF NOT EXISTS `dbesquinadesampa`;
USE `dbesquinadesampa`;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
  `idlogin` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `datacadastro` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idlogin`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- /////////////////////////////////////////////

CREATE DATABASE  IF NOT EXISTS `dbesquinadesampa`;
USE `dbesquinadesampa`;

--
-- Table structure for table `contato`
--

DROP TABLE IF EXISTS `contato`;

CREATE TABLE `contato` (
  `idcontato` int NOT NULL AUTO_INCREMENT,
  `telefoneresidencial` varchar(15) DEFAULT NULL,
  `emailcontato` varchar(100) DEFAULT NULL,
  `telefonecelular` varchar(15) NOT NULL,
  `website` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idcontato`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- /////////////////////////////////////////////

CREATE DATABASE  IF NOT EXISTS `dbesquinadesampa`;

USE `dbesquinadesampa`;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;

CREATE TABLE `endereco` (
  `idendereco` int NOT NULL AUTO_INCREMENT,
  `logradouro` varchar(50) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `bairro` varchar(30) NOT NULL,
  `cep` varchar(10) NOT NULL,
  PRIMARY KEY (`idendereco`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- /////////////////////////////////////////////

CREATE DATABASE  IF NOT EXISTS `dbesquinadesampa`;

USE `dbesquinadesampa`;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;

CREATE TABLE `feedback` (
  `idfeedback` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `opiniao` varchar(100) NOT NULL,
  `datapostagem` datetime DEFAULT CURRENT_TIMESTAMP,
  `nota` int NOT NULL,
  `idrestaurante` int NOT NULL,
  PRIMARY KEY (`idfeedback`),
  KEY `fk.feedback_pk.restaurante` (`idrestaurante`),
  CONSTRAINT `fk.feedback_pk.restaurante` FOREIGN KEY (`idrestaurante`) REFERENCES `restaurante` (`idrestaurante`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;