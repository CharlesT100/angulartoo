import {ComponentMetadata as Component, ViewMetadata as View, bootstrap} from 'angular2/angular2';
import {Angulartoo} from 'angulartoo';

@Component({
  selector: 'main'
})

@View({
  directives: [Angulartoo],
  template: `
    <angulartoo></angulartoo>
  `
})

class Main {

}

bootstrap(Main);
