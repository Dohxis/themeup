import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface FooterColumnInterface {
  title?: string;
  className?: ClassNameType;
  children?: React.ReactNode;
}

export const FooterColumn: React.FunctionComponent<FooterColumnInterface> = ({
  title,
  className,
  children,
}) => {
  return (
    <div className={classNames(className)}>
      {title && <div className="mb-2 font-medium text-gray-900">{title}</div>}
      <ul className="flex flex-col space-y-2">{children}</ul>
    </div>
  );
};
