import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/indredeint.model";

@Injectable()
export class ShoppingListService {
  changedIngrList = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Butter", 50),
    new Ingredient("Paneer", 60),
    new Ingredient("Cheez", 70)
  ];
  constructor() {}

  getIngredientList() {
    return this.ingredients.slice();
  }
  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
    this.changedIngrList.emit(this.getIngredientList());
  }

  // deleteAllIngredient() {
  //   this.ingredients.
  // }
}
