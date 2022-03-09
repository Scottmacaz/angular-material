import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from './material.module';
import { ItsSnackBarComponent } from './its-snack-bar/its-snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ItsSnackBarComponent
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
