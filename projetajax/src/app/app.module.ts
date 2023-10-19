import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceListComponentComponent } from './device-list-component/device-list-component.component';
import { TestcompComponent } from './testcomp/testcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponentComponent,
    TestcompComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
