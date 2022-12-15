import { NgModule } from '@angular/core';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddSkilComponent } from './components/skil/add-skil/add-skil.component';
import { ListSkillComponent } from './components/skil/list-skill/list-skill.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';
import { EditSkillComponent } from './components/skil/edit-skill/edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSkilComponent,
    ListSkillComponent,
   
    NotificationComponent,
        EditSkillComponent,
 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
