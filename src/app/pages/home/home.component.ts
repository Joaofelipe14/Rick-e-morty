import { Component } from '@angular/core';
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

  favorites = new Set<number>();


  personagem: Personagem[] = [];
  personagensFiltrados: Personagem[] = [];
  loading: boolean = true;
  error: string = '';
  nameFilter: string = '';
  statusFilter: string = 'all';
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(
    private personagemService: PersonagemService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.buscaPersonagens();
  }

  buscaPersonagens(page: number = 1): void {
    this.loading = true;
    this.personagemService.getPersonagem(page, this.nameFilter, this.statusFilter).subscribe({
      next: (data: { results: any[]; info: { pages: number; }; }) => {
        this.personagem = data.results;
        this.personagensFiltrados = this.personagem;
        this.totalPages = data.info.pages;
        this.currentPage = page;
        this.loading = false;
      },
      error: (error) => {

        console.log(error.error.error)
        if (error.status === 404) {
          console.log('404')
          this.personagensFiltrados = []

        }
        this.loading = false;
      }
    });
  }

  filtarPersonagens(): void {
    this.buscaPersonagens();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.buscaPersonagens(this.currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }



}
