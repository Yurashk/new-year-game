import { Component, OnInit } from '@angular/core';
import {QuestionsService} from "../../services/questions.service";
import {Questions} from "../../models/questions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent implements OnInit {
  currentAgent:number=null;
  currentQuestions:Questions;
  correct:boolean=false;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private questionsService:QuestionsService,private router:Router) {
    this.myForm = this.formBuilder.group({
      agentNumber: [null, [Validators.required,Validators.max(9)]],
      agentNumber2: [null, [Validators.required,Validators.maxLength(1)]],
      agentNumber3: [null, [Validators.required,Validators.maxLength(1)]],
    });
  }

  ngOnInit() {
    this.currentAgent=Number(localStorage.getItem('currentAgent'));
    this.currentQuestions=this.questionsService.getQuestions(1,this.currentAgent);
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
    if(this.currentQuestions.answer===currentAgent){
      localStorage.setItem('currentAgent', String(currentAgent));
      this.router.navigate(['second-task']);
    }
    else this.correct=true

  }

}
