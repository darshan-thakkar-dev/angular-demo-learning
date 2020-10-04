import { Component, ElementRef,  EventEmitter,    OnInit, Output,  ViewChild } from '@angular/core';
import { Ingredient } from '../shared/indredeint.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() addedIngredient=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    const nameIng = this.nameInputRef.nativeElement.value;
    const amountIng = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(nameIng,amountIng);
    this.addedIngredient.emit(ingredient);
  }

}