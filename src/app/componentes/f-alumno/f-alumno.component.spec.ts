import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAlumnoComponent } from './f-alumno.component';

describe('FAlumnoComponent', () => {
  let component: FAlumnoComponent;
  let fixture: ComponentFixture<FAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
