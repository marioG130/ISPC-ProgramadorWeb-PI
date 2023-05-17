import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrocomprasComponent } from './carrocompras.component';

describe('CarrocomprasComponent', () => {
  let component: CarrocomprasComponent;
  let fixture: ComponentFixture<CarrocomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrocomprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrocomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
