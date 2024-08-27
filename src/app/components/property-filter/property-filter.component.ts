// src/app/components/property-filter/property-filter.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-property-filter',
  templateUrl: './property-filter.component.html',
  styleUrls: ['./property-filter.component.scss']
})
export class PropertyFilterComponent {
  filterForm: FormGroup;

  @Output() filter: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      location: [''],
      minPrice: [''],
      maxPrice: [''],
      type: ['']
    });
  }

  onSubmit(): void {
    if (this.filterForm.valid) {
      this.filter.emit(this.filterForm.value);
    }
  }
}
