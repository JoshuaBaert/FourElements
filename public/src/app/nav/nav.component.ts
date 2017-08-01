import {Component, HostListener, OnInit, ViewChild, Renderer2} from '@angular/core';

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.scss'],
  template: `
    <div class="nav-main nav-relative" #nav>
      <nav>
        <ul>
          <li>
            <a>The Forge</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Display Case</a>
          </li>
          <li>
            <a>Custom Orders</a>
          </li>
          <li>
            <a>Classes</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>

    </div>
  `
})
export class NavComponent implements OnInit {
  @ViewChild('nav') navMain;
  relative = true;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(event) {
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
