import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyComparisonComponent } from './property-comparison.component';

describe('PropertyComparisonComponent', () => {
  let component: PropertyComparisonComponent;
  let fixture: ComponentFixture<PropertyComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
