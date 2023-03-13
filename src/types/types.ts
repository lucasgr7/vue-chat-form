export interface MessageType{
  id: number;
  content: string;
  received: boolean;
}

export interface FormInputType{
  id: number;
  value: string;
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
  error: string;
  validation: (value: string) => boolean | string;
}