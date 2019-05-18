import { inject } from 'aurelia-framework';
import {Island, Review} from "../services/poi-types";
import { ReviewService } from '../services/review-service';

@inject(ReviewService)
export class Reviews {
    reviews: Review[];
    // ratingOptions = ['Poor','Below Average', 'Average', 'Above Average', 'Excellent'];
    bestForOptions: string[];
    islands: Island[];
    total=0;

  constructor(private rs: ReviewService) {
    this.reviews = rs.reviews;
    this.bestForOptions = rs.bestForOptions;
    this.islands = rs.islands;
    this.total=rs.total;
  }

}
