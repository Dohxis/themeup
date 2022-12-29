import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { FieldSet } from "./FieldSet";

export interface DeliveryOptionInterface {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface DeliveryStepInterface {
  selectedOption: DeliveryOptionInterface;
  setSelectedOption: (value: DeliveryOptionInterface) => void;
  deliveryOptions: DeliveryOptionInterface[];
}

export const DeliveryStep: React.FunctionComponent<DeliveryStepInterface> = ({
  deliveryOptions,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <FieldSet label="Delivery">
      <RadioGroup
        value={selectedOption.id}
        onChange={(value) =>
          setSelectedOption(
            deliveryOptions.find((option) => option.id === value)!
          )
        }
        className="space-y-2"
        name="deliveryOption"
      >
        {deliveryOptions.map((deliveryOption) => (
          <RadioGroup.Option
            key={deliveryOption.id}
            value={deliveryOption.id}
            className={({ checked }) =>
              clsx({
                "flex cursor-pointer items-center rounded-md border border-gray-200 px-3 py-2 shadow-sm transition duration-150":
                  true,
                "bg-gray-50": checked,
              })
            }
          >
            <div className="flex-grow">
              <h3 className="text-sm font-medium text-gray-900">
                {deliveryOption.title}
              </h3>
              <p className="text-xs text-gray-700">
                {deliveryOption.description}
              </p>
            </div>
            <span className="text-sm font-medium text-gray-700">
              {deliveryOption.price.toFixed(2)}€
            </span>
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </FieldSet>
  );
};
