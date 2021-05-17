import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaNgIfComponent } from './directiva-ng-if/directiva-ng-if.component';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNgIfComponent,
    DirectivaNgForComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
