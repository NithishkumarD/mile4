// src/app/services/property.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private comparisonList: Property[] = [];
  private comparisonListSubject = new BehaviorSubject<Property[]>(this.comparisonList);

  // Hardcoded property data
  private properties: Property[] = [
    { 
      id: 1, 
      title: 'Cozy Cottage', 
      location: 'San Francisco', 
      price: 250000, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_zBhT7fjSxGramOp0rrUuIbZqe3QWDCeWQ&s', 
      type: 'House',
      bedrooms: 2,
      bathrooms: 1,
      amenities: ['Garden', 'Fireplace'],
      description: 'A cozy cottage in the heart of the city with a beautiful garden.'
    },
    { 
      id: 2, 
      title: 'Modern Apartment', 
      location: 'San Francisco', 
      price: 450000, 
      imageUrl: 'https://static1.squarespace.com/static/55aee55ce4b0386b88347b56/t/60ca402bc4b0955fcc1b9eee/1623867441814/vela-2353-lombard-apartment.jpg?format=1500w', 
      type: 'Apartment',
      bedrooms: 3,
      bathrooms: 2,
      amenities: ['Gym', 'Pool'],
      description: 'A modern apartment with stunning city views and access to a gym and pool.'
    },
    { 
      id: 3, 
      title: 'Spacious Villa', 
      location: 'Los Angeles', 
      price: 800000, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4K6RxLB1VD49i2qNGdGRDAssLPxPk51REug&s', 
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      amenities: ['Pool', 'Garage'],
      description: 'A spacious villa with a private pool and a large garage.'
    },
    { 
      id: 4, 
      title: 'Luxury Penthouse', 
      location: 'Chicago', 
      price: 1200000, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5i7Fk7STpUsdqwEBWUHN1NKiUIOj1VYJb7A&s', 
      type: 'Penthouse',
      bedrooms: 5,
      bathrooms: 4,
      amenities: ['Spa', 'Rooftop Terrace'],
      description: 'A luxurious penthouse with a private spa and a rooftop terrace.'
    },
    { 
      id: 5, 
      title: 'Charming Bungalow', 
      location: 'Miami', 
      price: 300000, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoRvvReIgtrqw4PGZkHnaypL8IhZLzvgVvw&s', 
      type: 'Bungalow',
      bedrooms: 2,
      bathrooms: 1,
      amenities: ['Patio', 'Garden'],
      description: 'A charming bungalow with a lovely patio and garden.'
    },
    { 
      id: 6, 
      title: 'Elegant Townhouse', 
      location: 'Seattle', 
      price: 500000, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcZNrR-oViwt3LGn53vn48LTsBg59iB7I7g&s', 
      type: 'Townhouse',
      bedrooms: 3,
      bathrooms: 2,
      amenities: ['Roof Deck', 'Home Office'],
      description: 'An elegant townhouse with a roof deck and a home office space.'
    },
    { 
      id: 7, 
      title: 'Rustic Farmhouse', 
      location: 'Austin', 
      price: 350000, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQT9vg8g9UHxzAW063Kes6KRjmTCwlY8guw&s', 
      type: 'Farmhouse',
      bedrooms: 4,
      bathrooms: 3,
      amenities: ['Barn', 'Large Yard'],
      description: 'A rustic farmhouse with a large yard and a barn.'
    },
    { 
      id: 8, 
      title: 'Contemporary Loft', 
      location: 'Denver', 
      price: 600000, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEeoqzBODdD2zkG-AvYbU9nPXyNqwW2Zk-g&s', 
      type: 'Loft',
      bedrooms: 2,
      bathrooms: 1,
      amenities: ['Exposed Brick', 'High Ceilings'],
      description: 'A contemporary loft with exposed brick walls and high ceilings.'
    },
    { 
      id: 9, 
      title: 'Seaside Cottage', 
      location: 'San Diego', 
      price: 700000, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuyTwT-1UWob5xK3YEu13UIklhac8195FKGA&s', 
      type: 'Cottage',
      bedrooms: 3,
      bathrooms: 2,
      amenities: ['Ocean View', 'Deck'],
      description: 'A seaside cottage with an ocean view and a large deck.'
    },
    { 
      id: 10, 
      title: 'Penthouse Suite', 
      location: 'Las Vegas', 
      price: 1300000, 
      imageUrl: 'https://i0.wp.com/discotech.me/wp-content/uploads/2020/04/aria-sky-1.jpg?resize=845%2C684&ssl=1', 
      type: 'Penthouse',
      bedrooms: 4,
      bathrooms: 4,
      amenities: ['Private Elevator', 'Panoramic Views'],
      description: 'A penthouse suite with a private elevator and panoramic views of the city.'
    }
  ];

  constructor() {}

  getProperties(): Observable<Property[]> {
    return of(this.properties); // Return an observable with hardcoded data
  }

  getComparisonList(): Observable<Property[]> {
    return this.comparisonListSubject.asObservable();
  }

  addToComparison(property: Property): void {
    if (!this.comparisonList.find(p => p.id === property.id)) {
      this.comparisonList.push(property);
      this.comparisonListSubject.next(this.comparisonList);
    }
  }
}
