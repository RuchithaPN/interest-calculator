import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInterestHistoryComponent } from './personal-interest-history.component';

describe('PersonalInterestHistoryComponent', () => {
  let component: PersonalInterestHistoryComponent;
  let fixture: ComponentFixture<PersonalInterestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInterestHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInterestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
