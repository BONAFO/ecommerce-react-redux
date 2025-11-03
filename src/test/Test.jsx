import ProductCard from "./ProductCard";
import { useMedia } from '../contexts/MediaContext';
import Carousel from "./Carousel";

export default function Test() {
    const { isMobile } = useMedia();
    return <>

        <div>
            <div className={`${isMobile ? 'text-center' : ''} inline-block`}>
                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}


                <Carousel cards={[<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />]}/>

            </div>

        </div>

    </>
}

