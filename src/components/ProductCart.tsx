import { IProduct } from "../interfaces";
import { formatPrice, textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./UI/Button";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  setProductToEditIndex: (value: number) => void;
  index: number;
}

const ProductCart = ({
  product,
  setProductToEdit,
  openEditModal,
  setProductToEditIndex,
  index,
}: IProps) => {
  const { category, colors, description, imageURL, price, title } = product;

  /* RENDER */
  const renderColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  /* HANDLER */
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIndex(index);
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-xl p-4 shadow-lg flex flex-col">
      <Image
        imageURL={imageURL}
        alt="product name"
        className="rounded-lg mb-4 h-52 w-full lg:object-cover"
      />

      <h2 className="text-xl font-semibold">{textSlicer(title, 25)}</h2>
      <p className="text-gray-500 mt-3">{textSlicer(description)}</p>

      <div className="flex items-center my-3 flex-wrap gap-2">
        {renderColors}
      </div>

      <div className="flex items-center justify-between">
        <span className=" text-violet-700 font-semibold text-lg py-1 px-1 rounded-lg">
          ${formatPrice(price)}
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">{category.name}</span>
          <Image
            imageURL={category.imageURL}
            alt={category.name}
            className="w-10 h-10 rounded-full object-center"
          />
        </div>
      </div>

      <div className="flex gap-2 rounded-lg mt-4">
        <Button
          className="bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center justify-center space-x-2"
          width="w-full"
          onClick={onEdit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12H9m0 0H5m4 0h4m0 0v4m0-4V8m0 0l-4-4m4 4h4m0 0h4"
            />
          </svg>
          <span>Edit</span>
        </Button>
        <Button
          className="bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center space-x-2"
          width="w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>Remove</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCart;
