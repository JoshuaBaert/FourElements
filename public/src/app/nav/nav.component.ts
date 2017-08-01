import {Component, HostListener, OnInit, ViewChild, Renderer2} from '@angular/core';

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.scss'],
  template: `
    <div class="nav-main nav-relative" #nav>
      
    </div>
  `
})
export class NavComponent implements OnInit {
  @ViewChild('nav') navMain;
  relative = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) public onScroll(event){
    if (event.target.scrollingElement.scrollTop < 200 && this.relative === false) {
      this.renderer.removeClass(this.navMain.nativeElement, 'nav-fixed');
      this.renderer.addClass(this.navMain.nativeElement, 'nav-relative');
      this.relative = !this.relative;
    }
    if (event.target.scrollingElement.scrollTop >= 200 && this.relative === true) {
      this.renderer.removeClass(this.navMain.nativeElement, 'nav-relative');
      this.renderer.addClass(this.navMain.nativeElement, 'nav-fixed');
      this.relative = !this.relative;
    }
  }
}
