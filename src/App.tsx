import ProductCart from "./components/ProductCart";
import { productList } from "./data";

const App = () => {
  const renderProductList = productList.map((product) => (
    <ProductCart key={product.id} product={product} />
  ));

  return (
    <main className="container">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4 gap-2 m-5 p-2"
      >
        {renderProductList}
      </div>
    </main>
  );
};

export default App;
