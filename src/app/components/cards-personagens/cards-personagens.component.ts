import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Personagem } from 'src/app/models/ personagem.model';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetalhesComponent } from '../modal-detalhes/modal-detalhes.component';
import { favoritarPersonagemService } from 'src/app/services/favoritarPersonagem.service';

@Component({
  selector: 'app-cards-personagens',
  templateUrl: './cards-personagens.component.html',
  styleUrls: ['./cards-personagens.component.scss'],
  animations: [
    trigger('transicaoDePag', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class CardsPersonagensComponent {

  favoritos = new Set<number>();
  @Input() personagens: Personagem[] = [];
  @Output() personagemRemovido = new EventEmitter<number>();

  constructor(
    public dialog: MatDialog,
    private favoritosService: favoritarPersonagemService,
  ) { }

  verDetalhesPersonagem(personagem: Personagem): void {
    const dialogRef = this.dialog.open(ModalDetalhesComponent, {
      data: personagem
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['personagens']) {
      this.carregaFavoritos();

    }
  }



  async favoritar(id: number): Promise<void> {

    if (this.favoritos.has(id)) {
      await this.favoritosService.removeFavorito(id);
      this.favoritos.delete(id);
      this.personagemRemovido.emit(id);


    } else {
      await this.favoritosService.addFavorito(id);
      this.favoritos.add(id);
    }

  }

  isFavorito(id: number): boolean {
    return this.favoritos.has(id);
  }

  private async carregaFavoritos() {
    const favoriteIds = await this.favoritosService.getFavoritos();
    this.favoritos = new Set(favoriteIds);

  }


}
