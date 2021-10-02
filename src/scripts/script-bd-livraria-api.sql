create database desafio;

use desafio;

create table clientes(
	cliente_id int not null auto_increment primary key,
    nome varchar(50) not null,
    email varchar(50) not null,
    senha varchar(10) not null,
    telefone varchar(20) not null,
    endereco varchar(100) not null
);

create table autores(
	autor_id int not null auto_increment primary key,
    nome varchar(50) not null,
    email varchar(50) not null,
    telefone varchar(20) not null
);

create table livros(
	livro_id int not null auto_increment primary key,
    nome varchar(50) not null,
    valor double not null,
    estoque int not null,
    autor_id int not null,
    foreign key(autor_id) references autores(autor_id)
);

create table vendas (
	venda_id int not null auto_increment primary key,
    valor double not null,
    data date not null,
    cliente_id int not null,
    foreign key(cliente_id) references clientes(cliente_id),
    livro_id int not null,
    foreign key(livro_id) references livros(livro_id)
);