import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from "./components/registration/registration.component";
import {QuestOfferComponent} from "./components/quest-offer/quest-offer.component";
import {FirstTaskComponent} from "./components/first-task/first-task.component";
import {SecondTaskComponent} from "./components/second-task/second-task.component";
import {ThrdQuestionComponent} from "./components/thrd-question/thrd-question.component";
import {FoursQuestionComponent} from "./components/fours-question/fours-question.component";


const routes: Routes = [
  {path: 'registration', component: RegistrationComponent },
  { path: '',  component: RegistrationComponent },
  { path: 'rules', component: QuestOfferComponent },
  { path: 'first-task', component: FirstTaskComponent },
  { path: 'second-task', component: SecondTaskComponent },
  { path: 'third-task', component: ThrdQuestionComponent },
  { path: 'fours-task', component: FoursQuestionComponent },
  {path: '**', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
