import { inject } from 'aurelia-framework';
import { ReviewService } from '../services/review-service';

@inject(ReviewService)
export class Logout {
  constructor(private rs: ReviewService) {}

  attached() {
    this.rs.logout();
  }
}
