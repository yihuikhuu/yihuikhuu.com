import { ArrowLeftIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hero from "components/Hero";
import Title from "components/Title";

const Success: NextPage = () => (
  <>
    <Head>
      <title>Success - Yihui Khuu</title>
      <meta name="description" content="Message sent to Yihui Khuu" />
    </Head>
    <Hero>
      <Title size="large">
        <span className="block">Message received.</span>
        <motion.span
          className="block text-violet-500"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                delay: 0.75,
              },
            },
          }}
        >
          I will get back to you as soon as possible.
        </motion.span>
      </Title>
    </Hero>

    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[27.4rem] sm:min-h-[21.9rem] md:min-h-[23.1rem]">
        <div className="relative overflow-hidden">
          <motion.div
            className="m-1"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  delay: 1.5,
                },
              },
            }}
          >
            <Link href="/">
              <a className="mt-8 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                <ArrowLeftIcon className="mr-2 w-5 h-5" />
                Go back
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </>
);

export default Success;
