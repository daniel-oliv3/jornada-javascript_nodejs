##
### Jornada JavaScript NodeJS
##

### 1 - INTRODUÇÃO AO NODEJS

**O que é o NodeJS?**
- É um ambiente de execução de JavaScript, de código aberto multiplataforma, que permite aos programadores executar código de JavaScript fora do tradicional ambiente de um broser
- Não é uma linguagem de programação
- Não é um framework de JavaScript
- Não é uma biblioteca para adicionar aos nossos projetos
- Com o NodeJS, podemos desenvolver aplicativos web FullStack em JavaScript, uma biblioteca ou framework de JS do lado do front-end e o NodeJs do back-end

**Como é possível a execução de JavaScript do lado do servidor?**
- O JavaScript foi criado para os browsers
- Os browsers têm motores de interpretação do JavaScript
- O NodeJS tem dentro de si motor V8 da Google
- Dessa forma permite interpretar JavaScript em qualquer ambiente onde esteja instalado
- Não vamos ter o DOM disponível
- Passamos a ter módulos que permitem manipular o file System, base de dados, etc...

**É importante aprender a usar o NodeJS?**
- Não é uma tecnologia obrigatória para desenvolver aplicação web
- É uma tecnologia com mais de 13 anos, e muito requerida no mercado
- Permite usar a mesma linguagem de programação no front-end e no back-end
- Estão sergindo várias tecnologias similares, Saber usar o NodeJS vai ajudar
- É uma tendência de mercado, As empresas valorizam experiência com NodeJS

**Ordem de trabalhos**
- Vamos começar por instalar o NodeJS
- Vamos criar pequenos exemplos de código
- Vamos aprender o básico da criação de um servidor NodeJS
    - Utilização de módulos
    - Módulo HTTP
    - Utilização do NPM
    - Trabalhar com file system
    - Acesso ao banco de dados MySQL
    - Acesso a base de dados MongoDB


### 2 - INSTALAÇÃO E PRIMEIROS TESTES COM NODEJS

- Ex: node-02

**NodeJS**
- Downloads (LTS) Version
- Long Time Suport
- Site: https://nodejs.org/en/

**Terminal, (Prompt de Comando, Git Bash, PowerShell)**
- Verificar a versão do node instalado

```
node -v
```

**Packages**
- Verificar a versão do NPM instalado
```
npm -v
```

- Comando para o node interpretar codigo javascript no console
```
node app.js
```

- Arquivo `app.js`
```js
//app.js
console.log("Olá Mundo do NodeJS.");
```

**Modo interativo (NodeJS)**

```
node
```

- Comando `.help`
- `.break` - Sometimes you get stuck, this gets you out
- `.clear` - Alias for .break
- `.editor` - Enter editor mode
- `.exit` - Exit the REPL
- `.help` - Print this help message
- `.load` - Load JS from a file into the REPL session
- `.save` - Save all evaluated commands in this REPL session to a file


