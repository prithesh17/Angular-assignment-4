import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]',
  standalone: true
})
export class ClickDirective {
  counter : number = 0;
  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.counter++;
    console.log('Counter:', this.counter);
  }
}
