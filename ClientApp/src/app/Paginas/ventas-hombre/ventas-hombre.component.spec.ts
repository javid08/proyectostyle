import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasHombreComponent } from './ventas-hombre.component';

describe('VentasHombreComponent', () => {
  let component: VentasHombreComponent;
  let fixture: ComponentFixture<VentasHombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasHombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
