import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Personagem } from 'src/app/models/ personagem.model';
@Component({
  selector: 'app-modal-detalhes',
  templateUrl: './modal-detalhes.component.html',
  styleUrls: ['./modal-detalhes.component.scss']
})
export class ModalDetalhesComponent {

  character: any = null;
  loading: boolean = true;
  error: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Personagem) {
    console.log(data.episode.length);
  }



}
