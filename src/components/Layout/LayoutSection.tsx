import { useContext } from "react";
import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";
import LayoutContext from "./LayoutContext";

interface LayoutSectionInterface {
  title?: string;
  description?: string;
  className?: ClassNameType;
  titleClassName?: ClassNameType;
  descriptionClassName?: ClassNameType;
  children?: React.ReactNode;
}

export const LayoutSection: React.FunctionComponent<LayoutSectionInterface> = ({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  children,
}) => {
  const layoutContext = useContext(LayoutContext);

  return (
    <section
      className={classNames(
        "mx-auto w-full",
        layoutContext.sectionClassNames,
        className
      )}
    >
      {title && (
        <h2
          className={classNames(
            "mb-6 text-center text-2xl text-gray-900",
            description ? "mb-1" : "mb-6",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={classNames(
            "mb-6 text-center text-lg text-gray-500",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}

      {children}
    </section>
  );
};
