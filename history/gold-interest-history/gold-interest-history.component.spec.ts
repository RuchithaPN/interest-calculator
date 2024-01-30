import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldInterestHistoryComponent } from './gold-interest-history.component';

describe('GoldInterestHistoryComponent', () => {
  let component: GoldInterestHistoryComponent;
  let fixture: ComponentFixture<GoldInterestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldInterestHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldInterestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
