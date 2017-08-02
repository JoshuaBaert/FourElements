import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="footer-main">
      <div class="foot-wrap">
        <div class="left-right-wrap">
          <div class="foot-left">
            <b>Address</b>
            <p>Your street here <br> Your city state zip</p>

            <b>Hours</b>
            <p>Some days 9:00am - something pm<br> what ever else you need here</p>
          </div>
          <div class="foot-right">
            <b>Contact us</b>
            <p>We need to talk about what you want here. This could definately use some more
              stuff here.</p>
          </div>
        </div>
        <div class="foot-bottom">
          <div class="social">
            <a href="https://www.etsy.com/shop/FourElementsForgeLLC" target="_blank">
              <div class="icon-div"><i class="fa fa-etsy icons" aria-hidden="true"></i></div>
            </a>
            
          </div>
        </div>
        
      </div>
      
    </div>
  `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
