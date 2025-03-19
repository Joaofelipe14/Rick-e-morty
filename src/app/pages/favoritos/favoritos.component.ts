import { Component } from '@angular/core';
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

  constructor(private personagemService: PersonagemService,
    private personagemFavoritos: favoritarPersonagemService,

  ) { }

  ngOnInit(): void {
    this.carregaFavoritos();
  }

  buscarPersonagens(ids: number[]): void {
    this.loading = true;
    this.personagemService.getPersonagemPorId(ids).subscribe({
      next: (data) => {
        this.personagens = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Erro ao carregar os personagens';
        this.loading = false;
      }
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
