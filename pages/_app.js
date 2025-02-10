import { Navbar }  from "../Components/index"
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    < Component {...pageProps} />
  </div>
)

export default MyApp;