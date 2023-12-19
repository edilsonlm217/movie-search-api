# Movie Search App

Este é um projeto de uma aplicação Full Stack para buscar informações sobre títulos de filmes usando a OMDB API.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (recomendado)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/edilsonlm217/movie-search-app.git
    ```

2. Instale as dependências:

    ```bash
    cd movie-search-app
    npm install  # ou use yarn
    ```

3. Crie uma conta no [OMDB API](http://www.omdbapi.com/) para gerar sua API Key.

4. Crie um arquivo `.env` na raiz do projeto e adicione sua API Key:

    ```env
    OMDB_API_KEY=SuaApiKeyAqui
    ```

## Configuração

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias, como:

```env
PORT=3000
# Adicione outras variáveis conforme necessário
