import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appDropdownDirective]"
})
export class DropdownDirectiveDirective {
  @HostBinding("class.show") open = false;
  constructor(private element: ElementRef) {}

  @HostListener("click") openDropDown() {
    this.open = !this.open;
    this.element.nativeElement
      .querySelector(".dropdown-menu")
      .classList.toggle("show");
  }
}
