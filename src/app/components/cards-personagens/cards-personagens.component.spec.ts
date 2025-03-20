import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsPersonagensComponent } from './cards-personagens.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { favoritarPersonagemService } from 'src/app/services/favoritarPersonagem.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MockFavoritarPersonagemService {
  private favoritos = new Set<number>();

  async addFavorito(id: number) {
    this.favoritos.add(id);
  }

  async removeFavorito(id: number) {
    this.favoritos.delete(id);
  }

  async getFavoritos() {
    return Array.from(this.favoritos);
  }
}

describe('CardsPersonagensComponent', () => {
  let component: CardsPersonagensComponent;
  let fixture: ComponentFixture<CardsPersonagensComponent>;
  let favoritosService: favoritarPersonagemService;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [CardsPersonagensComponent],
      providers: [{ provide: favoritarPersonagemService, useClass: MockFavoritarPersonagemService }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPersonagensComponent);
    component = fixture.componentInstance;
    favoritosService = TestBed.inject(favoritarPersonagemService);
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('Crie o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Carregue favoritos ao detectar mudanças', async () => {
    spyOn(component as any, 'carregaFavoritos');
    component.ngOnChanges({ personagens: { currentValue: [], previousValue: null, firstChange: true, isFirstChange: () => true } });
    expect((component as any).carregaFavoritos).toHaveBeenCalled();
  });

  it('Adicione e remova favoritos corretamente', async () => {
    await component.favoritar(1);
    expect(component.isFavorito(1)).toBeTrue();
    await component.favoritar(2);
    expect(component.isFavorito(1)).toBeFalse();
  });

  it('Dispare evento ao remover favorito', async () => {
    spyOn(component.personagemRemovido, 'emit');
    await component.favoritar(1);
    await component.favoritar(1);
    expect(component.personagemRemovido.emit).toHaveBeenCalledWith(1);
  });

  it('Abra o modal de detalhes', () => {
    spyOn(dialog, 'open').and.returnValue({ afterClosed: () => of(null) } as any);
    component.verDetalhesPersonagem({ id: 1, name: 'Rick', status: 'Alive', image: 'rick.png' } as any);
    expect(dialog.open).toHaveBeenCalled();
  });
});
