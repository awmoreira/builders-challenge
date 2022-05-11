<!--
*** Obrigado por estar vendo o meu README. Se você tiver alguma sugestão
*** que possa melhorá-lo ainda mais dê um fork no repositório e crie uma Pull
*** Request ou abra uma Issue com a tag "sugestão".
*** Obrigado novamente! :D
-->

<!-- PROJECT SHIELDS -->

[![GitHub issues](https://img.shields.io/github/issues-raw/rocketseat/react-native-template-rocketseat-basic.svg)](https://github.com/awmoreira/builders-challenge/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/rocketseat/react-native-template-rocketseat-basic.svg)](https://github.com/awmoreira/builders-challenge/commits/master)
[![NPM](https://img.shields.io/npm/l/react-native-template-rocketseat-basic.svg)](https://choosealicense.com/licenses/mit)

<!-- PROJECT LOGO -->
<br />
<p align="center">
   <h3 align="center">Builders Challenge App (React Native)</h3>
</p>
<p align="center">
   <a href="https://ibb.co/zZ9WpQB"><img src="https://i.ibb.co/hVQxbL4/Simulator-Screen-Shot-i-Phone-13-2022-05-10-at-23-33-45.png" alt="Simulator-Screen-Shot-i-Phone-13-2022-05-10-at-23-33-45" border="0"></a>
    <a href="https://ibb.co/6J2ZpWx"><img src="https://i.ibb.co/bRx3yKZ/Simulator-Screen-Shot-i-Phone-13-2022-05-10-at-23-33-54.png" alt="Simulator-Screen-Shot-i-Phone-13-2022-05-10-at-23-33-54" border="0"></a>
</p>

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto foi desenvolvido através de um vídeo publicado pela Rocketseat, onde é feito a interface do app da Nubank e suas animações.
De uma forma simples, a finalidade é disponibilizar o projeto para estudo e aprendizado.

### Feito Com

Abaixo segue o que foi utilizado na criação deste app:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando Javascript e React;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em Javascript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Styled-components](https://www.styled-components.com/) - O Styled-component permite utilizar a sintaxe CSS real dentro de seus componentes (CSS-in-JS);
- [React Navtive Vector Icons](https://oblador.github.io/react-native-vector-icons/) - Perfeito para botões, logos, barras de navegação, ícones. Fácil de utilizar em seu projeto;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
rocketseat-basic
├── src/
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── components/
│   │   └── Header
│   │       └── index.js
│   │       └── styles.js
│   ├── components/
│   │   └── Header
│   │   │    └── index.js
│   │   │    └── styles.js
│   │   │── Menu
│   │   │    └── index.js
│   │   │    └── styles.js
│   │   └── Tabs
│   │       └── index.js
│   │       └── styles.js
│   ├── pages/
│   │   └── Main/
│   │       └── index.js
│   │       └── styles.js
│   ├── Routes/
│   │   └── index.js
│   ├── services/
│   │   └── api.js
│   └── index.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── LICENSE
├── package.json
└── README.md
```

### Instalação

1. Para instalar e utilizar esse app o processo é bem simples, basta clonar o repositório utilizando o processo abaixo:

```sh
git clone https://github.com/awmoreira/builders-challenge.git
```

```sh
yarn
```

ou

```sh
npm install
```

iOS:

```sh
npx pod-install
```

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Allan Winckler - [Github](https://github.com/awmoreira) - **awmoreira@gmail.com**
