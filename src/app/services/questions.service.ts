import {Injectable} from '@angular/core';
import {Agent} from "../models/agent";
import {Questions} from "../models/questions";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  agentsNumbers: Agent[] = [
    {id: 777, team: 1,memberSide:1},
    {id: 690, team: 1,memberSide:2},
    {id: 111, team: 2,memberSide:1},
    {id: 303, team: 2,memberSide:2},
    {id: 906, team: 3,memberSide:1},
    {id: 228, team: 3,memberSide:2}];

  agentsQuestions:Questions[]=[
    {id:1,memberId:777,questionNumber:1,question:'1 питання для 777',title:'asdasd',answer:25},
    {id:2,memberId:690,questionNumber:1,question:'1 питання для 690',title:'asdasd',answer:25},
    {id:3,memberId:111,questionNumber:1,question:'1 питання для 111',title:'asdasd',answer:25},
    {id:4,memberId:303,questionNumber:1,question:'1 питання для 303',title:'asdasd',answer:25},
    {id:5,memberId:906,questionNumber:1,question:'1 питання для 906',title:'asdasd',answer:25},
    {id:6,memberId:228,questionNumber:1,question:'1 питання для 228',title:'asdasd',answer:25},
    {id:7,memberId:777,questionNumber:2,question:'2 питання для 777',title:'asdasd',answer:25},
    {id:8,memberId:690,questionNumber:2,question:'2 питання для 690',title:'asdasd',answer:25},
    {id:9,memberId:111,questionNumber:2,question:'2 питання для 111',title:'asdasd',answer:25},
    {id:10,memberId:303,questionNumber:2,question:'2 питання для 303',title:'asdasd',answer:25},
    {id:11,memberId:906,questionNumber:2,question:'2 питання для 906',title:'asdasd',answer:25},
    {id:12,memberId:228,questionNumber:2,question:'2 питання для 228',title:'asdasd',answer:25},

  ]

  constructor() {
  }

  getAgentNumbers(): Array<Agent> {
    return this.agentsNumbers
  }
  getQuestions(questionNumber:number,memberId:number):Array<Questions>{
    return this.agentsQuestions.filter(x=>x.memberId==memberId && x.questionNumber==questionNumber)
  }
}
