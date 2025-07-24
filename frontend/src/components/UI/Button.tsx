interface Props {
  label: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ label, type = "button" }: Props) {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
    >
      {label}
    </button>
  );
}
