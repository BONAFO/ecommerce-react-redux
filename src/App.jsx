
import ScreenProvider from "./contexts/ScreenContext";
import Test from "./test/Test";

export default function App() {
    return <>

       <ScreenProvider>
         <Test />
       </ScreenProvider>

    </>
}