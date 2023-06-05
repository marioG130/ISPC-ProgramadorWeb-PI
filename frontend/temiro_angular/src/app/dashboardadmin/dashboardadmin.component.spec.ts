import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardadminComponent } from './dashboardadmin.component';

describe('DashboardadminComponent', () => {
  let component: DashboardadminComponent;
  let fixture: ComponentFixture<DashboardadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
