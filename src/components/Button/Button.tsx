import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface ButtonInterface<AsType extends React.ElementType> {
  as?: AsType;
  className?: ClassNameType;
  children?: React.ReactNode | React.ReactNode[];
}

type PolymorphicButtonInterface<AsType extends React.ElementType> =
  ButtonInterface<AsType> & React.ComponentPropsWithoutRef<AsType>;

export const Button = <AsType extends React.ElementType = "button">({
  as,
  className,
  children,
  ...props
}: PolymorphicButtonInterface<AsType>) => {
  const ButtonComponent = as || "button";

  return (
    <ButtonComponent
      {...props}
      className={classNames(
        "flex items-center justify-center rounded-sm bg-black px-6 py-3 font-medium text-white transition duration-150 hover:bg-gray-700",
        className
      )}
    >
      {children}
    </ButtonComponent>
  );
};
