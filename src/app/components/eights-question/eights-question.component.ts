import { Component, OnInit } from '@angular/core';
import {Agent} from "../../models/agent";
import {Questions} from "../../models/questions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionsService} from "../../services/questions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-eights-question',
  templateUrl: './eights-question.component.html',
  styleUrls: ['./eights-question.component.css']
})
export class EightsQuestionComponent implements OnInit {
  currentAgent:Agent;
  correct:boolean=false;
  currentQuestions:Questions;
  correctAnswer:boolean=false;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private questionsService:QuestionsService,private router:Router) {
    this.myForm = this.formBuilder.group({
      agentAnswer: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    let a:any=this.questionsService.getAgentNumbers();
    this.currentAgent=a.find(x=>x.id==Number(localStorage.getItem('currentAgent')))
    this.currentQuestions=this.questionsService.getQuestions(8,this.currentAgent.id);
  }
  submitForm(){
    if(this.currentQuestions.answer===this.myForm.value.agentAnswer){
      this.correctAnswer=true
      setTimeout(() => {
          this.router.navigate(['final-task'])
        }
        , 1500);
    }
    else this.correct=true
  }

}
