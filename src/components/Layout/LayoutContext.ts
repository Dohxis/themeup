import React from "react";
import type { ClassNameType } from "src/library/ClassNames";

export interface LayoutContextInterface {
  sectionClassNames?: ClassNameType;
}

const LayoutContext = React.createContext<LayoutContextInterface>({});

export default LayoutContext;
