import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermCondicionesComponent } from './term-condic.component';

describe('TermCondicionesComponent', () => {
  let component: TermCondicionesComponent;
  let fixture: ComponentFixture<TermCondicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermCondicionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermCondicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
