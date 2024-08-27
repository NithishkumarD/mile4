// src/app/components/property-details/property-details.component.ts
import { Component, Input } from '@angular/core';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent {
  @Input() property!: Property;
}
