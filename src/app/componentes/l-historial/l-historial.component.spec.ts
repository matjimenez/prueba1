import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LHistorialComponent } from './l-historial.component';

describe('LHistorialComponent', () => {
  let component: LHistorialComponent;
  let fixture: ComponentFixture<LHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
