import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from './material.module';
import { ItsSnackBarComponent } from './its-snack-bar/its-snack-bar.component';
import { ItsSnackBar2Component } from './its-snack-bar2/its-snack-bar2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ItsSnackBarComponent,
    ItsSnackBar2Component
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [ItsSnackBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
