import { inject } from 'aurelia-framework';
import { ReviewService } from '../../services/review-service';
import { bindable } from 'aurelia-framework';
import { TotalUpdate } from '../../services/messages';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(ReviewService, EventAggregator)
export class TotalReviewed {
  @bindable
  total = 0;

  constructor(private rs: ReviewService, private ea: EventAggregator) {
    this.total = rs.total;
    ea.subscribe(TotalUpdate, msg => {
      this.total = msg.total;
    });
  }


}
