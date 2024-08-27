// src/app/components/property-list/property-list.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../models/property.model';  // Adjust the import path as needed
import { PropertyService } from '../../services/property.service';  // Adjust the import path as needed

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  @Input() properties: Property[] = [];
  filteredProperties: Property[] = [];

  // Service for managing properties
  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.filteredProperties = this.properties;
  }

  selectProperty(property: Property): void {
    // Logic for viewing property details
    console.log('Viewing details for:', property);
    // You might want to navigate to a detailed view or open a modal here
    // For example, if you have a detailed view component, you might use Angular Router
    // this.router.navigate(['/property-details', property.id]);
  }

  addToCompare(property: Property): void {
    // Logic for adding property to comparison list
    console.log('Adding to comparison:', property);
    // Here you might call a service to add the property to a comparison list
    this.propertyService.addToComparison(property);
  }

  // Optional: Additional methods for filtering or sorting properties
}
