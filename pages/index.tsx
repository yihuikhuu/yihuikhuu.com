import { ArrowRightIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hero from "components/Hero";
import Subtitle from "components/Subtitle";
import Title from "components/Title";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Yihui Khuu</title>
      </Head>
      <Hero className="text-left">
        <Title size="large">
          <span className="block">Hello.</span>
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
            My name is Yihui Khuu.
          </motion.span>
        </Title>
        <Subtitle className="mt-3 max-w-md">
          <motion.span
            className="text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
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
            A professional software developer.
          </motion.span>
        </Subtitle>
      </Hero>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[27.6rem] sm:min-h-[22.4rem] md:min-h-[20.6rem]">
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
              <Link href="/about">
                <a className="mt-8 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                  More about me
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
