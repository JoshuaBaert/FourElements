import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="banner">
      <div class="banner-overlay"></div>
    </div>
    <app-nav></app-nav>
    
    <router-outlet></router-outlet>
    
    <app-footer></app-footer>
  `
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
