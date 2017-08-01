import {Component, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-picture',
  styleUrls: ['./picture.component.scss'],
  template: `
    <div class="pic-main" #pic>
      
    </div>
  `
})
export class PictureComponent implements OnInit {
  @Input() background;
  @ViewChild('pic') picMain;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(
      this.picMain.nativeElement,
      'background-image',
      `url("${this.background}")`);
  }

}
