import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAlumnosComponent } from './l-alumnos.component';

describe('LAlumnosComponent', () => {
  let component: LAlumnosComponent;
  let fixture: ComponentFixture<LAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
