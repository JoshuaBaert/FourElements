import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="logo">
      
    </div>
    <app-nav></app-nav>
    
  `
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
