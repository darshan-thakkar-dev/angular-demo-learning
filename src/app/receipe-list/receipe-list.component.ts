import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Receipe } from "../receipes/receipe.model";
import { RecipeListService } from "./recipe-list.service";

@Component({
  selector: "app-receipe-list",
  templateUrl: "./receipe-list.component.html",
  styleUrls: ["./receipe-list.component.css"]
})
export class ReceipeListComponent implements OnInit {
  @Output() receipeWasSelected = new EventEmitter<Receipe>();
  receipes: Receipe[] = [];
  constructor(private recipeService: RecipeListService) {}

  ngOnInit() {
    this.receipes = this.recipeService.getRecipe();
  }

  onReceipeSelected(receipe: Receipe) {
    this.receipeWasSelected.emit(receipe);
  }
}
