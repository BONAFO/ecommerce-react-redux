import { useScreen } from "../contexts/ScreenContext";
import Carousel from "./Carousel/Carousel";
import ProductCard from "./Carousel/ProductCard";
import LandingLoader from "./LandingLoader";
import Nav from "./Nav/Nav";

export default function Test() {
    const { isMobile } = useScreen();

    // [<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,]

    return <>

        {/* <div>
            <div className={`${isMobile ? 'text-center' : ''} inline-block`}>
    


            </div>

        </div> */}

            {/* <Nav/> */}

            {/* <Carousel cards={[<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,]}/> */}
   <Nav/>
            <LandingLoader componentes={[
                <Carousel cards={[<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,]}/>,
                <Carousel cards={[<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,]}/>,
                <Carousel cards={[<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,]}/>,
                <Carousel cards={[<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,]}/>,
                <Carousel cards={[<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,]}/>,
                <Carousel cards={[<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,]}/>,
                <Carousel cards={[<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,]}/>,
                <Carousel cards={[<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,]}/>,
                <Carousel cards={[<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,<ProductCard/>,]}/>,
            ]}/>

            
    </>
}

