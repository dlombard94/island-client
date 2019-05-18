import {inject} from 'aurelia-framework';
import { bindable } from 'aurelia-framework';
import {Island, Review} from "../../services/poi-types";
import {ReviewService} from "../../services/review-service";

@inject(ReviewService)
export class ReviewForm {

  // @bindable
  // reviews: Review[] = [];
  // @bindable
  // ratingOptions: string[];
  @bindable
  bestForOptions: string[];

  @bindable
    islands: Island[];

  // selectedOption = '';
  review = '';
  selectedBestFor = '';
  selectedIsland: Island = null;

  constructor(private rs: ReviewService){}


  makeReview() {
    this.rs.review(this.review,this.selectedBestFor,this.selectedIsland)
    // const review = {
    //   review: this.review,
    //   // rating: this.selectedOption,
    //   bestFor : this.selectedBestFor,
    //   island: this.selectedIsland
    // };
    // this.reviews.push(review);
    // console.log(this.reviews);
  }

}
