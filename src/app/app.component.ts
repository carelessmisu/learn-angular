import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  @if (isServerRunning){
    <span>Yes, the server is running</span>
  } @else {
    <span>Yes, the server is  not running</span>
  }
    <!-- <span>Yes, the server is running</span> -->
  `,
})
export class AppComponent {
  // isServerRunning = true;
  isServerRunning = false;
}
