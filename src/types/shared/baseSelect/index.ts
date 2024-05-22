export interface IBaseSelect {
  rules: any[];
  label?: string;
  disable: boolean;
  options: any[];
  optionLabel: string;
  optionValue: string;
  isMultiple?: boolean;
  placeholder?: string;
  mapOption?: boolean;
  emitValue?: boolean;
  bgWhite?: boolean;
}
