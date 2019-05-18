import { inject } from 'aurelia-framework';
import { ReviewService } from '../../services/review-service';
import { bindable } from 'aurelia-framework';

@inject(ReviewService)
export class TotalReviewed {
  @bindable
  total = 0;

  constructor(private ds: ReviewService) {}
}
