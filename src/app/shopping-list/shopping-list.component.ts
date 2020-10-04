import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/indredeint.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient("Butter",50),
    new Ingredient("Paneer",60),
    new Ingredient("Cheez",70)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:Ingredient){
      this.ingredients.push(ingredient);
  }

}