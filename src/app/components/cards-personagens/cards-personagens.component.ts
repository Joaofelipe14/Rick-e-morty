import { Component, Input } from '@angular/core';
import { Personagem } from 'src/app/models/ personagem.model';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetalhesComponent } from '../modal-detalhes/modal-detalhes.component';

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

  @Input() personagens: Personagem[] = [];

  constructor(public dialog: MatDialog,) { }

  verDetalhesPersonagem(personagem: Personagem): void {
    const dialogRef = this.dialog.open(ModalDetalhesComponent, {
      data: personagem
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
