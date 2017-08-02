import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `
    <div class="home-main">

      <app-picture
        [background]="'./assets/img/img7.jpg'"
      ></app-picture>
      
      <app-para
        [info]="introParagraph"
      ></app-para>

      <app-picture
        [background]="'./assets/img/img2.jpg'"
      ></app-picture>

      <app-para
        [info]="classParagraph"
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
    {type: 'paragraph', text: `Four Elements Forge is your classic traditional blacksmith
     shop located in central Utah right off of good old I15. We specialize in custom home
     decor iron work, staircase/porch railings, and unique jewelry. That is not to say 
     that we don’t craft the occasional high carbon blade every so often when requested.
     Our moto is if it’s made of steel or iron we can probably forge it for you. We 
     began as a simple Idea, make things that were not fake, that did not break and were 
     made in the USA for customers that are looking for high end quality products for 
     their yard, or home, or office. We took this Idea and expanded to wedding hardware 
     including the one ring that will bind them all and added on our fine crafting area 
     for the more dainty metals. It is our mission to bring you, the customer, the same 
     amazing lasts forever quality that you would expect to be dug up from a thousand 
     years ago, and put it in your hands`},
  ];
  classParagraph = [
    {type: 'header', text: 'Lessons'},
    {type: 'paragraph', text: `Instruction, classes, forge nights, special events. Keep an
     eye out for our special events and class schedule. We do all sorts of stuff within 
     our local community as well as the occasional rendezvous out of town. If you want to 
     join one of our classes we have the perfect place for you. Our shop has both gas, and 
     coke forges, and can support quite a few students at a time. Here you will learn the 
     basics of forge management, tapering, bends, twists, and if you really want to we 
     will show you how to make something cool in your last lesson. If you already have a 
     bit of skill we have classes for you guys and gals as well. We go over the basics of 
     tool making, tempering, forge welding, and high quality finish work. What if you have 
     a special someone and want to go on a unique date? We do date nights for coupes to 
     come down. She can make herself something nice and you can make her something nice 
     too. Don’t miss out, give us a call or email today and set up your time at the forge. 
     Contact.
      `},
  ];
  constructor() { }

  ngOnInit() {
  }

}
