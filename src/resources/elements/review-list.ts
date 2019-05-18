import { bindable } from 'aurelia-framework';
import { Review } from '../../services/poi-types';


export class ReviewList {
  @bindable
  reviews : Review[];
}
