# Movie Search App

Este é um projeto de uma aplicação Full Stack para buscar informações sobre títulos de filmes usando a OMDB API.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (LTS)
- [npm](https://www.npmjs.com/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/edilsonlm217/movie-search-app.git
   ```

2. Instale as dependências:

   ```bash
   cd movie-search-app
   npm install
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
```

### Configurações do Editor

Recomendamos o uso do Visual Studio Code (VSCode) para desenvolvimento. Se você estiver usando o VSCode, as seguintes extensões são recomendadas:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Configurações de Formatação e Linting

Este projeto utiliza ESLint e Prettier para manter um código consistente e bem formatado. Certifique-se de instalar as extensões recomendadas para o VSCode conforme mencionado acima.

## Uso

### Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run start:dev  # ou use yarn
```

O servidor estará disponível em http://localhost:3000 por padrão.

### Produção

Para construir e iniciar o servidor em modo de produção:

```bash
npm run build  # ou use yarn
npm start  # ou use yarn
```

## Contribuição

Se quiser contribuir, por favor:

1. Faça um fork do projeto
2. Crie uma nova branch (git checkout -b feature/nova-feature)
3. Faça commit das suas alterações (git commit -am 'Adicione uma nova feature')
4. Faça push para a branch (git push origin feature/nova-feature)
5. Crie um novo Pull Request

## Licença

Este projeto é licenciado sob a Licença MIT.
