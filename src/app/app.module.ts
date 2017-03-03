import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppComponent }  from './app.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_V1, KeyUpComponent_V2 } from './keyup.component';
import { LoopBackComponent } from './loop-back.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      //AppComponent,
      ClickMeComponent,
      KeyUpComponent_V1,
      KeyUpComponent_V2,
      LoopBackComponent
     ],
  bootstrap:    [ //AppComponent, 
  ClickMeComponent,
  KeyUpComponent_V1,
  KeyUpComponent_V2,
  LoopBackComponent]
})
export class AppModule { }
