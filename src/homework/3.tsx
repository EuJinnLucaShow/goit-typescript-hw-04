import React, { useState } from 'react';

type FormComponentProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FormComponent({ value: propValue, onChange: propOnChange }: FormComponentProps) {
  const [value, setValue] = useState(propValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    propOnChange(event);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
