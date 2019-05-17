import { bindable } from 'aurelia-framework';

export class ReviewForm {
  review = '';
  @bindable
  reviews: string[] = [];

  makeReview() {
    this.reviews.push(this.review);
    console.log(this.reviews);
  }
}
