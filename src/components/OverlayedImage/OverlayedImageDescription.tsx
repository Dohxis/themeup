import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface OverlayedImageDescriptionInterface {
  className?: ClassNameType;
  children?: React.ReactNode;
}

export const OverlayedImageDescription: React.FunctionComponent<
  OverlayedImageDescriptionInterface
> = ({ className, children }) => {
  return (
    <p className={classNames("text-lg text-white", className)}>{children}</p>
  );
};
