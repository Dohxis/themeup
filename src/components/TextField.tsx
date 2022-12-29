interface TextFieldInterface {
  label: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "tel";
}

export const TextField: React.FunctionComponent<TextFieldInterface> = ({
  label,
  name,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="w-full">
      <label className="mb-0.5 block w-full text-sm font-medium text-gray-600">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mb-4 block h-9 w-full rounded-md border border-gray-200 px-3 py-2 text-sm font-light placeholder-gray-400 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-100"
      />
    </div>
  );
};
