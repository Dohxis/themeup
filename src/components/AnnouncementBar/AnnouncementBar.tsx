import { useContext } from "react";
import type { ClassNameType } from "../../library/ClassNames";
import { classNames } from "../../library/ClassNames";
import LayoutContext from "../Layout/LayoutContext";

interface AnnouncementBarInterface {
  className?: ClassNameType;
  innerClassName?: ClassNameType;
  children?: React.ReactNode;
}

export const AnnouncementBar: React.FunctionComponent<
  AnnouncementBarInterface
> = ({ className, innerClassName, children }) => {
  const layoutContext = useContext(LayoutContext);

  return (
    <div className={classNames("bg-gray-900", className)}>
      <div
        className={classNames(
          "mx-auto flex justify-center py-2 text-sm text-white",
          layoutContext.sectionClassNames,
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};
