import { inject } from 'aurelia-framework';
import { Island } from '../services/poi-types';
import { ReviewService } from '../services/review-service';

@inject(ReviewService)
export class Islands {
  islands: Island[];

  constructor(private rs: ReviewService) {
    this.islands = rs.islands;
  }
}
