import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="Banner">
      <h1>Four Elements Forge LLC</h1>
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
