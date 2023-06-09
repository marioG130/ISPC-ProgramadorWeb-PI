import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmClientesComponent } from './abm-clientes.component';

describe('AbmClientesComponent', () => {
  let component: AbmClientesComponent;
  let fixture: ComponentFixture<AbmClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
