import { useContext } from "react";
import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";
import LayoutContext from "../Layout/LayoutContext";

interface OverlayedImageRootInterface {
  imageUrl: string;
  width?: "full" | "constrained";
  className?: ClassNameType;
  innerClassName?: ClassNameType;
  children?: React.ReactNode;
}

export const OverlayedImageRoot: React.FunctionComponent<
  OverlayedImageRootInterface
> = ({ imageUrl, width = "full", className, innerClassName, children }) => {
  const layoutContext = useContext(LayoutContext);

  return (
    <div
      className={classNames(
        "mx-auto aspect-[192/65] bg-cover bg-center",
        width === "constrained" && layoutContext.sectionClassNames,
        className
      )}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div
        className={classNames(
          "mx-auto flex h-full flex-col justify-center space-y-4",
          width === "full" && layoutContext.sectionClassNames,
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};
