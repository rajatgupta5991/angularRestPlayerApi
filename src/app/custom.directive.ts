import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";
@Directive({
  selector: "[rajat]" //directive name
})
export class CustomDirective {
  //DI-Dependency Injection
  constructor(el: ElementRef) {
    el.nativeElement.style.background = "red";
    el.nativeElement.style.color = "white";
    el.nativeElement.style.padding = "10px";
    el.nativeElement.style.borderRadius = "10px";
    el.nativeElement.style.border = "1px solid #111";
  }
  @HostBinding("style.background") background: string = "red";
  @HostBinding("style.transform") transform: string;
  @HostBinding("style.transition") transition: string;

  @HostListener("mouseenter") mouseenter() {
    console.log("mouse entered 😃 ");
    this.background = "blue";
    this.transform = "rotate(180deg)";
    this.transition = "all 5s";
  }
  @HostListener("mouseleave") mouseleave() {
    console.log("mouse leaves here 😃");
    this.background = "green";
    this.transform = "rotate(180deg)";
    this.transition = "all 5s";
  }
}
