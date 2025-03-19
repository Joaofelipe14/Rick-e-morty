import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ModalDetalhesComponent } from './components/modal-detalhes/modal-detalhes.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CardsPersonagensComponent } from './components/cards-personagens/cards-personagens.component'; 


export function getPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();
  paginatorIntl.itemsPerPageLabel = 'Itens por página'; 
  paginatorIntl.nextPageLabel = 'Próxima página'; 
  paginatorIntl.previousPageLabel = 'Página anterior'; 
  paginatorIntl.firstPageLabel = 'Primeira página'; 
  paginatorIntl.lastPageLabel = 'Última página'; 
  return paginatorIntl;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritosComponent,
    SobreComponent,
    RodapeComponent,
    CabecalhoComponent,
    ModalDetalhesComponent,
    CardsPersonagensComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    // MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useFactory: getPaginatorIntl },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
