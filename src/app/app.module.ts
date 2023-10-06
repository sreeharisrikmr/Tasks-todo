import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageNotFoundComponent,
    NewTaskComponent,
    EditTaskComponent,
    ViewTaskComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
