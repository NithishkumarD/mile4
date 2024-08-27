// src/app/components/property-search/property-search.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.scss']
})
export class PropertySearchComponent {
  searchForm = new FormGroup({
    location: new FormControl(''),
    minPrice: new FormControl(''),
    maxPrice: new FormControl(''),
    type: new FormControl('')
  });

  @Output() filter = new EventEmitter<Property[]>();

  onSearch(): void {
    // Filtering logic here
  }
}
