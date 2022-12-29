import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface OverlayedImageTitleInterface {
  className?: ClassNameType;
  children?: React.ReactNode;
}

export const OverlayedImageTitle: React.FunctionComponent<
  OverlayedImageTitleInterface
> = ({ className, children }) => {
  return (
    <h1 className={classNames("text-4xl font-semibold text-white", className)}>
      {children}
    </h1>
  );
};
