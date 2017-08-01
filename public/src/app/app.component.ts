import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="logo">

    </div>
    <app-nav></app-nav>
    <app-home></app-home>
  `
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
