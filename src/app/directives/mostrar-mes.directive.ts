import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMostrarMes]'
})
export class MostrarMesDirective {

  constructor(private e :ElementRef , private r: Renderer2) { }

@HostListener("mouseenter")
entrarMouse(){
  
  let p = this.e.nativeElement.querySelector(".ocultar");
  this.r.setStyle(p,"display" , "");
  this.r.setStyle(p,"color" , "purple");
  let p1 = this.e.nativeElement.querySelector(".ocultar1");
  this.r.setStyle(p1,"display" , "");
  this.r.setStyle(p1,"color" , "purple");
  // this.e.nativeElement.querySelector(".ocultar").style.display="";
  // this.e.nativeElement.querySelector(".ocultar1").style.display="";
  // this.e.nativeElement.querySelector(".ocultar").style.color="purple";
  // this.e.nativeElement.querySelector(".ocultar1").style.color="purple";

}

@HostListener("mouseleave")
saleMouse(){
  let p = this.e.nativeElement.querySelector(".ocultar");
  this.r.setStyle(p,"display" , "none");
  let p1 = this.e.nativeElement.querySelector(".ocultar1");
  this.r.setStyle(p1,"display" , "none");
  // this.e.nativeElement.querySelector(".ocultar").style.display="none";
  // this.e.nativeElement.querySelector(".ocultar1").style.display="none";
  
}
}
