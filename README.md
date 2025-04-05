# 📚 livraria-api

API desenvolvida para simular a criação de **livros**, **autores**, **clientes** e **vendas de livros**.

Ela permite **criar**, **listar**, **atualizar** e **remover** registros desses recursos de forma simples e organizada.

> 🚀 API desenvolvida por **Moisas** como parte do bootcamp de Node.js.

---

## 🛠 Tecnologias Utilizadas

- [Node.js v20.18.0](https://nodejs.org/)
- [Express v4.21.2](https://expressjs.com/)
- [Sequelize v6.6.5](https://sequelize.org/)
- [MySQL2 v3.14.0](https://www.npmjs.com/package/mysql2)
- [dotenv v16.4.7](https://www.npmjs.com/package/dotenv)
- [bcrypt v5.1.1](https://www.npmjs.com/package/bcrypt)
- [express-basic-auth v1.2.0](https://www.npmjs.com/package/express-basic-auth)
- [winston v3.3.3](https://github.com/winstonjs/winston)
- [Jest v27.2.4](https://jestjs.io/)
- [Supertest v6.1.6](https://www.npmjs.com/package/supertest)
- [babel-jest v27.2.4](https://www.npmjs.com/package/babel-jest)
- [babel-preset-env v1.7.0](https://www.npmjs.com/package/babel-preset-env)

---

## 🔥 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/IMoisasZ/livraria-api.git
   cd livraria-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. ⚙️ **Instalação do Banco de Dados MySQL**

   A aplicação utiliza o banco de dados **MySQL**.  
   Certifique-se de que o MySQL está instalado e configurado corretamente em sua máquina.

   Após isso, **crie um banco de dados vazio** com o nome informado no seu arquivo `.env`.

   > ℹ️ As tabelas serão **criadas automaticamente** na primeira vez que a aplicação estabelecer conexão com o banco.

4. ⚠️ **Configuração do ambiente:**

   - Edite o arquivo `.env_exemplo` com suas configurações locais de banco de dados, autenticação e ambiente.
   - Após configurar, renomeie para `.env`:

   ```bash
   mv .env_exemplo .env
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

---

## 🔐 Autenticação

Todas as rotas da aplicação necessitam de autenticação para acesso.  
No arquivo `.env_exemplo`, preencha os dados do administrador (`ADMIN`, `PASSWORD_AUTH_PRIVATE`) que serão usados para autenticação básica.

Ao criar um cliente, informe um **e-mail** e uma **senha**. Esses dados também poderão ser utilizados para autenticação.

Existem dois tipos de autenticação:

- **Privada (admin):** somente o administrador poderá acessar.
- **Pública (cliente):** qualquer cliente autenticado pode acessar.

> A autenticação é feita via **Basic Auth** (usuário/senha) no header das requisições.

---

## 📌 Rotas da API

### 🔹 Autor

| Método | Rota         | Descrição               |
| ------ | ------------ | ----------------------- |
| POST   | `/autor`     | Criar autor             |
| PUT    | `/autor`     | Atualizar autor         |
| DELETE | `/autor/:id` | Remover autor           |
| GET    | `/autor`     | Listar todos os autores |
| GET    | `/autor/:id` | Buscar autor por ID     |

### 🔹 Cliente

| Método | Rota           | Descrição                |
| ------ | -------------- | ------------------------ |
| POST   | `/cliente`     | Criar cliente            |
| PUT    | `/cliente`     | Atualizar cliente        |
| DELETE | `/cliente/:id` | Remover cliente          |
| GET    | `/cliente`     | Listar todos os clientes |
| GET    | `/cliente/:id` | Buscar cliente por ID    |

### 🔹 Livro

| Método | Rota         | Descrição              |
| ------ | ------------ | ---------------------- |
| POST   | `/livro`     | Criar livro            |
| PUT    | `/livro`     | Atualizar livro        |
| DELETE | `/livro/:id` | Remover livro          |
| GET    | `/livro`     | Listar todos os livros |
| GET    | `/livro/:id` | Buscar livro por ID    |

### 🔹 Venda

| Método | Rota                                                 | Descrição                                 |
| ------ | ---------------------------------------------------- | ----------------------------------------- |
| POST   | `/venda`                                             | Criar venda                               |
| GET    | `/venda/:id`                                         | Buscar venda por ID                       |
| GET    | `/venda?cliente_id={cliente_id}&livro_id={livro_id}` | Filtrar venda por cliente, livro ou ambos |

---

## 📤 Exemplos de Inserção

### 📘 Criar Autor (POST `/autor`)

**Requisição:**

```json
{
	"nome": "J. R. R. Tolkien",
	"email": "tolkien@email.com.br",
	"telefone": "55 654895254"
}
```

**Resposta:**

```json
{
	"id": 5,
	"nome": "J. R. R. Tolkien",
	"email": "tolkien@email.com.br",
	"telefone": "55 654895254",
	"createdAt": "2025-04-05T23:26:44.000Z",
	"updatedAt": "2025-04-05T23:26:44.000Z"
}
```

---

### 📗 Criar Livro (POST `/livro`)

**Requisição:**

```json
{
	"nome": "O Senhor dos Aneis",
	"valor": 500.2,
	"estoque": 2,
	"autor_id": 5
}
```

**Resposta:**

```json
{
	"id": 7,
	"nome": "O Senhor dos Aneis",
	"valor": "500.20",
	"estoque": 2,
	"autor_id": 5,
	"createdAt": "2025-04-05T23:30:26.000Z",
	"updatedAt": "2025-04-05T23:30:26.000Z",
	"autor": {
		"id": 5,
		"nome": "J. R. R. Tolkien",
		"email": "tolkien@email.com.br",
		"telefone": "55 654895254",
		"createdAt": "2025-04-05T23:26:44.000Z",
		"updatedAt": "2025-04-05T23:26:44.000Z"
	}
}
```

---

## ✅ Testes Automatizados

A API possui **testes automatizados simples**, criados apenas para as funcionalidades de **criação** das entidades.

### 🔸 Executar todos os testes:

```bash
npm test
```

### 🔸 Executar testes por entidade:

```bash
npm test autor.test.js
npm test cliente.test.js
npm test livro.test.js
npm test venda.test.js
```

---

## 🔀 Teste de rotas

Para testar as rotas, baixe o arquivo `.json` que está na pasta `insomnia` do projeto.  
Importe o arquivo no seu Insomnia:

1. Abra o Insomnia
2. Vá em `Application → Import Data → From File`
3. Selecione o arquivo de rotas

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido com 💡 por **Moisas**
