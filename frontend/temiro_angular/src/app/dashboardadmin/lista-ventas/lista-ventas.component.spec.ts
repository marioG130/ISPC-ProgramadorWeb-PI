import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVentasComponent } from './lista-ventas.component';

describe('ListaVentasComponent', () => {
  let component: ListaVentasComponent;
  let fixture: ComponentFixture<ListaVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
