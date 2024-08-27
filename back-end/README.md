# API Node Express MongoDB

Esta é a documentação da API para o projeto "API Node Express MongoDB". Esta API permite gerenciar recursos de livros e autores. Todos os dados são fictícios. Os livros e autores estão relacionados por referência. A cardinalidade é de um para muitos, ou seja, um autor pode escrever vários livros, mas um livro tem apenas um autor.

## Endpoints

### Livros

#### 1. **GET** /livros
Retorna uma lista com os últimos 5 livros cadastrados.

**URL**: `/livros`
**Método**: `GET`

#### 2. **GET** /books/:id
Retorna um livro específico pelo ID.

**URL**: `/books/:id`
**Método**: `GET`
**Parâmetros de URL**:
- **id**: ID do livro a ser retornado (string).

#### 3. **POST** /books
Cria um novo livro.

**URL**: `/livros`
**Método**: `POST`
**Cabeçalhos**:
- `Content-Type: application/json`

**Resposta de Sucesso**:
- **Código**: `201 Created`
- **Corpo**:
    ```json
    {
      "_id": "60d5f60bdb60c437ac3df9b3",
      "title": "O Hobbit",
      "author": "J.R.R. Tolkien",
      "year": 1937
    }
    ```

**Resposta de Erro**:
- **Código**: `400 Bad Request`
- **Corpo**:
    ```json
    {
      "error": "Dados inválidos"
    }
    ```

#### 4. **PUT** /books/:id
Atualiza um livro existente.

**URL**: `/books/:id`

**Método**: `PUT`

**Parâmetros de URL**:
- **id**: ID do livro a ser atualizado (string).

**Cabeçalhos**:
- `Content-Type: application/json`

**Corpo da Requisição**:
```json
{
  "title": "O Hobbit",
  "author": "J.R.R. Tolkien",
  "year": 1937
}
```

**Resposta de Sucesso**:
- **Código**: `200 OK`
- **Corpo**:
    ```json
    {
      "_id": "60d5f60bdb60c437ac3df9b3",
      "title": "O Hobbit",
      "author": "J.R.R. Tolkien",
      "year": 1937
    }
    ```

**Resposta de Erro**:
- **Código**: `404 Not Found`
- **Corpo**:
    ```json
    {
      "error": "Livro não encontrado"
    }
    ```

#### 5. **DELETE** /books/:id
Remove um livro.

**URL**: `/books/:id`
**Método**: `DELETE`

**Parâmetros de URL**:
- **id**: ID do livro a ser removido (string).

**Resposta de Sucesso**:
- **Código**: `204 No Content`

**Resposta de Erro**:
- **Código**: `404 Not Found`
- **Corpo**:
    ```json
    {
      "error": "Livro não encontrado"
    }
    ```

### Autores

#### 1. **GET** /authors
Retorna uma lista de todos os autores.

**URL**: `/authors`

**Método**: `GET`

**Resposta de Sucesso**:
- **Código**: `200 OK`
- **Corpo**:
    ```json
    [
      {
        "_id": "60d5f60bdb60c437ac3df9b4",
        "name": "J.R.R. Tolkien",
        "birthdate": "1892-01-03"
      },
      {
        "_id": "60d5f60bdb60c437ac3df9b5",
        "name": "J.K. Rowling",
        "birthdate": "1965-07-31"
      }
    ]
    ```

#### 2. **GET** /authors/:id
Retorna um autor específico pelo ID.

**URL**: `/authors/:id`

**Método**: `GET`

**Parâmetros de URL**:
- **id**: ID do autor a ser retornado (string).

**Resposta de Sucesso**:
- **Código**: `200 OK`
- **Corpo**:
    ```json
    {
      "_id": "60d5f60bdb60c437ac3df9b4",
      "name": "J.R.R. Tolkien",
      "birthdate": "1892-01-03"
    }
    ```

**Resposta de Erro**:
- **Código**: `404 Not Found`
- **Corpo**:
    ```json
    {
      "error": "Autor não encontrado"
    }
    ```

#### 3. **POST** /authors
Cria um novo autor.

**URL**: `/authors`

**Método**: `POST`

**Cabeçalhos**:
- `Content-Type: application/json`

**Corpo da Requisição**:
```json
{
  "name": "George R.R. Martin",
  "birthdate": "1948-09-20"
}
```

**Resposta de Sucesso**:
- **Código**: `201 Created`
- **Corpo**:
    ```json
    {
      "_id": "60d5f60bdb60c437ac3df9b6",
      "name": "George R.R. Martin",
      "birthdate": "1948-09-20"
    }
    ```

**Resposta de Erro**:
- **Código**: `400 Bad Request`
- **Corpo**:
    ```json
    {
      "error": "Dados inválidos"
    }
    ```

#### 4. **PUT** /authors/:id
Atualiza um autor existente.

**URL**: `/authors/:id`

**Método**: `PUT`

**Parâmetros de URL**:
- **id**: ID do autor a ser atualizado (string).

**Cabeçalhos**:
- `Content-Type: application/json`

**Corpo da Requisição**:
```json
{
  "name": "George R.R. Martin",
  "birthdate": "1948-09-20"
}
```

**Resposta de Sucesso**:
- **Código**: `200 OK`
- **Corpo**:
    ```json
    {
      "_id": "60d5f60bdb60c437ac3df9b6",
      "name": "George R.R. Martin",
      "birthdate": "1948-09-20"
    }
    ```

**Resposta de Erro**:
- **Código**: `404 Not Found`
- **Corpo**:
    ```json
    {
      "error": "Autor não encontrado"
    }
    ```

#### 5. **DELETE** /authors/:id
Remove um autor.

**URL**: `/authors/:id`

**Método**: `DELETE`

**Parâmetros de URL**:
- **id**: ID do autor a ser removido (string).

**Resposta de Sucesso**:
- **Código**: `204 No Content`

**Resposta de Erro**:
- **Código**: `404 Not Found`
- **Corpo**:
    ```json
    {
      "error": "Autor não encontrado"
    }
    ```
## Variáveis de Ambiente

Para rodar este projeto, você precisará adicionar as seguintes variáveis de ambiente ao seu arquivo `.env`:

- `DB_CONNECTION_STRING`: URL de conexão ao MongoDB Atlas.

## Instruções de Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/lpcampanholi/api-node-express-mongodb.git
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd api-node-express-mongodb
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente:
   ```
   DB_CONNECTION_STRING=sua-url-do-mongodb
   ```

5. Inicie o servidor:
   ```sh
   npm start
   ```

6. A API estará disponível em `http://localhost:3000`.

## Tecnologias Utilizadas

- Node.js
- Express
- Mongoose
- MongoDB Atlas
- Dotenv para variáveis de ambiente
- ESLint para padronização de código

## O que Aprendemos

- **Identificação e tratamento de erros**: Criamos um middleware de erros e utilizamos classes para tratar erros específicos.
- **Validação de dados**: Aplicamos validações nativas e personalizadas do Mongoose.
- **Buscas dinâmicas e filtros**: Implementamos buscas por expressões regulares e filtros por número de páginas.
- **Paginação e ordenação**: Utilizamos métodos como `.skip`, `.limit` e `.sort` para paginar e ordenar resultados.
- **Reutilização de lógica com middlewares**: Criamos middlewares para reutilizar a lógica de paginação e compartilhar informações entre middlewares.

