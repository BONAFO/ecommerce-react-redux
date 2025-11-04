import { useScreen } from "../contexts/ScreenContext";
import Nav from "./Nav/Nav";

export default function Test() {
    const { isMobile } = useScreen();
    return <>

        {/* <div>
            <div className={`${isMobile ? 'text-center' : ''} inline-block`}>
    


            </div>

        </div> */}

            <Nav/>

    </>
}

