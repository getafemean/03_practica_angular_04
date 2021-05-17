import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaNgIfComponent } from './directiva-ng-if/directiva-ng-if.component';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';
import { DirectivaNgSwitchComponent } from './directiva-ng-switch/directiva-ng-switch.component';
import { DirectivaNgClassComponent } from './directiva-ng-class/directiva-ng-class.component';
import { DirectivaNgStyleComponent } from './directiva-ng-style/directiva-ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNgIfComponent,
    DirectivaNgForComponent,
    DirectivaNgSwitchComponent,
    DirectivaNgClassComponent,
    DirectivaNgStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
