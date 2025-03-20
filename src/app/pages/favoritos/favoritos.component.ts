import { Component } from '@angular/core';
import { Personagem } from 'src/app/models/ personagem.model';
import { favoritarPersonagemService } from 'src/app/services/favoritarPersonagem.service';
import { PersonagemService } from 'src/app/services/personagem.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent {

  favoritos = new Set<number>();
  personagens: any[] = [];
  loading: boolean = true;
  error: string = '';
  personagensFiltrados: Personagem[] = [];
  nameFilter: string = '';
  statusFilter: string = 'all';

  constructor(private personagemService: PersonagemService,
    private personagemFavoritos: favoritarPersonagemService,

  ) { }

  ngOnInit(): void {
    this.carregaFavoritos();
  }

  buscarPersonagens(ids: number[]): void {
    this.loading = true;
    console.log('this.loading-> ',this.loading)
    this.personagemService.getPersonagemPorId(ids).subscribe({
      next: (data) => {
        this.personagens = data;
        this.personagens = data;
        this.personagensFiltrados = this.personagens;
        // this.loading = false;
        console.log(this.loading)

      },
      error: (error) => {
        this.error = 'Erro ao carregar os personagens';
        this.loading = false;
      }
    });
  }

  filtarPersonagens(): void {

    console.log(this.statusFilter)

    console.log(this.nameFilter.toLowerCase())
    this.personagensFiltrados = this.personagens.filter(character => {
      const nameMatch = character.name.toLowerCase().includes(this.nameFilter.toLowerCase());
      const statusMatch = this.statusFilter == 'all' || character.status.toLowerCase() == this.statusFilter.toLowerCase();
      return nameMatch && statusMatch;
    });
  }
  
  isFavorito(id: number): boolean {
    return this.favoritos.has(id);
  }

  private async carregaFavoritos() {
    const favoriteIds = await this.personagemFavoritos.getFavoritos();
    this.favoritos = new Set(favoriteIds);
    this.buscarPersonagens(favoriteIds)
  }


  onPersonagemRemovido(id: number) {
    this.personagens = this.personagens.filter(item => item.id !== id);
  }
}
