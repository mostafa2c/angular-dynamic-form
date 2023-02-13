export interface ControlBase {
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: { key: string; value: string }[];
  minLength?: number;
  pattern?: string;
  accessLevel: string;
}
