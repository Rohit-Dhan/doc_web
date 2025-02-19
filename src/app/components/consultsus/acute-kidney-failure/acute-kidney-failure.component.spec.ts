import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuteKidneyFailureComponent } from './acute-kidney-failure.component';

describe('AcuteKidneyFailureComponent', () => {
  let component: AcuteKidneyFailureComponent;
  let fixture: ComponentFixture<AcuteKidneyFailureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcuteKidneyFailureComponent]
    });
    fixture = TestBed.createComponent(AcuteKidneyFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
