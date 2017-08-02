import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-work',
  styleUrls: ['./under-work.component.scss'],
  template: `
    <app-para
      [info]="underConstruction"
    ></app-para>
    
    <app-picture
      [background]="'./assets/img/under-work2.gif'"
      [height]="'60vh'"
      [attachment]="'scroll'"
    ></app-picture>
    
    <!--<div class="working-on-it">
      <img 
        class="working-img"
        src="./assets/img/under-work2.gif" 
        alt="Site is still In The Forge">
    </div>-->
  `
})
export class UnderWorkComponent implements OnInit {
  underConstruction = [
    {type: 'header', text: 'Site is still "In The Forge"'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
