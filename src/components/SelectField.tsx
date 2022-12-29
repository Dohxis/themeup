import { Listbox } from "@headlessui/react";
import clsx from "clsx";

interface SelectInterface {
  label: string;
  value: string;
}

interface SelectFieldInterface {
  label: string;
  name: string;
  options: SelectInterface[];
  selectedOption: string;
  onOptionChange: (value: string) => void;
}

export const SelectField: React.FunctionComponent<SelectFieldInterface> = ({
  label,
  options,
  selectedOption,
  onOptionChange,
}) => {
  const currentOption = options.find(
    (option) => option.value === selectedOption
  );

  return (
    <div className="w-full">
      <label className="mb-0.5 block w-full text-sm font-medium text-gray-600">
        {label}
      </label>

      <Listbox value={selectedOption} onChange={onOptionChange}>
        <div className="relative">
          <Listbox.Button className="mb-4 flex h-9 w-full items-center rounded-md border border-gray-200 px-3 py-2 text-sm font-light placeholder-gray-400 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-100">
            <span className="flex-grow text-left">{currentOption?.label}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-mr-1 h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </Listbox.Button>
          <Listbox.Options className="absolute -mt-3 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white py-2 shadow-sm focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                className={({ active, selected }) =>
                  clsx(
                    "flex cursor-pointer pr-3 hover:bg-gray-100 focus:ring-inset focus:!ring-offset-0",
                    active && "bg-gray-100",
                    selected && "bg-gray-50 font-medium"
                  )
                }
                value={option.value}
              >
                <div className="w-full px-4 py-1">
                  <span>{option.label}</span>
                </div>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};
