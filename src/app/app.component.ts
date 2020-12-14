import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  targetGroup = 'WWI19DSA';
  counter = 0

  public onButtonClick() {
    setInterval(() => {
      this.counter = this.counter + 1
    }, 1000)
  }
}
