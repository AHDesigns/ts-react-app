// src/types/index.tsx
export interface StoreState { enthusiasmLevel: number; }
// export namespace Store {

//   export type Enthusiasm = { enthusiasmLevel: number };

//   export type All = { enthusiasm: Enthusiasm };
// }

export interface Idetails { name: string; }

export interface Iticket { name: string; body: string; }

export interface Icolumn { details: Idetails; tickets: Iticket[]; }

export interface AppProps {
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
