import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuProductosComponent } from './formu-productos.component';

describe('FormuProductosComponent', () => {
  let component: FormuProductosComponent;
  let fixture: ComponentFixture<FormuProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
