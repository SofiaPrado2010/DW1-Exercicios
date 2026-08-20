CREATE TABLE public.livro ( 
   id_livro INTEGER PRIMARY KEY, 
   titulo VARCHAR(100) NOT NULL, 
   autor VARCHAR(50) NOT NULL, 
   ano INTEGER NOT NULL,
   genero VARCHAR(30) NOT NULL,
   paginas INTEGER NOT NULL
);

INSERT INTO public.livro (id_livro, titulo, autor, ano, genero, paginas) 
VALUES (1, 'Asas Reluzentes', 'Allison Saft', 2023, 'Fantasia', 366), 
       (2, 'Harry Potter e a Pedra Filosofal', 'J.K Rowling', 1997, 'Fantasia', 260), 
	   (3, 'Assassinato no Expresso Oriente', 'Agatha Christie', 1934, 'Mistério',242), 
	   (4, 'Frankenstein', 'Mary Shelley', 1818, 'Terror', 280), 
	   (5, 'O Hobbit', 'J.R.R Tolkien', 1937, 'Aventura', 364);