import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaVentaComponent } from './una-venta.component';

describe('UnaVentaComponent', () => {
  let component: UnaVentaComponent;
  let fixture: ComponentFixture<UnaVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnaVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnaVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
