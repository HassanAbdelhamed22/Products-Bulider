import { useState } from "react";
import ProductCart from "./components/ProductCart";
import Modal from "./components/UI/Modal";
import { productList } from "./data";
import Button from "./components/UI/Button";

const App = () => {
  /*STATE*/
  const [isOpen, setIsOpen] = useState(false);

  /*HANDLER*/
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  /*RENDER*/
  const renderProductList = productList.map((product) => (
    <ProductCart key={product.id} product={product} />
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
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
          <Button className="bg-gray-500 hover:bg-gray-600" onClick={closeModal}>Cancel</Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
