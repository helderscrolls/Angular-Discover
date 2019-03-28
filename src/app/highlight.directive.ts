import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
    }

    @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
        this.renderer.addClass(this.elRef.nativeElement, 'auBoutDeMaLife')
    }

    @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
        this.renderer.removeClass(this.elRef.nativeElement, 'auBoutDeMaLife')
    }
}