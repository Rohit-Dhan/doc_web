import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventiveNephrologyComponent } from './preventive-nephrology.component';

describe('PreventiveNephrologyComponent', () => {
  let component: PreventiveNephrologyComponent;
  let fixture: ComponentFixture<PreventiveNephrologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreventiveNephrologyComponent]
    });
    fixture = TestBed.createComponent(PreventiveNephrologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
