# challenge-frontend-jr
# Teste para frontend junior

Aplicação para simular um produto interno de gestão de compras de crédito de carbono, feita em ReactJS.

### bibliotecas utilizadas:

- UI: Material-UI
- HTTP client: axios
- Gerenciador de rotas: React Router
- Testes: React Testing Library
- Backend: json server https://github.com/typicode/json-server

## como rodar

Após clonar este repositório, dentro do diretório criado: 

```
npm install 
```
Para instalar todas as dependências.

```
npm install -g json-server
```
Instala a biblioteca usada como backend, caso ainda não a tenha instalada.

```
npm run json-mock-server
```
Por padrão a porta utilizada é a 3004. Caso queira usar outra, por favor, altere o arquivo .env disponilizado aqui propositalmente e o script json-mock-server no package.json.

Por fim, em outra tab do terminal:
````
npm start
````

.
