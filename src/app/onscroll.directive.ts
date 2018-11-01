import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnscroll]'
})
export class OnscrollDirective implements OnInit {
  @Input('os-class') private _osClass: string
  @Input('os-elem') private _osElem: ElementRef

  constructor( private renderer: Renderer2 ) { }
  ngOnInit(): void {
    this.renderer.addClass(this._osElem.nativeElement, this._osClass)
  }
}
