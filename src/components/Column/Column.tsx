interface ColumnInterface {
  children?: React.ReactNode | React.ReactNode[];
}

export const Column: React.FunctionComponent<ColumnInterface> = ({
  children,
}) => {
  return <div className="grid grid-cols-1 gap-10">{children}</div>;
};
