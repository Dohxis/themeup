interface FieldSetInterface {
  label: string;
  children?: React.ReactNode;
}

export const FieldSet: React.FunctionComponent<FieldSetInterface> = ({
  label,
  children,
}) => {
  return (
    <div className="mb-12 flex-grow">
      <h2 className="mb-2 text-lg font-medium text-gray-900">{label}</h2>
      {children}
    </div>
  );
};
