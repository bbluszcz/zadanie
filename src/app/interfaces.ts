import { FormControl, FormGroup } from "@angular/forms";

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};

export interface RootForm {
  home: number | null;
  foreign: number | null;
  fx: number | null | undefined;
}

export interface CurrentRateResponse {
  table:         string;
  no:            string;
  effectiveDate: string;
  rates:         Rate[];
}

export interface Rate {
  currency: string;
  code:     string;
  mid:      number;
}

