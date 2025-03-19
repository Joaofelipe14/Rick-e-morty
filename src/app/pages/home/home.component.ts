import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { animate, style, transition, trigger } from '@angular/animations';
import { PersonagemService } from 'src/app/services/personagem.service';
import { Personagem } from 'src/app/models/ personagem.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('pageTransition', [
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
export class HomeComponent {

  favorites = new Set<number>(); // Usar Set para armazenar os IDs dos favoritos


  personagem: Personagem[] = [];
  personagensFiltrados: Personagem[] = [];
  loading: boolean = true;
  error: string = '';
  nameFilter: string = '';
  statusFilter: string = 'all';
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private personagemService: PersonagemService, private router: Router

  ) {}

  ngOnInit(): void {
    this.fetchCharacters(); 
  }

  fetchCharacters(page: number = 1): void {
    this.loading = true;
    this.personagemService.getPersonagem(page).subscribe({
      next: (data: { results: any[]; info: { pages: number; }; }) => {
        this.personagem = data.results;
        this.personagensFiltrados = this.personagem;
        this.totalPages = data.info.pages;
        this.currentPage = page;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Erro ao carregar os personagens';
        this.loading = false;
      }
    });
  }

  filtarPersonagens(): void {
    this.personagensFiltrados = this.personagem.filter(character => {
      const nameMatch = character.name.toLowerCase().includes(this.nameFilter.toLowerCase());
      const statusMatch = this.statusFilter === 'all' || character.status.toLowerCase() == this.statusFilter.toLowerCase();
      return nameMatch && statusMatch;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/character', id]);
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.fetchCharacters(this.currentPage);
  }

  

}
