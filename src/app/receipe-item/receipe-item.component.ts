import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Receipe } from '../receipes/receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input()recipe : Receipe;
  @Output() recipeSelected=new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeSelected.emit();
  }

}