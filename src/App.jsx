

import AuthProvider from "./contexts/AuthContext";
import ScreenProvider from "./contexts/ScreenContext";
import "./styles/main.css"
import Test from "./test/Test";

export default function App() {
  return <>

    <ScreenProvider>
      <AuthProvider>
        <Test />
      </AuthProvider>
    </ScreenProvider>

  </>
}