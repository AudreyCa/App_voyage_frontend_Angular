import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { Component } from '@angular/core';

@Component({
  selector: 'app-location-strategy',
  providers: [Location, {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  }],
  template: `The Current URL Is <span>{{PathLocation.path()}}</span>`
})
export class LocationStrategyComponent {
PathLocation: Location;

constructor(location: Location) {
  this.PathLocation = location;
}

}
