export interface Island {
  name: string;
  area: number;
  category: string;
  description: string;
  // location: {
  //   longitude: Number;
  //   latitude: Number;
  // }
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
}
