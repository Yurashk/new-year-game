import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-quest-offer',
  templateUrl: './quest-offer.component.html',
  styleUrls: ['./quest-offer.component.css']
})
export class QuestOfferComponent implements OnInit {
  isChecked:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToFirstTask(){
    this.router.navigate(['first-task']);
  }
}
