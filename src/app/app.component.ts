import { Component } from '@angular/core';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'css-playground2';
  // foo: Promise<Type<FooComponent>>;
  foo;

  loadFoo() {
    if (!this.foo) {
      this.foo = import(`./foo/foo.component`)
                       .then(({ FooComponent }) => FooComponent);
    }
  }
}
