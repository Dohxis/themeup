import { Fragment } from "react";

interface PaymentFieldInterface {
  selected: string;
  onSelect: (method: string) => void;
  methods: string[];
}

export const PaymentField: React.FunctionComponent<PaymentFieldInterface> = ({
  selected,
  onSelect,
  methods,
}) => {
  return (
    <div className="grid grid-cols-4 gap-1">
      <Item
        image={methods[0]}
        selected={methods[0] === selected}
        onClick={() => onSelect(methods[0])}
      />
      <Item
        image={methods[1]}
        selected={methods[1] === selected}
        onClick={() => onSelect(methods[1])}
      />
      <Item
        image={methods[2]}
        selected={methods[2] === selected}
        onClick={() => onSelect(methods[2])}
      />
      <Item
        image={methods[3]}
        selected={methods[3] === selected}
        onClick={() => onSelect(methods[3])}
      />

      <Item
        image={methods[4]}
        selected={methods[4] === selected}
        onClick={() => onSelect(methods[4])}
      />
      <Item
        image={methods[5]}
        selected={methods[5] === selected}
        onClick={() => onSelect(methods[5])}
      />
      <Item
        image={methods[6]}
        selected={methods[6] === selected}
        onClick={() => onSelect(methods[6])}
      />
      <Item
        image={methods[7]}
        selected={methods[7] === selected}
        onClick={() => onSelect(methods[7])}
      />
    </div>
  );
};

const Item: React.FunctionComponent<{
  image?: string;
  selected: boolean;
  onClick: () => void;
}> = ({ image, onClick, selected }) =>
  image !== undefined ? (
    <button
      onClick={onClick}
      className={`mb-2 mr-2 flex-shrink-0 cursor-pointer rounded-md border border-gray-200 px-4 py-2 shadow-sm transition duration-150 ${
        selected ? "bg-gray-100" : "hover:bg-gray-50"
      }`}
    >
      <img src={image} className="mx-auto h-8" alt="" />
    </button>
  ) : (
    <Fragment />
  );
