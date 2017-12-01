import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppComponent }  from './app.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_V1, KeyUpComponent_V2, KeyUpComponent_V3, KeyUpComponent_V4 } from './keyup.component';
import { LoopBackComponent } from './loop-back.component'
import { LittleTourComponent } from "./little-tour.component"

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      //AppComponent,
      ClickMeComponent,
      KeyUpComponent_V1,
      KeyUpComponent_V2,
      KeyUpComponent_V3,
      KeyUpComponent_V4,
      LoopBackComponent,
      LittleTourComponent
     ],
  bootstrap:    [ //AppComponent, 
  ClickMeComponent,
  KeyUpComponent_V1,
  KeyUpComponent_V2,
  KeyUpComponent_V3,
  KeyUpComponent_V4,
  LoopBackComponent, 
  LittleTourComponent]
})
export class AppModule { }
