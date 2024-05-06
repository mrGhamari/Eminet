export interface IBaseSelect {
  rules: unknown[];
  label?: string;
  disable: boolean;
  options: unknown[];
  optionLabel: string;
  optionValue: string;
  isMultiple?: boolean;
  placeholder?: string;
  mapOption?: boolean;
  emitValue?: boolean;
  bgWhite?: boolean;
}
