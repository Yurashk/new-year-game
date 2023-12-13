import { Component, OnInit } from '@angular/core';
import {QuestionsService} from "../../services/questions.service";
import {Questions} from "../../models/questions";

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent implements OnInit {
  currentAgent:number=null;
  currentQuestions:Questions[]=[];
  constructor(private questionsService:QuestionsService) { }

  ngOnInit() {
    this.currentAgent=Number(localStorage.getItem('currentAgent'));
    this.currentQuestions=this.questionsService.getQuestions(1,this.currentAgent);
    console.log( this.currentQuestions)
  }

}
