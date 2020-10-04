import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { Receipe } from '../receipes/receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  @Output()receipeWasSelected=new EventEmitter<Receipe>();
  receipes:Receipe[]=[
    new Receipe('Pizza','Margarita Pizza','https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80'),
    new Receipe('Pizza','Margarita Pizza','https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80')
  ];
  constructor() { }

  ngOnInit() {
  }

  onReceipeSelected(receipe:Receipe){
    this.receipeWasSelected.emit(receipe);
  }
}