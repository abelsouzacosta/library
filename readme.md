# API de Biblioteca

**Essa é uma API com autenticação que lida com livros, autores, categorias e editoras.**

## Tecnologias utilizadas

Para a construção dessa API foram utilizadas as seguintes tecnologias:

- [Express](http://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [JSON web tokens](https://jwt.io/)
- [Postgres](https://www.postgresql.org/)

## Executando a API

Para executar a API você precisa das seguintes ferramentas:

- Git
- Insomnia
- PostgresSQL
- yarn ou npm

O primeiro passo para executar a API é fazer o clone do repositório:

```
# Fazer o clone do repositório
git clone git@github.com:abelsouzacosta/library.git

# Entre no repositório
cd library

# Faça a instalação das dependências
yarn install ou npm install
```

Na construção da API foi utilizada a biblioteca npm [dotenv](https://www.npmjs.com/package/dotenv) para gerenciar as variáveis de ambiente, para a execução é preciso portando renomear o arquivo `.env.example` para somente `.env`, dentro desse arquivo serão determinadas todas as variáveis de ambiente, seguindo o template abaixo:

```
# Porta da aplicação
PORT =

# Nome do banco de dados
DB_NAME =

# Host do banco de dados
DB_HOST =

# Username do banco de dados
DB_USERNAME =

# Senha do banco de dados
DB_PASSWORD =

# Hash do JWT
SECRET =
```

Depois de definidas as variáveis de ambiente a API está pronta para ser executada, com os seguintes comandos:

```
# criar o banco de dados da aplicação
yarn sequelize db:create ou npx sequelize db:create

# executar as migrations do banco de dados
yarn sequelize db:migrate ou npx sequelize db:migrate

# executar as seeders (opcional)
yarn sequelize db:seed:all ou npx sequelize db:seed:all

# executar o servidor
yarn dev ou npm run dev
```

A aplicação será executada na porta especificada na variável `PORT` dentro do arquivo `.env`. Clicando no botão abaixo é possível baixar o ambiente do `Insomnia` com todas as suas respectivas rotas e variáveis definidas:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Library&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fabelsouzacosta%2Flibrary-content%2Fmaster%2Fexport.json%3Ftoken%3DAHJQ6XBR6WOR4XEJ4X2GS43AKF6QQ)

### Utilizando a API

Essa seção trata de como lidamos com a API e seus respectivos _endpoints_.

1 - Criação de um usuário: Para a criação de um usuário usamos o recurso `users`, dentro dele temos a rota `CREATE USER` que é do tipo **post** dedicada a criação de um usuário, ela deve ter um corpo json contendo o nome (name), email e senha (password):

```
{
	"name": "nome",
	"email": "email@example.com",
	"password": "senha123"
}
```

Se tudo ocorrer corretamente o retorno da requisição será a mensagem abaixo:

```
{
	message: "Ok"
}
```

Depois da criação do usuário é preciso fazer a autenticação na aplicação.

### Autenticação

A autenticação é feita com o `email` e `senha` do usuário, no endpoint `Authentication Sign Up` o corpo da requisição dve ter o seguinte formato:

```
{
	"email": "dev@example.com",
	"password": "123456"
}
```

A resposta da requisição será um token jwt que validará o usuário para que ele possa usar os demais endpoints da aplicação

```
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE1OTIyODg0LCJleHAiOjE2MTYwMDkyODR9.Od36XZNzdv2KNx2DLYQUc9GrQOsbVGWlf8pwu2EO7eI"
```

Os campos de autenticação da requisição serão preenchidos automaticamente, uma vez que o ambiente do Insomnia disponibilizado acima já possui tal configuração.

#### Endpoints

1. Listagem (GET)
   Os endpoints de listagem carregam o nome List, eles retornam todas as instâncias cadastradas dentro do banco de dados da aplicação nelas não é preciso passar nenhum corpo, podemos usar a listagem de livros (Books) como exemplo, ao fazer a requisição teremos mais ou menos a seguinte reposta:

```
{
	"0": {
    "id": 1,
    "title": "A Revolta de Atlas",
    "description": "Considerado o livro mais influente do Estados Unidos depois da Bíbla",
    "number_of_pages": 1216,
    "publisher_id": 6,
    "createdAt": "2021-03-16T23:09:00.518Z",
    "updatedAt": "2021-03-16T23:09:00.518Z"
  },
  "1": {
    "id": 2,
    "title": "Cantico",
    "description": "Se passa num futuro que impera uma ordem governamental totálitária",
    "number_of_pages": 128,
    "publisher_id": 7,
    "createdAt": "2021-03-16T23:09:00.518Z",
    "updatedAt": "2021-03-16T23:09:00.518Z"
  },
}
```

2. Criação (POST)
   Nesse tipo de requisição é necessário passar no corpo da requisição as informações referentes ao respectivo domínio, por exemplo, na criação de um autor (Author), temos de passar o nome (name), uma descrição (description) e e uma data de nascimento (date_of_birth), a data de morte (date_of_death) é opcional, como podemos ver abaixo:

```
{
	"name": "Philip Kotler",
	"description": "Is an marketing author, consultor and professor at Northwestern UNiversity",
	"date_of_birth": "1931-05-27 00:00:00+00"
}
```

> Como saber quais campos devem ser passados dentro de uma requisição de criação?
> Os campos necessários para a criação de um domínio podem ser encontrados dentro das migrations ou dentro dos models, respectivamente localizados dentro de `src/database/migrations` e `src/models`, dentro do `model/Category.js`, por exemplo, temos o campo `name: DataTypes.STRING`, isso significa que para a criação de uma categoria é preciso somente o nome da categoria.

3. Atualização (PUT)
   Em requisições de atualização não é preciso passar todos os campos que compõem o domínio, apenas o que se deseja modificar. O `id` da instância que se deseja ser atualizada deve ser passada pela url da requisição, por exemplo vamos usar o domínio editora (Publisher), vamos modificar o nome de uma editora:

```
ex:
# http://localost:3030/publishers/update/9

{
	"name": "Vide Editorial"
}
```

4. Exclusão (DELETE)
   Numa deleção também não é preciso passar um corpo de requisição mas é preciso passar o `id` da instância que desejamos ser excluída, por exemplo, na exclusão de uma categoria fazemos a requisição da seguinte forma:

`http://localhost:3030/category/delete/8`

5. Associando (POST)
   Temos duas relações do tipo n:m dentro da aplicação e é preciso fazer a relação entre os dois domínios, como por exemplo, podemos associar o livro com uma categoria, fazemos isso dentro do recurso de `Category`, na rota de associação passando no corpo o `id` das respectivas instâncias:

```
# http://localhost:3030/category/associate
{
	"book_id": 3,
	"category_id": 2
}
```

6. Detalhar (POST)
   Não exige um corpo, requer o `id` da instância seja passada na url, ela retorna todos os detalhes de uma determinada instância, por exemplo é possível trazer todas as informações de uma instância, bem como as instâncias com que ela se relaciona, abaixo vemos um exemplo de um autor com os livros publicados por ele:

```
# http://localhost:3030/author/details/3
{
  "author": {
    "id": 2,
    "name": "Ayn Rand",
    "description": "Russian born philosopher, mother of Objectvism",
    "date_of_birth": "1905-02-02T00:00:00.000Z",
    "date_of_death": "1982-04-06T00:00:00.000Z",
    "createdAt": "2021-03-16T23:09:00.504Z",
    "updatedAt": "2021-03-16T23:09:00.504Z",
    "books": [
      {
        "id": 1,
        "title": "A Revolta de Atlas",
        "description": "Considerado o livro mais influente do Estados Unidos depois da Bíbla",
        "number_of_pages": 1216,
        "publisher_id": 6,
        "createdAt": "2021-03-16T23:09:00.518Z",
        "updatedAt": "2021-03-16T23:09:00.518Z",
        "book_author": {
          "createdAt": "2021-03-16T23:09:00.521Z",
          "updatedAt": "2021-03-16T23:09:00.521Z",
          "book_id": 1,
          "author_id": 2
        }
      },
      {
        "id": 2,
        "title": "Cantico",
        "description": "Se passa num futuro que impera uma ordem governamental totálitária",
        "number_of_pages": 128,
        "publisher_id": 7,
        "createdAt": "2021-03-16T23:09:00.518Z",
        "updatedAt": "2021-03-16T23:09:00.518Z",
        "book_author": {
          "createdAt": "2021-03-16T23:09:00.521Z",
          "updatedAt": "2021-03-16T23:09:00.521Z",
          "book_id": 2,
          "author_id": 2
        }
      },
      {
        "id": 3,
        "title": "A nascente",
        "description": "A nascente é um ode ao espirito da liberdade e da prosperidade humana",
        "number_of_pages": 929,
        "publisher_id": 7,
        "createdAt": "2021-03-16T23:09:00.518Z",
        "updatedAt": "2021-03-16T23:09:00.518Z",
        "book_author": {
          "createdAt": "2021-03-16T23:09:00.521Z",
          "updatedAt": "2021-03-16T23:09:00.521Z",
          "book_id": 3,
          "author_id": 2
        }
      }
    ]
  }
}
```
