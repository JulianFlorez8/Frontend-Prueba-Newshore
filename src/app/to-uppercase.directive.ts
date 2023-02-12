import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[toUppercase]',
})
export class ToUppercaseDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    this.el.nativeElement.value = value.toUpperCase();
  }
}
