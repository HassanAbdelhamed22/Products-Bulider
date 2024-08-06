import { ChangeEvent, useState } from "react";
import ProductCart from "./components/ProductCart";
import Modal from "./components/UI/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import { IProduct } from "./interfaces";

const App = () => {
  /*STATE*/
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  /*HANDLER*/
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  /*RENDER*/
  const renderProductList = productList.map((product) => (
    <ProductCart key={product.id} product={product} />
  ));

  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-[2px] text-[16px] font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
    </div>
  ));

  return (
    <main className="container">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        Add
      </Button>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4 gap-2 m-5 p-2"
      >
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-500 hover:bg-gray-600"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
