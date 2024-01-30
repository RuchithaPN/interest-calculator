import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriInterestHistoryComponent } from './agri-interest-history.component';

describe('AgriInterestHistoryComponent', () => {
  let component: AgriInterestHistoryComponent;
  let fixture: ComponentFixture<AgriInterestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriInterestHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriInterestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
