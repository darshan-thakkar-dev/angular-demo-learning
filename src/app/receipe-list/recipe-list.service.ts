import { EventEmitter, Injectable } from "@angular/core";
import { Receipe } from "../receipes/receipe.model";
@Injectable()
export class RecipeListService {
  recipeSelected = new EventEmitter<Receipe>();

  receipes: Receipe[] = [
    new Receipe(
      "Pizza",
      "Margarita Pizza",
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
    ),
    new Receipe(
      "Pizza",
      "Cheezy Pizza",
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
    )
  ];
  constructor() {}

  getRecipe() {
    return this.receipes.slice();
  }
}
