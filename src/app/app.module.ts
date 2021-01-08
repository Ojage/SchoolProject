import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { ListviewComponent } from './listview/listview.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { MessagesComponent } from './messages/messages.component';
import { StudentsearchComponent } from './studentsearch/studentsearch.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardviewComponent,
    ListviewComponent,
    DetailviewComponent,
    MessagesComponent,
    StudentsearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
