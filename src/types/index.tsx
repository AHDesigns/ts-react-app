// src/types/index.tsx
// export interface StoreState { enthusiasmLevel: number; }

// export namespace Store {

//   export type All = { enthusiasm: Enthusiasm };
// }

export interface Ienthusiasm { enthusiasmLevel: number; }

// export interface Store {
//   enthusiasm: Enthusiasm;
// }

export interface Idetails { name: string; }

export interface Iticket { name: string; body: string; }

export interface Icolumn { details: Idetails; tickets: Iticket[]; }

export interface AppProps {
  enthusiasm: Ienthusiasm;
  tickets?: any;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
