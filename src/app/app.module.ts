import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MainAppComponent } from './main-app/main-app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,    // Add this line to enable HTTP services
    MainAppComponent
  ],
  bootstrap: [MainAppComponent]
})
export class AppModule {}

