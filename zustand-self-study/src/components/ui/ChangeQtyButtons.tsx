import { useShallow } from "zustand/shallow"
import { Button } from "./button";
import { Minus,Plus } from "lucide-react";
import { useStore } from "@/store/store";

type Props = {productId: string}

export function ChangeQtyButtons({productId}: Props) {

    const {getProductById, decQty, incQty} = useStore(useShallow((state) => ({
        getProductById: state.getProductById,
        decQty: state.decQty,
        incQty: state.incQty,   
    })));

    const product = getProductById(productId);
  return (
    <>
    {product && (
        <div className="flex gap-2 items-center">
            <Button onClick={()=> decQty(product.id)} size="icon">
                <Minus/>
            </Button>
            <p>{product.qty}</p>
            <Button onClick={()=> incQty(product.id)} size="icon">
                <Plus/>
            </Button>
        </div>
    )}
    </>
  )
}
