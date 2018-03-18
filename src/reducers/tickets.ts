import { EnthusiasmAction } from '../actions';
import { Icolumn, Store } from '../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const list1: Icolumn = {
    details: {
        name: 'Chuff!',
    },
    tickets: [
        { name: 'ticket1 title', body: 'ticket body' },
        { name: 'ticket2 title', body: 'ticket body' },
        { name: 'ticket2 title', body: 'ticket body' },
        { name: 'ticket2 title', body: 'ticket body' },
        { name: 'ticket2 title', body: 'ticket body' },
        { name: 'ticket2 title', body: 'ticket body' },
        { name: 'ticket2 title', body: 'ticket body' },
        { name: 'ticket2 title', body: 'ticket body' },
    ],
};

const list2: Icolumn = {
    details: { name: 'list2' }, tickets: [
        { name: 'ticket1 title', body: 'ticket body' }
    ],
};

const sampleTickets: Icolumn[] = [
    list1,
    list2
]; 

export const initialState: Store.Ttickets = { tickets: [] };

export function tickets(state: Store.Ttickets = initialState, action: EnthusiasmAction) {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, tickets: sampleTickets };
        case DECREMENT_ENTHUSIASM:
            return initialState;
        default:
            return state;
    }
}
