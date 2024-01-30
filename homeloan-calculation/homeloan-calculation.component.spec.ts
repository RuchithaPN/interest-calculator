import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloanCalculationComponent } from './homeloan-calculation.component';

describe('HomeloanCalculationComponent', () => {
  let component: HomeloanCalculationComponent;
  let fixture: ComponentFixture<HomeloanCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeloanCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeloanCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
