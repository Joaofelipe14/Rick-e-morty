**Explicação do Código de Teste do HomeComponent**

### **Objetivo do Teste**
O objetivo é validar o comportamento do `HomeComponent`, garantindo que ele:
- Busque personagens na inicialização.
- Filtre personagens corretamente.
- Atualize a lista ao mudar de página.
- Trate erros corretamente.

### **Configuração do Teste**

1. **Mock do Serviço `PersonagemService`**
   - Criamos a classe `MockPersonagemService`, que simula a resposta da API retornando personagens fictícios.

2. **Configuração do TestBed**
   - Importamos os módulos `MatPaginatorModule` e `RouterTestingModule`.
   - Declaramos o `HomeComponent`.
   - Substituímos o `PersonagemService` real pelo mock.
   - Utilizamos `NO_ERRORS_SCHEMA` para ignorar componentes filhos.

3. **Criação do Componente**
   - Criamos uma instância de `HomeComponent` e injetamos o `PersonagemService` mockado.

### **Casos de Teste**

1. **Criar o componente**
   - Verifica se o `HomeComponent` é criado corretamente.

2. **Buscar personagens na inicialização**
   - Simula a chamada ao serviço na inicialização.
   - Confirma que `getPersonagem` é chamado corretamente.
   - Verifica se os personagens retornados são armazenados na lista.

3. **Filtrar personagens ao mudar o nome**
   - Simula uma alteração no filtro de nome.
   - Garante que a função `buscaPersonagens` é chamada novamente.

4. **Chamar `buscaPersonagens` ao mudar de página**
   - Simula um evento de paginação.
   - Verifica se a busca é realizada para a nova página.

5. **Tratar erro 404 e limpar a lista**
   - Simula um erro `404` da API.
   - Garante que a lista de personagens é esvaziada corretamente.


## Explicação dos Testes para CardsPersonagensComponent

### 1. **Configuração do Teste**
- `TestBed.configureTestingModule(...)`: Configura o ambiente de teste, importando `MatDialogModule` e declarando `CardsPersonagensComponent`.
- `providers`: Usa um serviço mock (`MockFavoritarPersonagemService`) para simular o comportamento real de `favoritarPersonagemService`.
- `schemas: [NO_ERRORS_SCHEMA]`: Evita erros relacionados a componentes não reconhecidos no template.

### 2. **Criação do Componente**
- `it('Crie o componente', ...)`: Verifica se o componente é instanciado corretamente.

### 3. **Carregamento de Favoritos ao Mudar os Personagens**
- `spyOn(component as any, 'carregaFavoritos')`: Monitora chamadas ao método privado `carregaFavoritos`.
- `component.ngOnChanges(...)`: Simula uma mudança de input (`@Input() personagens`).
- `expect((component as any).carregaFavoritos).toHaveBeenCalled()`: Confirma que os favoritos são carregados ao mudar os personagens.

### 4. **Adição e Remoção de Favoritos**
- `await component.favoritar(1)`: Adiciona o personagem aos favoritos.
- `expect(component.isFavorito(1)).toBeTrue()`: Confirma que o personagem foi favoritado.
- `await component.favoritar(1)`: Remove o personagem dos favoritos.
- `expect(component.isFavorito(1)).toBeFalse()`: Confirma que o personagem foi removido.

### 5. **Emissão de Evento ao Remover Favorito**
- `spyOn(component.personagemRemovido, 'emit')`: Monitora o evento de remoção de personagem.
- `await component.favoritar(1)`: Adiciona um personagem como favorito.
- `await component.favoritar(1)`: Remove o mesmo personagem.
- `expect(component.personagemRemovido.emit).toHaveBeenCalledWith(1)`: Confirma que o evento foi emitido corretamente.

### 6. **Abertura do Modal de Detalhes**
- `spyOn(dialog, 'open').and.returnValue({ afterClosed: () => of(null) } as any)`: Simula a abertura do modal.
- `component.verDetalhesPersonagem(...)`: Chama o método que abre o modal.
- `expect(dialog.open).toHaveBeenCalled()`: Verifica se o modal foi aberto corretamente.

### Conclusão
Esses testes garantem que o `CardsPersonagensComponent` funciona corretamente ao carregar favoritos, adicionar/remover personagens da lista de favoritos, emitir eventos e abrir o modal de detalhes.

