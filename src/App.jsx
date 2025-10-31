import MediaProvider from "./contexts/MediaContext";
import Test from "./test/Test";

export default function App() {
    return <>

       <MediaProvider>
         <Test />
       </MediaProvider>

    </>
}