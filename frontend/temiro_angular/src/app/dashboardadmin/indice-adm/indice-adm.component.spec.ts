import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceAdmComponent } from './indice-adm.component';

describe('IndiceAdmComponent', () => {
  let component: IndiceAdmComponent;
  let fixture: ComponentFixture<IndiceAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
