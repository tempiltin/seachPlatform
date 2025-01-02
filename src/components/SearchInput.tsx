import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative mb-8">
     
      <input
        type="text"
        placeholder="."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3  rounded-xl  outline-none transition duration-200"
      />
    </div>
  );
}