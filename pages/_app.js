import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContextProvider } from "../hooks/Context";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />;
    </ThemeContextProvider>
  );
}

export default MyApp;
