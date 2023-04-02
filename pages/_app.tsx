import "styles/globals.css";
import type { AppProps } from "next/app";
import { m } from "framer-motion";
import Layout from "components/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <m.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </m.div>
    </Layout>
  );
}

export default MyApp;
