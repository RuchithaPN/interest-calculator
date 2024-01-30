import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInterestHistoryComponent } from './home-interest-history.component';

describe('HomeInterestHistoryComponent', () => {
  let component: HomeInterestHistoryComponent;
  let fixture: ComponentFixture<HomeInterestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInterestHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInterestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
