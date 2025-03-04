import { create } from "zustand"; // import create from zustand
import { Button } from "./components/ui/button";

const useStore = create<{
  // create a store
  count: number; // store state  (count)
  inc: () => void; // store action (inc)
  dec: () => void; // store action (dec)
}>((set) => ({
  // set is a function to update the store
  count: 0, // initial state
  inc: () => set((state) => ({ count: state.count + 1 })), // action to increment the count
  dec: () => set((state) => ({ count: state.count - 1 })), // action to decrement the count
})); // end of store

const ZustandBasic = () => {
  const store = useStore(); // use the store
  console.log("🚀 ~ App ~ store:", store);
  return (
    <div className="text-3xl bg-amber-300">
      <Button onClick={store.inc}>Increment</Button> {/* call the action */}
      <Count /> {/* call the action */}
      <Button onClick={store.dec}>Decrement</Button> {/* call the action */}
    </div>
  );
};

function Count() {
  // component to display the count
  const store = useStore(); // use the store
  return <div>{store.count}</div>; // display the count
}

export default ZustandBasic; // export the component
