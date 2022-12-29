import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface TitledImageInterface<AsType extends React.ElementType> {
  imageUrl: string;
  title: string;
  as?: AsType;
  className?: ClassNameType;
  children?: React.ReactNode | React.ReactNode[];
}

type PolymorphicTitledImageInterface<AsType extends React.ElementType> =
  TitledImageInterface<AsType> & React.ComponentPropsWithoutRef<AsType>;

export const TitledImage = <AsType extends React.ElementType = "div">({
  as,
  imageUrl,
  title,
  className,
  children,
  ...props
}: PolymorphicTitledImageInterface<AsType>) => {
  const Component = as || "div";

  return (
    <Component {...props} className={classNames(className)}>
      <img
        src={imageUrl}
        alt={title}
        className="mb-1 h-48 bg-cover bg-center"
      />

      <h2 className="text-gray-900">{title}</h2>

      {children}
    </Component>
  );
};
