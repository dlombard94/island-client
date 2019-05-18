import {inject, Aurelia} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';
import {Island, Review, User} from "./poi-types";
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TotalUpdate} from "./messages";


@inject(HttpClient, EventAggregator, Aurelia, Router)
export class ReviewService {
  users: Map<string, User> = new Map();
  islands : Island[] = [];
  reviews: Review[] =[];
  bestForOptions =   ['Poor','Below Average', 'Average', 'Above Average', 'Excellent'];
  total = 0;

  constructor(private httpClient: HttpClient, private ea: EventAggregator, private au: Aurelia, private router: Router) {
    httpClient.configure(http => {
      http.withBaseUrl('http://localhost:8080');
    });
    this.getIslands();
    this.getUsers();
  }

  async getIslands() {
    const response = await this.httpClient.get('/api/islands.json');
    this.islands = await response.content;
    console.log (this.islands);
  }

  async getUsers() {
    const response = await this.httpClient.get('/api/users.json');
    const users = await response.content;
    users.forEach(user => {
      this.users.set(user.email, user);
    });
  }


  async review( review: string, bestFor: string, island: Island) {
    const islandReview = {
      review: review,
      bestFor: bestFor,
      island : island
    };
    this.reviews.push(islandReview);
    this.total = this.total + 1;
    this.ea.publish(new TotalUpdate(this.total));
    console.log('Number of Reviews' + this.total);
  }

  signup(firstName: string, lastName: string, email: string, password: string) {
    this.changeRouter(PLATFORM.moduleName('app'))
  }

  async login(email: string, password: string) {
    this.changeRouter(PLATFORM.moduleName('app'))
  }

  logout() {
    this.changeRouter(PLATFORM.moduleName('start'))
  }

  changeRouter(module:string) {
    this.router.navigate('/', { replace: true, trigger: false });
    this.router.reset();
    this.au.setRoot(PLATFORM.moduleName(module));
  }

}
