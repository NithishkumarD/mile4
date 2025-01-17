import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFilterComponent } from './property-filter.component';

describe('PropertyFilterComponent', () => {
  let component: PropertyFilterComponent;
  let fixture: ComponentFixture<PropertyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
