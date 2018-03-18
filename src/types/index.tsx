// src/types/index.tsx
export namespace Store {
  export type All = { 
    enthusiasm: Tenthusiasm
    tickets: Ttickets
  };

  export type Tenthusiasm = { enthusiasmLevel: number; };
  export type Ttickets = { tickets: Icolumn[] };
}

export interface Idetails { name: string; }

export interface Iticket { name: string; body: string; }

export interface Icolumn { details: Idetails; tickets: Iticket[]; }

export interface AppProps {
  enthusiasm: Store.Tenthusiasm;
  tickets: Store.Ttickets;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
