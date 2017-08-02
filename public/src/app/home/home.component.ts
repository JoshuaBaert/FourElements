import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `
    <div class="home-main">

      <app-picture
        [background]="'./assets/img/img1.jpg'"
      ></app-picture>
      
      <app-para
        [info]="introParagraph"
      ></app-para>

      <app-picture
        [background]="'./assets/img/img2.jpg'"
      ></app-picture>

      <app-para
      ></app-para>

      <app-picture
        [background]="'./assets/img/img3.jpg'"
      ></app-picture>

    </div>
  `
})
export class HomeComponent implements OnInit {
  introParagraph = [
    {type: 'header', text: 'Some Header'},
    {type: 'paragraph', text: `Four Elements Forge is your classic traditional blacksmith shop located in central Utah right off of good old I15. We specialize in custom home decor iron work, staircase/porch railings, and unique jewelry. That is not to say that we don’t craft the occasional high carbon blade every so often when requested. Our moto is if it’s made of steel or iron we can probably forge it for you. We began as a simple Idea, make things that were not fake, that did not break and were made in the USA for customers that are looking for high end quality products for their yard, or home, or office. We took this Idea and expanded to wedding hardware including the one ring that will bind them all and added on our fine crafting area for the more dainty metals. It is our mission to bring you, the customer, the same amazing lasts forever quality that you would expect to be dug up from a thousand years ago, and put it in your hands`},
  ];
  constructor() { }

  ngOnInit() {
  }

}
