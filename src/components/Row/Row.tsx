interface RowInterface {
  children?: React.ReactNode | React.ReactNode[];
}

export const Row: React.FunctionComponent<RowInterface> = ({ children }) => {
  const columns = Array.isArray(children) ? children.length : 1;

  return (
    <div
      className="grid gap-10"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
};
