import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[toUppercase]',
})
export class ToUppercaseDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const upperValue = value.toUpperCase();
    if (this.el.nativeElement.value !== upperValue) {
      this.el.nativeElement.value = upperValue;
      this.el.nativeElement.dispatchEvent(new Event('input'));
    }
  }
}
