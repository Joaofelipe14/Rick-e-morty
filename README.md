# Rick and Morty

Este é um projeto desenvolvido com **Angular**, aplicando conceitos importantes como componentização, separação de responsabilidades, consumo de API,responsividade e gestão de estado básica. Ele consome a API pública do Rick and Morty ([https://rickandmortyapi.com/](https://rickandmortyapi.com/)) para permitir a pesquisa e exibição de personagens da série.
[Você pode ver a prévia do projeto aqui](https://rick-mordy.netlify.app).

## Funcionalidades
- Pesquisa de personagens por nome
- Filtragem por status (vivo, morto, desconhecido)
- Navegação na lista de personagens
- Exibição de detalhes do personagem
- Exibição do total de personagens
- Exibição das informações do personagem:
  - Imagem
  - Nome
  - Status
  - Total de episódios
  - Nome da Localização
- **Extra:** Adicionar e listar personagens aos favoritos

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
src/
├── app/
│   ├── components/
│   │   ├── cards-personagens/
│   │   ├── custom-snackbar/
│   │   ├── loading/
│   │   └── modal-detalhes/
│   ├── layout/
│   │   ├── cabecalho/
│   │   └── rodape/
│   ├── models/
│   │   └── personagem.model.ts
│   ├── pages/
│   │   ├── favoritos/
│   │   ├── home/
│   │   └── sobre/
│   ├── services/
│   │   ├── personagem.service.ts
│   │   └── favoritarPersonagem.service.ts
│   ├── assets/
```

## Responsabilidades

### **Componentes**
Focados na apresentação e interação com o usuário. Cada componente tem uma responsabilidade única:

- **cards-personagens**: Exibição visual dos personagens  
- **custom-snackbar**: Feedback visual para ações do usuário  
- **loading**: Indicação de carregamento de dados  
- **modal-detalhes**: Visualização detalhada de informações  

### **Layout**
Componentes estruturais que definem o template básico da aplicação:

- **cabecalho**: Navegação e identidade visual  
- **rodape**: Informações de contato e direitos autorais  

### **Páginas**
Páginas da aplicação que combinam componentes para criar experiências completas:

- **home**: Página principal com listagem de personagens  
- **favoritos**: Gerenciamento de personagens favoritos  
- **sobre**: Informações sobre o aplicativo  

### **Serviços**
Camada de acesso a dados e lógica de negócios:

- **personagem.service**: Comunicação com API externa  
- **favoritarPersonagem.service**: Gerenciamento de estado para favoritos

# Fluxo de dados

![Fluxo de dados](https://raw.githubusercontent.com/Joaofelipe14/Rick-e-morty/refs/heads/main/src/assets/fluxo_de_dados.png)


## Tecnologias Utilizadas
- ![Angular](https://img.shields.io/badge/Angular-16-red?style=for-the-badge&logo=angular) **Angular 16**: Framework para desenvolvimento web
- ![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript) **TypeScript**: Linguagem utilizada no Angular
- ![Angular Material](https://img.shields.io/badge/Angular%20Material-orange?style=for-the-badge&logo=angular) **Angular Material**: UI Components
- ![HttpClient](https://img.shields.io/badge/HttpClient-green?style=for-the-badge) **HttpClient**: Para consumo da API

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

