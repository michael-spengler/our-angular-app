import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  targetGroup = 'Folks';
  counter = 0

  public onClick() {
    setInterval(() => {
      this.counter = this.counter + 1
    }, 1000)
  }
}
