import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPersonagensComponent } from './cards-personagens.component';

describe('CardsPersonagensComponent', () => {
  let component: CardsPersonagensComponent;
  let fixture: ComponentFixture<CardsPersonagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsPersonagensComponent]
    });
    fixture = TestBed.createComponent(CardsPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
