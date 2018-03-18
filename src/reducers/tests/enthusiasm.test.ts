import { enthusiasm, initialState } from '../enthusiasm';
import { incrementEnthusiasm } from '../../actions';

describe('enthusiasm', () => {
    describe('initial state', () => {
        it('should match a snapshot', () => {
            expect(initialState).toEqual({
                enthusiasmLevel: 5
            });
        });
    });

    describe('incrementEnthusiasm', () => {
        it('it should add 1', () => {
            const action = incrementEnthusiasm();
            const state = enthusiasm(initialState, action);
            expect(state.enthusiasmLevel).toBe(6);
        });
    });

    // etc...
});