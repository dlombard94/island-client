export class Review {

  review = '';
  reviewArray: string[] = [];

  makeReview() {
    this.reviewArray.push(this.review);
    console.log(this.reviewArray);
  }
}
