import { ValidationRule } from 'quasar';
export interface IBaseInput {
  label: string;
  type?:
    | 'number'
    | 'date'
    | 'time'
    | 'email'
    | 'textarea'
    | 'text'
    | 'password'
    | 'search'
    | 'tel'
    | 'file'
    | 'url'
    | 'datetime-local'
    | undefined;
  rows?: number;
  hint?: string;
  isPwd?: boolean;
  bgColor?: string;
  standout?: boolean;
  outlined?: boolean;
  maxLength?: number;
  required?: boolean;
  isSearch?: boolean;
  readonly?: boolean;
  autofocus?: boolean;
  placeholder?: string;
  rules: ValidationRule;
}
