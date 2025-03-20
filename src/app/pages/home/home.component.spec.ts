import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { PersonagemService } from 'src/app/services/personagem.service';
import { of, throwError } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MockPersonagemService {
  getPersonagem(page: number, name: string, status: string) {
    return of({
      results: [
        { id: 1, name: 'Rick Sanchez', status: 'Alive', image: 'rick.png' },
        { id: 2, name: 'Morty Smith', status: 'Alive', image: 'morty.png' }
      ],
      info: { pages: 5 }
    });
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let personagemService: PersonagemService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatPaginatorModule, RouterTestingModule],
      declarations: [HomeComponent],
      providers: [{ provide: PersonagemService, useClass: MockPersonagemService }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    personagemService = TestBed.inject(PersonagemService);
    fixture.detectChanges();
  });

  it('Crie o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Buscar personagens na inicialização', () => {
    spyOn(personagemService, 'getPersonagem').and.callThrough();
    component.ngOnInit();
    expect(personagemService.getPersonagem).toHaveBeenCalledWith(1, '', 'all');
    expect(component.personagensFiltrados.length).toBe(2);
  });

  it('Filtrar personagens ao mudar o nome', () => {
    spyOn(component, 'buscaPersonagens');
    component.nameFilter = 'Rick';
    component.filtarPersonagens();
    expect(component.buscaPersonagens).toHaveBeenCalled();
  });

  it('Chamar buscaPersonagens ao mudar de página', () => {
    spyOn(component, 'buscaPersonagens');
    component.onPageChange({ pageIndex: 2 } as any);
    expect(component.buscaPersonagens).toHaveBeenCalledWith(3);
  });

  it('Tratar erro 404 e limpe a lista de personagens', () => {
    spyOn(personagemService, 'getPersonagem').and.returnValue(throwError({ status: 404 }));
    component.buscaPersonagens();
    expect(component.personagensFiltrados.length).toBe(0);
  });
});

