import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from "./components/registration/registration.component";
import {QuestOfferComponent} from "./components/quest-offer/quest-offer.component";
import {FirstTaskComponent} from "./components/first-task/first-task.component";


const routes: Routes = [
  {path: 'registration', component: RegistrationComponent },
  { path: '',   redirectTo: '/registration', pathMatch: 'full' },
  { path: 'rules', component: QuestOfferComponent },
  { path: 'first-task', component: FirstTaskComponent },
  {path: '**', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
