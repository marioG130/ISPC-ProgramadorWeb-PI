import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicesComponent } from './indices.component';

describe('IndicesComponent', () => {
  let component: IndicesComponent;
  let fixture: ComponentFixture<IndicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
