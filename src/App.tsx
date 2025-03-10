import ChangeQtyButtons from "./components/ChangeQtyButtons";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import { PRODUCTS_DATA } from "./lib/mockData";
import { useStore } from "./store/store";

const App = () => {
  const addProduct = useStore((state) => state.addProduct);
  const cartProducts = useStore((state) => state.products);

  return (
    <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
      <h1 className="text-2xl">Products:</h1>

      <div className="space-y-2">
        {PRODUCTS_DATA.map((product) => (
          <Card key={product.id}>
            <CardHeader>{product.title}</CardHeader>
            <CardContent>{product.price}$</CardContent>
            <CardFooter>
              {cartProducts.find((item) => item.id === product.id) ? (
                <ChangeQtyButtons productId={product.id} />
              ) : (
                <Button onClick={() => addProduct(product)} variant="default">
                  Add to Cart
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default App;

// ======================!!!!!!!!!!!!!!!!!!!!!!!!!!!==========================
// ======================!!!!!!!!!!!!!!!!!!!!!!!!!!!==========================
// ======================!!!!!!!!!!!!!!!!!!!!!!!!!!!==========================

// import { useShallow } from "zustand/shallow";
// import { useStore } from "./store/store";

// METHOD 1: using store in component (most preferred way)
// const { name, age, address } = useStore(
//   useShallow((state) => ({
//     name: state.fullname,
//     age: state.age,
//     address: state.address,
//   }))
// );

// METHOD 2: using store in component (it is also preferred but if we have to destruct only 1 thing from store)
// const fullname = useStore((state) => state.fullname);

// ======================!!!!!!!!!!!!!!!!!!!!!!!!!!!==========================
// ======================!!!!!!!!!!!!!!!!!!!!!!!!!!!==========================
// ======================!!!!!!!!!!!!!!!!!!!!!!!!!!!==========================
