import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from "@agm/core";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSlideToggleModule } from "@angular/material/slide-toggle";
// import {MatSelectModule} from '@angular/material/select';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatTableModule} from '@angular/material/table';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0",
      libraries: ["places", "drawing", "geometry"],
    }),
    BrowserAnimationsModule,
    // MatSlideToggleModule,
    // MatSelectModule,
    // MatExpansionModule,
    // MatDatepickerModule,
    // MatTableModule,
    // MatFormFieldModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
