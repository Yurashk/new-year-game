import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionsService} from "../../services/questions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  correct:boolean=false;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private questionsService:QuestionsService,private router:Router) {
    this.myForm = this.formBuilder.group({
      agentNumber: [null, [Validators.required,Validators.max(9)]],
      agentNumber2: [null, [Validators.required,Validators.maxLength(1)]],
      agentNumber3: [null, [Validators.required,Validators.maxLength(1)]],
    });
  }
  ngOnInit(): void {
  }
  checkCorrect(event){
    let next = event.target.nextElementSibling;
    if (next && event.target.value) {
      next.focus();
    } else {
      event.target.blur();
    }
    this.correct=false;
  }
  submitForm(){
    let currentAgent:number=this.myForm.value.agentNumber*100+this.myForm.value.agentNumber2*10+this.myForm.value.agentNumber3;
    let a:any=this.questionsService.getAgentNumbers();
    if(a.find(x=>x.id==currentAgent)){

      localStorage.setItem('currentAgent', String(currentAgent));
      this.router.navigate(['rules']);
    }
    else this.correct=true
    console.log('Form submitted!',a.find(x=>x.id==currentAgent))
  }

}
