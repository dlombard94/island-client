import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([

      {
        route: 'islands',
        name: 'islands',
        moduleId: PLATFORM.moduleName('views/islands'),
        nav: true,
        title: 'Islands'
      },
      {
        route: ['', 'review'],
        name: 'Review',
        moduleId: PLATFORM.moduleName('views/review'),
        nav: true,
        title: 'Reviews'
      },
      {
        route: 'logout',
        name: 'logout',
        moduleId: PLATFORM.moduleName('views/logout'),
        nav: true,
        title: 'Logout'
      }

    ]);
    this.router = router;
  }
}
