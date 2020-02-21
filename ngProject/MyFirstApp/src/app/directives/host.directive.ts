import { Directive, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive({
  selector: "[appHost]"
})
export class HostDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer) {}

  @HostListener("mouseover") onMouseOver() {
    this.Scale();
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.Original();
  }

  Scale() {
    // this.renderer.setElementStyle(
    //   this.elementRef.nativeElement,
    //   "width",
    //   "500"
    // );
    // this.renderer.setElementStyle(
    //   this.elementRef.nativeElement,
    //   "height",
    //   "500"
    // );

    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      "-webkit-transform",
      "scale(2)"
    );

    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      "overflow",
      "hidden"
    );
    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      "z-index",
      "9999999"
    );
    this.renderer.setElementStyle(this.elementRef.nativeElement, "top", "50");
  }

  Original() {
    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      "-webkit-transform",
      "scale(1)"
    );

    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      "position",
      "inherit"
    );

    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      "z-index",
      "99"
    );
  }
}
