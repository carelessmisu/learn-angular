import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user name="Sirman" />
  `,
  imports: [UserComponent],
})
export class AppComponent {}
