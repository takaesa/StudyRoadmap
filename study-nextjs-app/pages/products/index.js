function ProductList({ products }) {
    return (
        <>
            <h1>Product List</h1 >
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <h2>
                            {product.id} - {product.title} - {product.price}
                        </h2>
                    </div>
                )
            })}
        </>
    )
}

export default ProductList

// export async function getStaticPaths() {

//     return {
//         paths,
//         fallback: 'blocking',

//     }
// }

export async function getStaticProps() {

    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();

    return {
        props: {
            products: data
        },
        revalidate: 10
    }
}