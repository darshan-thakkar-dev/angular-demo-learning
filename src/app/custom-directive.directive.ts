import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appCustomDirective]"
})
export class CustomDirectiveDirective {
  constructor(private eleRef: ElementRef, private render: Renderer2) {}

  @HostListener("mouseover") mouseHover(evenData: Event) {
    this.render.setStyle(
      this.eleRef.nativeElement,
      "background-color",
      "#17a2b8"
    );
    this.render.setStyle(
      this.eleRef.nativeElement,
      "cursor",
      "pointer"
    );
  }

  @HostListener("click") mouseClick(evenData: Event) {
    this.render.setStyle(
      this.eleRef.nativeElement,
      "background-color",
      "#cc"
    );
  }

  @HostListener("mouseleave") mouseLeave(evenData: Event) {
    this.render.setStyle(
      this.eleRef.nativeElement,
      "background-color",
      "transparent"
    );
  }
}
