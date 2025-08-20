import {
  Field,
  Label,
  Input,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';

const fieldClasses = 'space-y-4';
const labelClasses = 'text-brown-800 mb-2 block';
const inputBaseClasses =
  'w-full p-4 border-2 rounded-lg focus:ring-sage-200 bg-ivory-50/50 text-brown-800';
const errorClasses = 'text-red-600 text-sm mt-1';
const listboxButtonClasses =
  'relative w-full cursor-default rounded-lg border-2 bg-ivory-50/50 py-4 pl-4 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-sage-200';
const listboxOptionsClasses =
  'absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none';
const listboxOptionClasses =
  'relative cursor-default select-none py-2 pl-4 pr-4 data-[focus]:bg-sage-100 data-[focus]:text-sage-900 text-brown-800';

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

export function FormField({
  id,
  label,
  required = false,
  error,
  className = '',
  children,
}: FormFieldProps) {
  return (
    <Field className={`${fieldClasses} ${className}`}>
      <Label htmlFor={id} className={labelClasses} style={{ fontFamily: 'var(--font-serif)' }}>
        {label} {required && '*'}
      </Label>
      {children}
      {error && (
        <p className={errorClasses} style={{ fontFamily: 'var(--font-serif)' }}>
          {error}
        </p>
      )}
    </Field>
  );
}

interface TextInputProps {
  id: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}

export function TextInput({
  id,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  error,
  autoComplete,
}: TextInputProps) {
  return (
    <Input
      id={id}
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      className={`${inputBaseClasses} ${
        error ? 'border-red-400 focus:border-red-400' : 'border-sage-200 focus:border-sage-400'
      }`}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  );
}

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  options: SelectOption[];
  placeholder: string;
  error?: string;
  zIndex?: string;
}

export function SelectField({
  id,
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  error,
  zIndex = 'z-[100]',
}: SelectFieldProps) {
  return (
    <Listbox
      value={value}
      onChange={(newValue: string) => {
        onChange(newValue);
        if (onBlur) onBlur(newValue);
      }}
    >
      <div className="relative">
        <ListboxButton
          id={id}
          className={`${listboxButtonClasses} ${
            error ? 'border-red-400 focus:border-red-400' : 'border-sage-200 focus:border-sage-400'
          }`}
        >
          <span className="block truncate text-brown-800">
            {options.find((option) => option.value === value)?.label || placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon className="h-5 w-5 text-sage-400" aria-hidden="true" />
          </span>
        </ListboxButton>
        <ListboxOptions className={`${listboxOptionsClasses} ${zIndex}`}>
          {options.map((option) => (
            <ListboxOption key={option.value} className={listboxOptionClasses} value={option.value}>
              <span className="block truncate data-[selected]:font-medium font-normal">
                {option.label}
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
