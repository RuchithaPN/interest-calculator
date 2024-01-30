import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInterestHistoryComponent } from './simple-interest-history.component';

describe('SimpleInterestHistoryComponent', () => {
  let component: SimpleInterestHistoryComponent;
  let fixture: ComponentFixture<SimpleInterestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleInterestHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleInterestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
