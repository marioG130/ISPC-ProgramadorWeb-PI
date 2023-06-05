import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEncontradaComponent } from './no-encontrada.component';

describe('NoEncontradaComponent', () => {
  let component: NoEncontradaComponent;
  let fixture: ComponentFixture<NoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEncontradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
