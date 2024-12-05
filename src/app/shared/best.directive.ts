import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBest]'
})
export class BestDirective {

  @HostBinding('class.open') openMenu = false;

  constructor() { }

  @HostListener('click') onClick() {
    this.openMenu = !this.openMenu
  }

}
