import Navbar from "../Components/NavBar/NavBar"; // Ensure correct path
import { SwapTokenContextProvider } from "../context/swapContext"; // Fixed import
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <SwapTokenContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </SwapTokenContextProvider>
  </div>
);

export default MyApp;
