# Rick and Morty

Este é um projeto desenvolvido com **Angular 16**, mas que aplica conceitos importantes como componentização, separação de responsabilidades, consumo de API e gestão de estado básica. Ele consome a API pública do Rick and Morty ([https://rickandmortyapi.com/](https://rickandmortyapi.com/)) para permitir a pesquisa e exibição de personagens da série. 

## Tecnologias Utilizadas
- ![Angular](https://img.shields.io/badge/Angular-16-red?style=for-the-badge&logo=angular) **Angular 16**: Framework para desenvolvimento web
- ![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript) **TypeScript**: Linguagem utilizada no Angular
- ![Angular Material](https://img.shields.io/badge/Angular%20Material-orange?style=for-the-badge&logo=angular) **Angular Material**: UI Components
- ![HttpClient](https://img.shields.io/badge/HttpClient-green?style=for-the-badge) **HttpClient**: Para consumo da API

## Funcionalidades
- Pesquisa de personagens por nome
- Filtragem por status (vivo, morto, desconhecido)
- Navegar na lista de personagens
- Exibição de detalhes do personagem
- Exibição do total de personagens
- Exibição das informações do personagem:
  - Imagem
  - Nome
  - Status
  - Total de episódios
  - Nome da Localização
- Extra: Adicionar e listar personagens aos favoritos

## Instalação e Execução
1. Clone o repositório:
   ```sh
   git clone https://github.com/Joaofelipe14/Rick-e-morty.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd Rick-e-morty
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   ng serve
   ```
5. Acesse no navegador: `http://localhost:4200/`

## Estrutura do Projeto
O projeto segue uma arquitetura modular e componentizada, com foco na separação de preocupações e na reutilização de código.
```
/src
  |-- app
      |-- components
          |-- cabecalho.components
          |-- rodape.components
          |-- card.components
          |-- personagem-modal.components
      |-- model
          |-- character.model
      |-- pages
          |-- home.pages
          |-- sobre.pages
          |-- favoritos.pages
      |-- services
          favoritos
          buscanaApi
      |-- app.module.ts
  |-- assets
  |-- environments
```

## API Utilizada
Os dados são consumidos da API pública do Rick and Morty.
- Documentação: [https://rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)
- Exemplo de requisição para listar personagens:
  ```sh
  GET https://rickandmortyapi.com/api/character
  ```

## Contribuição
Sinta-se à vontade para contribuir! Abra uma issue ou envie um PR.

## Licença
Este projeto está sob a licença MIT.


## O que esta faltando
snack-bar de alert                               [x]
Add icones de status para deixar mais interativo [x]
Add loading                                      [x]
filtro ajeitar e add nos favoritos               [x]
sobre nos                                        [ ]
AJeitar rodapé                                   [ ]
