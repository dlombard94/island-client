import { inject } from 'aurelia-framework';
import { ReviewService } from '../services/review-service';

@inject(ReviewService)
export class Login {
  email = 'marge@simpson.com';
  password = 'secret';
  prompt = '';

  constructor(private rs: ReviewService) {}

  async login(e) {
    console.log(`Trying to log in ${this.email}`);
    const success = await this.rs.login(this.email, this.password);
    if (!success) {
      this.prompt = "Oops! Try again...";
    }
  }
}
