import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoramientoComponent } from './asesoramiento.component';

describe('AsesoramientoComponent', () => {
  let component: AsesoramientoComponent;
  let fixture: ComponentFixture<AsesoramientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsesoramientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsesoramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
