import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent  {
  @Input() isLoading: boolean =false; 
  carregaTexto: string = ''; 
  private Texto: string = 'Carregando...'; 
  private index: number = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLoading'] && this.isLoading) {
      this.index = 0;  
      this.carregaTexto = '';
      this.typeText(this.Texto);  
    }
  }

  typeText(Texto: string) {
    if (this.index < Texto.length) {
      this.carregaTexto += Texto[this.index];
      this.index++;
      setTimeout(() => this.typeText(Texto), 100); 
    } else {
      setTimeout(() => this.typeText(Texto), 1000);
    }
  }
}
