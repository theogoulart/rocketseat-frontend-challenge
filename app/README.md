## Instalando o projeto

Primeiramente, instale as dependencias do projeto em ambos os diretórios localizados na raíz do projeto (`api` e `app`):

```bash
npm i
# ou
yarn install
```

Crie um arquivo `.env` dentro do diretório `app` com o seguinte conteúdo
```
NEXT_PUBLIC_API_URI=http://localhost:3333
```

## Rodando o projeto

Abra duas abas do terminal e rode os servidores de desenvolvimento da `api` e do `app`:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu browser para ver o resultado.

Caso queira consultar a API acesse a ferramenta GraphiQL em [http://localhost:3333](http://localhost:3333)
