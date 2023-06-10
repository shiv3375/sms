import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LocationComponent } from './main-view/components/location/location.component';
import { FormsModule } from '@angular/forms';
import { MainViewComponent } from './main-view/main-view.component';
import { HeaderComponent } from './main-view/components/header/header.component';
import { SidebarComponent } from './main-view/components/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    LocationComponent,
    MainViewComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    MatSortModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
