import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  type: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}

export default function Input({
  icon,
  type,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className="flex items-center gap-2 border p-2 rounded-md bg-gray-50 dark:bg-gray-700">
      <span>{icon}</span>
      <input
        className="flex-1 bg-transparent outline-none"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
