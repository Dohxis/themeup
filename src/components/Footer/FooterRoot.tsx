import { useContext } from "react";
import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";
import LayoutContext from "../Layout/LayoutContext";

interface FooterRootInterface {
  className?: ClassNameType;
  innerClassName?: ClassNameType;
  children?: React.ReactNode;
}

export const FooterRoot: React.FunctionComponent<FooterRootInterface> = ({
  className,
  innerClassName,
  children,
}) => {
  const layoutContext = useContext(LayoutContext);

  return (
    <div className={classNames("border-t", className)}>
      <nav
        className={classNames(
          "mx-auto flex justify-between space-x-8 py-12",
          layoutContext.sectionClassNames,
          innerClassName
        )}
      >
        {children}
      </nav>
    </div>
  );
};
