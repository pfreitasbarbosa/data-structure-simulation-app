<p align="center">
  <img alt="FEI" src="https://raw.githubusercontent.com/pfreitasbarbosa/mobilefei-todolist/master/.github/feilogo.png" />
</p>

<h3 align="center">
  Simulador de Estruturas de Dados
</h3>

## :rocket: Sobre o projeto
O objetivo desse projeto é aplicar os aliar os conhecimentos sobre React Native aos conhecimentos sobre Estruturas de Dados obtidos durante o semestre e criar uma aplicação envolvendo as duas disciplinas.

## :memo: Sobre a aplicação
Essa é uma aplicação puramente front-end, nela você pode simular o funcionamento de duas estruturas de dados: lista dinâmica duplamente encadeada (doubly linked list) e fila estática circular (static circular queue). Dentro da aplicação é possível inserir, remover e buscar uma informação nas estruturas, além de obter explicações sobre o funcionamento dessas manipulações.

## :hammer: Tecnologias utilizadas
- Typescript
- React Native
- React Hooks

## :wrench: Como testar a aplicação no seu computador
Primeiramente você deve clonar esse repositório em sua máquina, que nada mais é que baixar os arquivos aqui dispostos. Para isso, você pode baixar os arquivos clicando no botão verde escrito <em>Clone or download</em> e baixar o projeto como um arquivo ZIP (descompacte os arquivos em algum local do seu computador), ou pode clonar utilizando um terminal com git.

```bash
git clone http://github.com/pfreitasbarbosa/data-structure-simulation
```

Depois, navegue até a pasta que você clonou o repositório e baixe as dependências do projeto executando o comando `yarn` (é necessário ter o programa [yarn](https://classic.yarnpkg.com/pt-BR/docs/install/) instalado em seu computador).

Com as dependências do projeto já baixadas, você pode abrir a aplicação de diversas formas, aqui estarei ensinando como inicializar ela em um simulador Android (para mais informações sobre como configurar um ambiente React Native, você pode acessar o guia fornecido pela Rocketseat [clicando aqui](https://react-native.rocketseat.dev/)).

Com o emulador aberto e com o terminal na pasta do projeto, digite o comando `yarn android` e aguarde o aplicativo ser instalado em seu emulador.

Caso ocorra um erro do tipo "Unable to load script. Make sure you're either running a Metro...", execute no terminal o comando `yarn start` e faça <em>reload</em> da aplicação apertando duas vezes a letra R ou clicando no botão 'RELOAD' no emulador.
