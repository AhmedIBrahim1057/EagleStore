import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eagle-store';

  show = false;

  toggleMenu()
  {
    this.show = !this.show;
  }

}
