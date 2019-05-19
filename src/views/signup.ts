import { inject } from 'aurelia-framework';
import {ReviewService} from "../services/review-service";

@inject(ReviewService)
export class Signup {
  firstName = 'Marge';
  lastName = 'Simpson';
  email = 'marge@simpson.com';
  password = 'secret';
  prompt = '';

  constructor(private rs: ReviewService) {}


  signup(e) {
    console.log(`Trying to sign up ${this.email}`);
    const success = this.rs.signup(this.firstName, this.lastName, this.email, this.password);
    if (!success) {
      this.prompt = 'Oops! Try again...';
    }

  }
}
