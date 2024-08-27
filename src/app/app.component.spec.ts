import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PropertyComparisonComponent } from './components/property-comparison/property-comparison.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertyFilterComponent } from './components/property-filter/property-filter.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertySearchComponent } from './components/property-search/property-search.component';
import { PropertyService } from './services/property.service';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let propertyService: PropertyService;
  let mockPropertyService: jasmine.SpyObj<PropertyService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PropertListing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PropertListing');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PropertyComparisonComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PropertyDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(PropertyFilterComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PropertyListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PropertySearchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  beforeEach(async () => {
    mockPropertyService = jasmine.createSpyObj('PropertyService', ['getProperties']);
    mockPropertyService.getProperties.and.returnValue(of([
      { id: 1, title: 'Cozy Cottage', location: 'New York', price: 250000, imageUrl: 'assets/property1.jpg', type: 'House', bedrooms: 2, bathrooms: 1, amenities: ['Garden', 'Fireplace'], description: 'A cozy cottage in the heart of the city with a beautiful garden.' }
    ]));

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PropertyFilterComponent,
        PropertyListComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        { provide: PropertyService, useValue: mockPropertyService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    propertyService = TestBed.inject(PropertyService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties from the service', () => {
    component.ngOnInit();
    expect(component.filteredProperties.length).toBeGreaterThan(0);
  });

  it('should call onFilter when filter form is submitted', () => {
    spyOn(component, 'onFilter');
    
    const filterComponent = fixture.debugElement.nativeElement.querySelector('app-property-filter');
    const form = filterComponent.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    
    fixture.detectChanges();
    expect(component.onFilter).toHaveBeenCalled();
  });
  
});