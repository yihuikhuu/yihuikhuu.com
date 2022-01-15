import { ArrowLeftIcon } from "@heroicons/react/outline";
import Hero from "components/Hero";
import Title from "components/Title";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const LumientFirst: NextPage = () => (
  <>
    <Head>
      <title>Lumient - Yihui Khuu</title>
    </Head>
    <Hero>
      <Title size="large">Coming soon.</Title>
    </Hero>
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[32.4rem] sm:min-h-[27.9rem] md:min-h-[26.9rem]">
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
                  delay: 0.75,
                },
              },
            }}
          >
            <Link href="/about">
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

export default LumientFirst;
