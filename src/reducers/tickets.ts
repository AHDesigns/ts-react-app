import { Icolumn } from '../types';
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

const initialState: Icolumn[] = [
    list1,
    list2,
];

export function tickets(state: any = initialState, action: any) {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state };
        case DECREMENT_ENTHUSIASM:
            return { ...state };
        default:
            return state;
    }
}
