import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // name = 'Angular ' + VERSION.major;
  name = "";

  selectedTab= "Recipe";

  onNavigate(tab:string){
    this.selectedTab=tab;
  }
}
