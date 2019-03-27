import { HighLightDirective } from './highlight.directive';
import { NullTemplateVisitor } from '@angular/compiler';

describe('HighlightDirective', () => {
    it('should create an instance', () => {
        const directive = new HighLightDirective(null, null);
        expect(directive).toBeTruthy();
    });
});