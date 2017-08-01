import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-para',
  styleUrls: ['./para.component.scss'],
  template: `
    <div class="para">
      <div class="para-wrap">
        <div *ngFor="let section of info">
          <h3 *ngIf="section.type == 'header'">{{section.text}}</h3>
          <b *ngIf="section.type == 'sub-header'">{{section.text}}</b>
          <p *ngIf="section.type == 'paragraph'">{{section.text}}</p>
        </div>
    </div>
  `
})
export class ParaComponent implements OnInit {
  @Input() info = [
    {type : 'header', text: 'Some Header'},
    {type : 'sub-header', text: 'Some sub-head'},
    {type : 'paragraph', text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vehicula felis. Aenean auctor quis ex quis fermentum. Integer dignissim felis sapien, sit amet dignissim massa tincidunt at. Suspendisse id placerat nulla, nec congue ante. Proin varius tellus sed tellus porta, ut tempus magna sollicitudin. Nulla sed nisi urna. Duis rutrum magna quis tortor tristique, rhoncus lobortis libero interdum. Nunc vulputate dictum est, ac tristique urna finibus sed. Pellentesque mollis arcu ac ligula luctus, malesuada condimentum sapien congue. Aliquam ut odio convallis lectus aliquam mattis vel id sem. Nunc nec turpis sit amet enim luctus faucibus eu at leo. Cras egestas ligula a turpis luctus posuere. Cras non scelerisque nisi.`},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
