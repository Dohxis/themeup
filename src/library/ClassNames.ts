import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type ClassNameType = ClassValue | ClassValue[];

export const classNames = (...input: ClassValue[]) => twMerge(clsx(input));
