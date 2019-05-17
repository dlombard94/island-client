import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: ['', 'review'],
        name: 'Review',
        moduleId: PLATFORM.moduleName('views/review'),
        nav: true,
        title: 'Review'
      },
      {
        route: 'islands',
        name: 'islands',
        moduleId: PLATFORM.moduleName('views/islands'),
        nav: true,
        title: 'Island'
      }
    ]);
    this.router = router;
  }
}
