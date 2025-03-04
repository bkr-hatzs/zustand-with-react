import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

type Props = { productId: string };

const ChangeQtyButtons = ({ productId }: Props) => {
  const { getProductById, decQty, incQty } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decQty: state.decQty,
      incQty: state.incQty,
    }))
  );

  const product = getProductById(productId);

  return (
    <>
      {product && (
        <div className="flex gap-2 items-center">
          <Button size="icon" onClick={() => decQty(product.id)}>
            <Minus />
          </Button>
          <p>{product.qty}</p>
          <Button size="icon" onClick={() => incQty(product.id)}>
            <Plus />
          </Button>
        </div>
      )}
    </>
  );
};

export default ChangeQtyButtons;
