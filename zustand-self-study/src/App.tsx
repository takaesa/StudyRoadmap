import { useStore } from "zustand";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card";
import { PRODUCT_DATA } from "./lib/mockData";
import { ChangeQtyButtons } from "./components/ui/ChangeQtyButtons";


export default function App(){

  const addProduct = useStore((state) => state.addProduct);
  const cartProducts = useStore((state) => state.products);

  return <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
    <h1 className="text-2xl">Products:</h1>
    <div className="space-y-2">
      {PRODUCT_DATA.map((product) => (
        <Card key={product.id}>
          <CardHeader>{product.name}</CardHeader>
          <CardContent> {product.price}$</CardContent>
          <CardFooter>
            {cartProducts.find((item) => item.id === product.id) ? (
              <ChangeQtyButtons productId={product.id}></ChangeQtyButtons>
            ): (
            <Button onClick={()=> addProduct(product)} variant="default">
              Add To Cart
              </Button>
            )}
            </CardFooter>
        </Card>
      ))}
    </div>
  </main>
}