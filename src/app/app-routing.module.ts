import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from "./components/registration/registration.component";
import {QuestOfferComponent} from "./components/quest-offer/quest-offer.component";
import {FirstTaskComponent} from "./components/first-task/first-task.component";
import {SecondTaskComponent} from "./components/second-task/second-task.component";
import {ThrdQuestionComponent} from "./components/thrd-question/thrd-question.component";
import {FoursQuestionComponent} from "./components/fours-question/fours-question.component";
import {FifthQuestionComponent} from "./components/fifth-question/fifth-question.component";
import {SixsQuestionComponent} from "./components/sixs-question/sixs-question.component";
import {SevensQuestionComponent} from "./components/sevens-question/sevens-question.component";
import {EightsQuestionComponent} from "./components/eights-question/eights-question.component";
import {FinalQuestionComponent} from "./components/final-question/final-question.component";


const routes: Routes = [
  {path: 'registration', component: RegistrationComponent },
  { path: '',  component: RegistrationComponent },
  { path: 'rules', component: QuestOfferComponent },
  { path: 'first-task', component: FirstTaskComponent },
  { path: 'second-task', component: SecondTaskComponent },
  { path: 'third-task', component: ThrdQuestionComponent },
  { path: 'fours-task', component: FoursQuestionComponent },
  { path: 'fifth-task', component: FifthQuestionComponent },
  { path: 'sixes-task', component: SixsQuestionComponent },
  { path: 'sevens-task', component: SevensQuestionComponent },
  { path: 'eights-task', component: EightsQuestionComponent },
  { path: 'final-task', component: FinalQuestionComponent },
  {path: '**', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
