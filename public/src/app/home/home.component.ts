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
        [info]="sampleParagraph"
      ></app-para>

      <app-picture
        [background]="'./assets/img/img2.jpg'"
      ></app-picture>

      <app-para
      ></app-para>

      <app-picture
        [background]="'./assets/img/img1.jpg'"
      ></app-picture>

    </div>
  `
})
export class HomeComponent implements OnInit {
  sampleParagraph = [
    {type: 'header', text: 'Some Header'},
    {type: 'paragraph', text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vehicula felis. Aenean auctor quis ex quis fermentum. Integer dignissim felis sapien, sit amet dignissim massa tincidunt at. Suspendisse id placerat nulla, nec congue ante. Proin varius tellus sed tellus porta, ut tempus magna sollicitudin. Nulla sed nisi urna. Duis rutrum magna quis tortor tristique, rhoncus lobortis libero interdum. Nunc vulputate dictum est, ac tristique urna finibus sed. Pellentesque mollis arcu ac ligula luctus, malesuada condimentum sapien congue. Aliquam ut odio convallis lectus aliquam mattis vel id sem. Nunc nec turpis sit amet enim luctus faucibus eu at leo. Cras egestas ligula a turpis luctus posuere. Cras non scelerisque nisi.`},
    {type: 'sub-header', text: 'Some sub-head'},
    {type: 'paragraph', text: `Etiam non odio et lacus porta hendrerit quis at libero. Nam tincidunt vestibulum risus, ut lobortis ex dignissim eget. Suspendisse tincidunt nunc ut massa accumsan, ut iaculis tellus congue. Donec cursus lacus in elit consectetur interdum. Vestibulum vitae velit purus. Duis tempor sem nec dapibus fringilla. Morbi suscipit neque eu fermentum ultrices. Nunc malesuada metus eget augue pellentesque rhoncus. Donec condimentum condimentum felis sit amet suscipit. In vitae pulvinar lectus. Donec non felis sit amet tellus iaculis rhoncus. Fusce euismod lacus vel diam ultricies hendrerit.`},
    {type: 'sub-header', text: 'Some other sub-head'},
    {type: 'paragraph', text: `Nam et fringilla ligula. Ut tincidunt gravida orci, eu semper metus tristique a. Praesent hendrerit ut ipsum eget rutrum. Curabitur ornare scelerisque lacus, non vestibulum eros maximus et. Nulla laoreet est sed pretium hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in purus id metus vulputate lobortis. Ut viverra tristique diam vel cursus. Duis lacinia nibh dui, sit amet consequat diam fermentum sit amet.`},
    {type: 'sub-header', text: 'one more sub-head'},
    {type: 'paragraph', text: `Mauris at justo et tellus gravida aliquet. Phasellus quis augue at risus pulvinar sodales nec imperdiet massa. Nam non leo vitae nulla lacinia blandit. Mauris lacinia tempus quam, vel dictum dolor congue in. Quisque posuere felis ut urna ultrices, et hendrerit eros luctus. Aliquam bibendum nulla in ante dignissim tincidunt. Duis a venenatis lorem. Suspendisse vel erat tempus, iaculis leo vitae, auctor diam. Mauris vestibulum dui non tellus volutpat, vitae ultrices mauris eleifend. Duis consequat, erat vel aliquam mattis, turpis quam luctus enim, eget auctor est mauris quis elit. Mauris euismod magna a lectus aliquam, nec fringilla nunc fermentum. Integer ultrices, eros ac consequat fermentum, ipsum tortor pellentesque diam, in aliquam tortor felis at arcu. Sed ut ultricies purus. Suspendisse eget maximus enim. Nulla mollis massa enim, eu lacinia turpis dignissim in.`},
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.sampleParagraph);
  }

}
