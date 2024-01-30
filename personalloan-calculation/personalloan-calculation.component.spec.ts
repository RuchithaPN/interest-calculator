import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalloanCalculationComponent } from './personalloan-calculation.component';

describe('PersonalloanCalculationComponent', () => {
  let component: PersonalloanCalculationComponent;
  let fixture: ComponentFixture<PersonalloanCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalloanCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalloanCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
