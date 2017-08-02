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
            <p>1261 W 800 S <br>Orem, UT 84058</p>

            <b>Hours</b>
            <p>Mon - Fri 8:00am - 6:00 pm<br>Sat 9:00am - 2:00pm <br> Closed Sun</p>
          </div>
          <div class="foot-right">
            <b>Contact us</b>
            <p>Phone: <a href="tel:951-415-5023">951-415-5023</a> <br>
            Email: <a href="mailto:4elements4g@gmail.com">4elements4g@gmail.com</a></p>
          </div>
        </div>
        <div class="foot-bottom">
          <div class="social">
            <a class="icons" href="https://www.etsy.com/shop/FourElementsForgeLLC" target="_blank">
              <div class="icon-div"><i class="fa fa-etsy icons" aria-hidden="true"></i></div>
            </a>
            <a class="icons" href="https://www.facebook.com/profile.php?id=100013492599160" target="_blank">
              <div class="icon-div"><i class="fa fa-facebook icons" aria-hidden="true"></i></div>
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
