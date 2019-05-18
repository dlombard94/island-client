import { inject } from 'aurelia-framework';
import {Island, Review} from "../services/poi-types";
import { ReviewService } from '../services/review-service';

@inject(ReviewService)
export class Reviews {

    reviews: Review[] = [];
    // ratingOptions = ['Poor','Below Average', 'Average', 'Above Average', 'Excellent'];
    bestForOptions = ['Poor','Below Average', 'Average', 'Above Average', 'Excellent'];
    islands: Island[];

  constructor(private rs: ReviewService) {
    this.islands = rs.islands;
  }

}
