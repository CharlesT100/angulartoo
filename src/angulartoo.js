import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'angulartoo'
})

@View({
  templateUrl: 'angulartoo.html'
})

export class Angulartoo {

  constructor() {
    console.info('Angulartoo Component Mounted Successfully');
  }

}
