import { bindable } from 'aurelia-framework';
import { Island } from '../../services/poi-types';

export class IslandForm {
  name: string;
  area: number;
  category: string;
  description: string;
  @bindable
  islands: Island[];

  addIsland() {
    const island = {
      name: this.name,
      area: this.area,
      description: this.description,
      category: this.category
    };
    this.islands.push(island);
    console.log(island);
  }
}
