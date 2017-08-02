import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PictureComponent } from './picture/picture.component';
import { HomeComponent } from './home/home.component';
import { ParaComponent } from './para/para.component';
import { FooterComponent } from './footer/footer.component';
import { UnderWorkComponent } from './under-work/under-work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PictureComponent,
    HomeComponent,
    ParaComponent,
    FooterComponent,
    UnderWorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'under-work', component: UnderWorkComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
