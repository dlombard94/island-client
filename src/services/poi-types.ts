export interface Island {
  name: string;
  area: number;
  category: string;
  description: string;
  addedBy: string;
  _id: string;
  location: {
    longitude: number;
    latitude: number;
  };
  // pictures: [];
}

export interface Review {
  review: string;
  // rating: string;
  bestFor: string;
  island: Island;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
}

export interface RawReview {
  review: string;
  bestFor: string;
  island: string;
}
