import { Component, Input,  OnInit, Output } from '@angular/core';
import { Receipe } from '../receipes/receipe.model';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit {
  @Input()recipe:Receipe;
  constructor() { }

  ngOnInit() {
  }

}