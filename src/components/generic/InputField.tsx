import React from "react";

type Props = {
  label?:string
  id:string
  name:string
  type : string
  value: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?:string
  required? : boolean,
  className?:string
}

const InputField = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  className = '',
} : Props) => {
  return (
    <div className={`flex flex-col gap-1 mb-4 ${className}`}>
      {label && (
        <label htmlFor={id || name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="px-3 py-2 border text-gray-700 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "
      />
    </div>
  );
};

export default InputField;
