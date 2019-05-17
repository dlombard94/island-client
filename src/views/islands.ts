import { Island } from '../services/poi-types';

export class Islands {
  name: String;
  area: Number;
  category: String;
  description: String;
  // location: {
  //   longitude: Number;
  //   latitude: Number;
  // }
  islands: Island[] = [];

  addIsland() {
    const island = {
      name: this.name,
      area: this.area,
      category: this.category,
      description: this.description,
      // location: {
      //   longitude: this.location.longitude,
      //   latitude: this.location.latitude
      // }
    };
    this.islands.push(island);
    console.log(island);
  }
}

