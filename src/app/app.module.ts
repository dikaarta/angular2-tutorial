import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppComponent }  from './app.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_V1 } from './keyup.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      //AppComponent,
      ClickMeComponent,
      KeyUpComponent_V1
     ],
  bootstrap:    [ //AppComponent, 
  ClickMeComponent,
  KeyUpComponent_V1]
})
export class AppModule { }
