import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";
import { Ingredient } from "../shared/indredeint.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;
  // @Output() addedIngredient=new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAdd() {
    const nameIng = this.nameInputRef.nativeElement.value;
    const amountIng = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(nameIng, amountIng);
    // this.addedIngredient.emit(ingredient);
    // console.log(ingredient);
    this.shoppingListService.addIngredient(new Ingredient(nameIng, amountIng));
  }
}
