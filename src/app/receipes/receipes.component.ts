import { Component, OnInit } from "@angular/core";
import { RecipeListService } from "../receipe-list/recipe-list.service";
import { Receipe } from "./receipe.model";

@Component({
  selector: "app-receipes",
  templateUrl: "./receipes.component.html",
  styleUrls: ["./receipes.component.css"]
})
export class ReceipesComponent implements OnInit {
  selectedRecipe: Receipe;
  constructor(private recipeService: RecipeListService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Receipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
