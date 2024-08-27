// src/app/models/property.model.ts
export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  description: string;
}
