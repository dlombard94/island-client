import {inject} from 'aurelia-framework';
import {Island, Review} from "./poi-types";
import {HttpClient} from 'aurelia-http-client';


@inject(HttpClient)
export class ReviewService {
  islands : Island[] = [];
  reviews: Review[] =[];
  bestForOptions =   ['Poor','Below Average', 'Average', 'Above Average', 'Excellent'];
  total = 0;

  constructor(private httpClient: HttpClient) {
    httpClient.configure(http => {
      http.withBaseUrl('http://localhost:8080');
    });
    this.getIslands();
  }

  async getIslands() {
    const response = await this.httpClient.get('/api/islands.json');
    this.islands = await response.content;
    console.log (this.islands);
  }

  async review( review: string, bestFor: string, island: Island) {
    const islandReview = {
      review: review,
      bestFor: bestFor,
      island : island
    };
    this.reviews.push(islandReview);
    this.total = this.total + 1;
    console.log('Number of Reviews' + this.total);
  }

}
