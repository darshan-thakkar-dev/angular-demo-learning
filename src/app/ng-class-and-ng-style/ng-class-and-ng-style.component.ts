import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-class-and-ng-style",
  templateUrl: "./ng-class-and-ng-style.component.html",
  styleUrls: ["./ng-class-and-ng-style.component.css"]
})
export class NgClassAndNgStyleComponent implements OnInit {
  numbersList = [1, 2, 3, 4, 5, 6, 7, 10, 9];
  isOdd = true;
  tempList = [1, 2, 3, 4, 5, 6, 7, 10, 9];
  constructor() {}
  btnText: string = "ODD NUMBERS";

  ngOnInit() {
    this.clickedOnButton();
  }

  clickedOnButton() {
    this.tempList = this.numbersList;
    if (this.isOdd) {
      this.isOdd = false;
      this.btnText = "EVEN NUMBERS";
      this.tempList = this.tempList.filter(x => {
        return x % 2 === 0;
      });
    } else {
      this.isOdd = true;
      this.btnText = "ODD NUMBERS";
      this.tempList = this.tempList.filter(x => {
        return x % 2 !== 0;
      });
    }
  }
}
