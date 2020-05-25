import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultFont: string= 'verdana';
  @Input() highlightFont: string= 'calibri';

  //Using dependency injection to make renderer and the element 
  //on which it needs to be applied available as soon as it is instantiated
  constructor(private renderer: Renderer2, private elemRef: ElementRef) { }
  //Using Host Binding to set rendering properties of specific elements
  @HostBinding('style.fontSize') fontSize: string = '14px';
  @HostBinding('style.color') color: string = 'black';
  @HostBinding('style.fontFamily') fontFamily: string = this.defaultFont;

  ngOnInit(){
    this.fontFamily= this.defaultFont;
    //this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
    this.fontSize = '20px';
    this.color = 'yellow';
    this.fontFamily = this.highlightFont;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
    this.fontSize = '12px';
    this.color = 'black';
    this.fontFamily = this.defaultFont;
  }

}
