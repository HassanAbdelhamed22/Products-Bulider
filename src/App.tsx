import { ChangeEvent, FormEvent, useState } from "react";
import ProductCart from "./components/ProductCart";
import Modal from "./components/UI/Modal";
import { categories, colors, formInputsList, productList } from "./data";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import Error from "./components/Error";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import SelectMenu from "./components/UI/SelectMenu";
import { TProductName } from "./types";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  /*STATE*/
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  let [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  /*HANDLER*/
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openEditModal = () => setIsOpenEditModal(true);
  const closeEditModal = () => setIsOpenEditModal(false);
  const openConfirmModal = () => setIsOpenConfirmModal(true);
  const closeConfirmModal = () => setIsOpenConfirmModal(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidation({
      title: product.title,
      description: product.description,
      imageURL: product.imageURL,
      price: product.price,
      colors: tempColors,
    });

    // Check if any property has a value of "" && Check if all properties have a value of ""
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);

    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
  };

  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidation({
      title: productToEdit.title,
      description: productToEdit.description,
      imageURL: productToEdit.imageURL,
      price: productToEdit.price,
      colors: tempColors,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    const updatedProducts = [...products];
    updatedProducts[productToEditIndex] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
    };
    setProducts(updatedProducts);

    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    closeModal();
  };

  const removeProductHandler = () => {
    
  };

  const onEditCancel = () => {
    setProductToEdit(defaultProductObj);
    closeEditModal();
  };

  /*RENDER*/
  const renderProductList = products.map((product, index) => (
    <ProductCart
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      openConfirmModal={openConfirmModal}
      index={index}
      setProductToEditIndex={setProductToEditIndex}
    />
  ));

  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
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
      <Error message={errors[input.name]} />
    </div>
  ));

  const renderColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item != color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item != color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: TProductName
  ) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="mb-[2px] text-[16px] font-medium text-gray-700"
        >
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <Error message={errors[name]} />
      </div>
    );
  };

  return (
    <main className="container">
      <div className="flex  items-center md:flex-row justify-between mt-10 mx-5 px-2 space-y-0">
        <h1 className="font-bold text-xl md:text-3xl">
          Product <span className="text-violet-700">Builder</span>
        </h1>
        <Button
          className="bg-indigo-700 hover:bg-indigo-800 w-[43%] md:w-[40%] lg:w-[20%] xl:w-[10%] py-2 text-center"
          onClick={openModal}
        >
          Build a Product
        </Button>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4 gap-4 m-5 p-2"
      >
        {renderProductList}
      </div>
      {/* Add Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <SelectMenu
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex items-center my-3  flex-wrap gap-1 ">
            {tempColors.map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="text-white p-1 rounded-md text-sm mb-1 mr-1"
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center my-3  flex-wrap gap-1 ">
            {renderColors}
          </div>
          {errors.colors && <Error message={errors.colors} />}

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-[#f5f5fa] hover:bg-gray-300 transition duration-300 !text-black"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        title="Edit This Product"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "Product Description",
            "description"
          )}
          {renderProductEditWithErrorMsg("imageURL", "Image URL", "imageURL")}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}

          <SelectMenu
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />

          <div className="flex items-center my-3  flex-wrap gap-1 ">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="text-white p-1 rounded-md text-sm mb-1 mr-1"
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center my-3  flex-wrap gap-1 ">
            {renderColors}
          </div>
          {errors.colors && <Error message={errors.colors} />}

          <div className="flex items-center space-x-3">
            <Button type="submit" className="bg-indigo-700 hover:bg-indigo-800">
              Edit
            </Button>
            <Button
              className="bg-[#f5f5fa] hover:bg-gray-300 transition duration-300 !text-black"
              onClick={onEditCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* DELETE PRODUCT CONFIRM MODAL */}
      <Dialog
        open={isOpenConfirmModal}
        onClose={closeConfirmModal}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-red-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Are you sure you want to remove this product from your
                      store?
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Deleting this product will remove it permanently from
                        your inventory. Any associated data, sales history, and
                        other related information will also be deleted. Please
                        make sure this is intended action.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-3">
                <Button
                  type="button"
                  onClick={removeProductHandler}
                  className="bg-[#c2344d]    hover:bg-red-800 transition duration-300"
                >
                  Yes, remove
                </Button>
                <Button
                  type="button"
                  data-autofocus
                  onClick={() => setIsOpenConfirmModal(false)}
                  className="bg-[#f5f5fa] hover:bg-gray-300 transition duration-300 !text-black"
                >
                  Cancel
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </main>
  );
};

export default App;
