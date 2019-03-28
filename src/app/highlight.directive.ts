import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';


@Directive({
    selector: '[appHighLight]'
})
export class HighLightDirective {

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }
    @Input() showMovies;

    @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
        if (this.showMovies) {
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
        }
    }

    @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    }
}