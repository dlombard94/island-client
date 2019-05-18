import { bindable } from 'aurelia-framework';
import {Island, Review} from "../../services/poi-types"


export class ReviewForm {
  review = '';

  @bindable
  reviews: Review[] = [];
  // @bindable
  // ratingOptions: string[];
  @bindable
  bestForOptions: string[];

  @bindable
    islands: Island[];

  // selectedOption = '';

  selectedBestFor = '';
  selectedIsland: Island = null;


  makeReview() {
    const review = {
      review: this.review,
      // rating: this.selectedOption,
      bestFor : this.selectedBestFor,
      island: this.selectedIsland
    };
    this.reviews.push(review);
    console.log(this.reviews);
  }

}
