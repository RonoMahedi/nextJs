import Link from "next/link";
import { useRouter } from "next/router";


const ProductDetail = ()=>{
    const router = useRouter()
    const productId = router.query.productId
    return(
        <div>
            <Link href="/product">Product</Link>
            <h1>Details About Product {productId}</h1>
            
        </div>
    )
}

export default ProductDetail;