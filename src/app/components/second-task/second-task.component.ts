import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionsService} from "../../services/questions.service";
import {Router} from "@angular/router";
import {Questions} from "../../models/questions";
import {Agent} from "../../models/agent";

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent implements OnInit {
  currentAgent:Agent;
  correct:boolean=false;
  currentQuestions:Questions;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private questionsService:QuestionsService,private router:Router) {
    this.myForm = this.formBuilder.group({
      agentAnswer: [null, [Validators.required]],
    });
  }

  ngOnInit() {

    let a:any=this.questionsService.getAgentNumbers();
    this.currentAgent=a.find(x=>x.id==Number(localStorage.getItem('currentAgent')))
    this.currentQuestions=this.questionsService.getQuestions(2,this.currentAgent.id);
  }
  submitForm(){
    console.log(this.myForm.value.agentAnswer)
    if(this.currentQuestions.answer===this.myForm.value.agentAnswer){
      this.router.navigate(['third-task']);
    }
    else this.correct=true

  }

}
