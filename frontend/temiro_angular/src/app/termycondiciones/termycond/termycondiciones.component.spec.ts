import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermycondicionesComponent } from './termycondiciones.component';

describe('TermycondicionesComponent', () => {
  let component: TermycondicionesComponent;
  let fixture: ComponentFixture<TermycondicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermycondicionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermycondicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
