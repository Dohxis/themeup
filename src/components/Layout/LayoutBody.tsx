import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface LayoutBodyInterface {
  className?: ClassNameType;
  children?: React.ReactNode;
}

export const LayoutBody: React.FunctionComponent<LayoutBodyInterface> = ({
  className,
  children,
}) => {
  return (
    <main className={classNames("flex flex-col space-y-32 py-32", className)}>
      {children}
    </main>
  );
};
