import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { QuestOfferComponent } from './components/quest-offer/quest-offer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FirstTaskComponent } from './components/first-task/first-task.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestOfferComponent,
    RegistrationComponent,
    FirstTaskComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
