import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { QuestOfferComponent } from './components/quest-offer/quest-offer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FirstTaskComponent } from './components/first-task/first-task.component';
import { SecondTaskComponent } from './components/second-task/second-task.component';
import { ThrdQuestionComponent } from './components/thrd-question/thrd-question.component';
import { FoursQuestionComponent } from './components/fours-question/fours-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestOfferComponent,
    RegistrationComponent,
    FirstTaskComponent,
    SecondTaskComponent,
    ThrdQuestionComponent,
    FoursQuestionComponent
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
