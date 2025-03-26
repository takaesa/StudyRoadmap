import { useRouter } from "next/router";

function ProductDetail() {
    const router = useRouter();

    const productID = router.query.productID;

    return <h1>Product Detail: {productID}</h1>;
}

export default ProductDetail;