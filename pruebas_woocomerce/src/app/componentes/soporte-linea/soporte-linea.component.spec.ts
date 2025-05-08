import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteLineaComponent } from './soporte-linea.component';

describe('SoporteLineaComponent', () => {
  let component: SoporteLineaComponent;
  let fixture: ComponentFixture<SoporteLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoporteLineaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoporteLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
