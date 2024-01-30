import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldloanCalculationComponent } from './goldloan-calculation.component';

describe('GoldloanCalculationComponent', () => {
  let component: GoldloanCalculationComponent;
  let fixture: ComponentFixture<GoldloanCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldloanCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldloanCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
