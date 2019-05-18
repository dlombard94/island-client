import { bindable } from 'aurelia-framework';
import {Review} from "../../services/poi-types"


export class ReviewForm {
  review = '';

  @bindable
  reviews: Review[] = [];
  // @bindable
  // ratingOptions: string[];

  @bindable
  bestForOptions: string[];



  // selectedOption = '';

  selectedBestFor = '';


  makeReview() {
    const review = {
      review: this.review,
      // rating: this.selectedOption,
      bestFor : this.selectedBestFor
    };
    this.reviews.push(review);
    console.log(this.reviews);
  }

}
