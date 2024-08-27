// src/app/components/property-comparison/property-comparison.component.ts
import { Component, Input } from '@angular/core';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-property-comparison',
  templateUrl: './property-comparison.component.html',
  styleUrls: ['./property-comparison.component.scss']
})
export class PropertyComparisonComponent {
  @Input() propertiesToCompare: Property[] = [];
}
