import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appForDelay]'
})
export class ForDelayDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }


  items: Array<string> = [];

  @Input()
  set appForDelayOf(array: string[]) {
    this.items = array;
    let i = 0;
    this.items.forEach(b => {
      setTimeout(() =>{
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: b })
      },1000*i);
      i+=1;

    });
  }
}
