<h1>
    <a href="https://softexpe.org.br/">
     <img align="center" width="60px" target="_blank" src="https://media.licdn.com/dms/image/C4E0BAQF2pVcNYJBb9g/company-logo_200_200/0/1649074408972/softexrecife_logo?e=2147483647&v=beta&t=i3A4BP7Ul0FZy62CnpFgJ7H-Psdx0hXjUa2I4i0WndU"></a>
    <span> Configurando uma API em Typescript com Express</span>
</h1>

Arquivo desenvolvido para fins didáticos em contribuição com a **Formação acelerada de programadores Backed - SOFTEX**


### Inicializando aplicação em um novo projeto

Abra o terminal e digite os seguintes comandos:

``` javascript

npm init --y // inicializa o node no projeto
npm i -D typescript ts-node-dev // instalação do Typescript e do ts-node-dev
npx tsc --init // inicializa o typescript no projeto
git init  //  inicializa o git no projeto
```

### Configuração

- Crie no seu projeto uma pasta chamada **src** e dentro dela um novo arquivo chamado **index.ts**
- Abra o arquivo **tsconfig.json**:
    - Descomente a configuração **outDir** e digite o caminho **./build**
	- No final das configurações do **compilerOptions** coloque uma **,** digite a configutação **"include": ["src"]** e salve as novas configurações.
	- Abra o arquivo **package.json** vá até a seção **scripts** e crie os seguintes comandos:

``` javascript
 "dev": "ts-node-dev src/index.ts",// executa o seu arquivo intex.ts sem precisar transpilar para JS
 "build": "rimraf ./build && tsc", // transpila todo o projeto para JS na pasta Build
 "start": "node build/index.js",   // excuta o novo arqiuivo index.js que foi criado, se preciso.
```

  
- Crie o arquivo **.gitignore** e dentro dele digite as bastas build e logo abaixo node_modules:
  
``` javascript
build
node_modules
``` 
  

### Instalação do express

Abra o terminal e digite os seguintes comandos:

``` javascript

npm i express // instalação do Express
npm i -D @types/express // instalação dos tipos do express
``` 

### Implementação do servidor

Abra o arquivo **index.ts** e digite os seguines codigos:

``` javascript
import express, { Request, Response } from 'express'; // importa o Express e os tipos instalados

const server = express(); // instancia o servidor

server.use(express.json()) // habilita o uso do json no projeto
server.use(router)         // habilita o recurso router  

// implementando a rota local do servidor com resposta de sucesso 

server.get('/', (request: Request, response: Response) => { 
    return response.status(200).json({ message: 'DioBank API' })
})

server.listen(5000, () => console.log('Server on'))
```

### Executanto o servidor 

Após tudo configurado os seguintes comandos estarão disponíveis:

``` javascript
 npm run dev // executa o seu arquivo **index.ts** sem a necessidade de transpilar pada Javascript
 npm run build // apaga a pasta build, se existir, e recria a mesma transpilando todo o projeto para JS
 npm run start // excuta o novo arqiuivo index.js que foi criado, se preciso.
```


# Ajudou? 
## Deixa uma estrelinha lá em cima para o gordo ficar feliz!
