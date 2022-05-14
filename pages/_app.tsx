import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { FavouritesContextProvider } from "../providers/FavouritesContextProvider";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <FavouritesContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FavouritesContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
