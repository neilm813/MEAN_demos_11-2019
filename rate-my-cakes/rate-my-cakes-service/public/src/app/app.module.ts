import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CakeComponent } from './cake/cake.component';
import { SummaryComponent } from './summary/summary.component';
import { HttpService } from './http.service';
import { CakeService } from './cake.service';

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService, CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
