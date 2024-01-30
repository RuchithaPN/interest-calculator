import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriloanCalculationComponent } from './agriloan-calculation.component';

describe('AgriloanCalculationComponent', () => {
  let component: AgriloanCalculationComponent;
  let fixture: ComponentFixture<AgriloanCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriloanCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriloanCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
