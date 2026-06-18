CREATE TABLE estado(
   sigla_estado CHAR(2) PRIMARY KEY,
   nome_estado VARCHAR(60)
);

CREATE TABLE cidade(
   id_cidade SERIAL PRIMARY KEY,
   nome_cidade VARCHAR(60) NOT NULL,
   sigla_estado CHAR(2) NOT NULL,
   FOREIGN KEY (sigla_estado) REFERENCES estado (sigla_estado)
);

INSERT INTO estado(sigla_estado, nome_estado)
VALUES ('RS', 'Rio Grande do Sul'), ('CE', 'Ceará'),
       ('SC', 'Santa Catarina'), ('DF', 'Distrito Federal'),
	   ('PR', 'Paraná'), ('ES', 'Espírito Santo'),
	   ('SP', 'São Paulo'), ('RJ', 'Rio de Janeiro'),
	   ('MG', 'Minas Gerais'), ('MT', 'Mato Grosso'),
	   ('MS', 'Mato Grosso do Sul'), ('AC', 'Acre'),
	   ('AL', 'Alagoas'), ('BA', 'Bahia');

INSERT INTO cidade(nome_cidade, sigla_estado)
VALUES ('Porto Alegre', 'RS'), ('Florianópolis', 'SC'),
       ('Curitiba', 'PR'), ('São Paulo', 'SP'),
	   ('Belo Horizonte', 'MG'), ('Campo Grande', 'MS'),
	   ('Maceió', 'AL'), ('Fortaleza', 'CE'),
	   ('Brasília', 'DF'), ('Vitória', 'ES'),
	   ('Rio de Janeiro', 'RJ'), ('Cuiabá', 'MT'),
	   ('Rio Branco', 'AC'), ('Salvador', 'BA');