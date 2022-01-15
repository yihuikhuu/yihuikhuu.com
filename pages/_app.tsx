import "styles/globals.css";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import Layout from "components/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <motion.div
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
      </motion.div>
    </Layout>
  );
}

export default MyApp;
