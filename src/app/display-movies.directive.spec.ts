import { DisplayMoviesDirective } from './display-movies.directive';

describe('DisplayGuestsDirective', () => {
    it('should create an instance', () => {
        const directive = new DisplayMoviesDirective(null, null);
        expect(directive).toBeTruthy();
    });
});