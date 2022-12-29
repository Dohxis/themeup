import LayoutContext from "./LayoutContext";

interface LayoutRootInterface {
  children?: React.ReactNode;
}

export const LayoutRoot: React.FunctionComponent<LayoutRootInterface> = ({
  children,
}) => {
  return (
    <LayoutContext.Provider
      value={{ sectionClassNames: "max-w-screen-xl px-4" }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
