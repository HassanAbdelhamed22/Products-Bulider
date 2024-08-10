import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./UI/Button";

interface IProps {
  product: IProduct;
}

const ProductCart = ({ product }: IProps) => {
  const { category, colors, description, imageURL, price, title } = product;

  /* RENDER */
  const renderColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-lg p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt="product name"
        className="rounded-lg mb-2 h-52 w-full lg:object-cover"
      />

      <h2 className="text-xl font-semibold">{textSlicer(title, 25)}</h2>
      <p>{textSlicer(description)}</p>

      <div className="flex items-center my-3  flex-wrap gap-1 ">
        {renderColors}
      </div>
      {/* <div className="flex items-center my-3 gap-2 ">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"></span>
      </div> */}

      <div className="flex items-center justify-between">
        <span>${price}</span>
        <Image
          imageURL={category.imageURL}
          alt="product name"
          className="w-10 h-10 rounded-full object-center"
        />
      </div>

      <div className="flex gap-2 rounded-lg mt-2">
        <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full">
          EDIT
        </Button>
        <Button className="bg-red-700 hover:bg-red-800" width="w-full">
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ProductCart;
