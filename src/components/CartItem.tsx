export const CartItem: React.FunctionComponent<{ item: any }> = ({ item }) => {
  return (
    <li className="flex text-sm text-neutral-700">
      <div className="mr-4 flex-shrink-0">
        <img src={item.image} className="w-16 rounded-md border" alt="" />
      </div>
      <div className="flex flex-grow flex-col justify-center">
        <span className="font-medium text-neutral-900">{item.name}</span>
        <div className="font-norma flex">
          <span className="text-neutral-600">Quantity</span>
          <span className="ml-0.5 flex cursor-pointer items-center rounded-md px-1 text-neutral-700 transition duration-150 hover:bg-black/30">
            {item.quantity}
            <svg
              className="ml-0.5 h-2 w-2 text-gray-400"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path
                d="M10.193 3.97a.75.75 0 0 1 1.062 1.062L6.53 9.756a.75.75 0 0 1-1.06 0L.745 5.032A.75.75 0 0 1 1.807 3.97L6 8.163l4.193-4.193z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex items-center font-medium">{item.total}€</div>
    </li>
  );
};
