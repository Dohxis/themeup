import clsx from "clsx";

interface FormRowInterface extends React.HTMLAttributes<HTMLDivElement> {}

export const FormRow: React.FunctionComponent<FormRowInterface> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={clsx("flex space-x-4", className)}>
      {children}
    </div>
  );
};
