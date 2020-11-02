import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ServerComponent } from "../server/server.component";
import { HeaderComponent } from "./header/header.component";
import { ReceipeItemComponent } from "./receipe-item/receipe-item.component";
import { ReceipeDetailsComponent } from "./receipe-details/receipe-details.component";
import { ReceipeListComponent } from "./receipe-list/receipe-list.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ReceipesComponent } from "./receipes/receipes.component";
import { NgClassAndNgStyleComponent } from "./ng-class-and-ng-style/ng-class-and-ng-style.component";
import { CustomDirectiveDirective } from "./custom-directive.directive";
import { DropdownDirectiveDirective } from "./shared/dropdown-directive.directive";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeListService } from "./receipe-list/recipe-list.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ServerComponent,
    HeaderComponent,
    ReceipeItemComponent,
    ReceipeDetailsComponent,
    ReceipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ReceipesComponent,
    NgClassAndNgStyleComponent,
    CustomDirectiveDirective,
    DropdownDirectiveDirective
  ],
  bootstrap: [AppComponent],
  providers: [RecipeListService, ShoppingListService]
})
export class AppModule {}
