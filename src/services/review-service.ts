import {inject, Aurelia} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';
import {Island, Review, User, RawReview} from "./poi-types";
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TotalUpdate} from "./messages";
import {log} from "util";


@inject(HttpClient, EventAggregator, Aurelia, Router)
export class ReviewService {
  users: Map<string, User> = new Map();
  usersById: Map<string, User> = new Map();
  islands : Island[] = [];
  reviews: Review[] =[];
  bestForOptions =   ['Poor','Below Average', 'Average', 'Above Average', 'Excellent'];
  total = 0;

  constructor(private httpClient: HttpClient, private ea: EventAggregator, private au: Aurelia, private router: Router) {
    // httpClient.configure(http => {
    //   http.withBaseUrl('http://localhost:8080');
    // });
    httpClient.configure(http => {
      http.withBaseUrl('http://Dlombard:3000');
    });
    this.getIslands();
    this.getUsers();
    this.getReviews();
  }

  async getIslands() {
    const response = await this.httpClient.get('/api/islands');
    this.islands = await response.content;
    console.log ("ISLANDS------------------------------------");

    console.log (this.islands);
  }

  async getUsers() {
    const response = await this.httpClient.get('/api/users');
    const users = await response.content;
    console.log ("USERS------------------------------------");

    console.log(users);
    users.forEach(user => {
      this.users.set(user.email, user);
      this.usersById.set(user._id, user);
    });
  }

  async getReviews() {
    const response = await this.httpClient.get('/api/reviews');
    console.log(response);
    const rawReviews: RawReview[] = await response.content;
    console.log("RAWREVIEW");
    console.log(rawReviews);
    rawReviews.forEach(rawReview => {
      const review = {
        review: rawReview.review,
        bestFor : rawReview.bestFor,
        //island is returning undefined for some reason?????????????????
        island :this.islands.find(island => rawReview.island == island._id),
      }

      console.log("REVIEW")
      console.log(review);

      this.reviews.push(review);
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

  async createIsland(name: string, area: number, category: string, description: string) {
    const island = {
      name: name,
      area: area,
      category: category,
      description: description
    };
    const response = await this.httpClient.post('/api/islands', island);
    const newIsland = await response.content;
    this.islands.push(newIsland);
  }

  async signup(firstName: string, lastName: string, email: string, password: string) {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    const response = await this.httpClient.post('/api/users', user);
    const newUser = await response.content;
    this.users.set(newUser.email, newUser);
    this.usersById.set(newUser._id, newUser);
    this.changeRouter(PLATFORM.moduleName('app'))
    return false;
  }

  async login(email: string, password: string) {
    const user = this.users.get(email);
    if (user && (user.password === password)) {
      this.changeRouter(PLATFORM.moduleName('app'))
      return true;
    } else {
      return false;
    }
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
